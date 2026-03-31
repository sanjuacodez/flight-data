// Cloudflare Worker: serves static assets and proxies AirLabs API requests
// with lazy KV caching to reduce API calls

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy AirLabs API requests
    if (url.pathname === '/api/schedules') {
      return handleAirLabsProxy(url, env);
    }

    // For all other requests, pass through to static assets
    return env.ASSETS.fetch(request);
  }
};

// Default cache TTL in seconds (2 hours — matches free plan safe limit)
const DEFAULT_TTL = 7200;

async function handleAirLabsProxy(url, env) {
  const apiKey = env.AIRLABS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse request params
  const params = new URLSearchParams(url.search);
  const depIata = params.get('dep_iata');
  const arrIata = params.get('arr_iata');
  const ttl = Math.max(60, parseInt(params.get('ttl'), 10) || DEFAULT_TTL);

  // Build cache key: flights:<IATA>:arrival or flights:<IATA>:departure
  const airportCode = arrIata || depIata || 'unknown';
  const direction = arrIata ? 'arrival' : 'departure';
  const cacheKey = `flights:${airportCode}:${direction}`;

  // ── Try KV cache first ──
  const kv = env.FLIGHT_CACHE;
  if (kv) {
    try {
      const { value, metadata } = await kv.getWithMetadata(cacheKey, { type: 'text' });
      if (value && metadata && metadata.fetchedAt) {
        const age = (Date.now() - metadata.fetchedAt) / 1000;
        if (age < ttl) {
          // Cache hit — return cached response
          return new Response(value, {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': `public, max-age=${Math.max(1, Math.floor(ttl - age))}`,
              'X-Cache': 'HIT',
              'X-Cache-Age': String(Math.floor(age)),
            },
          });
        }
      }
    } catch (_) {
      // KV unavailable — fall through to live fetch
    }
  }

  // ── Cache miss or stale — fetch from AirLabs ──
  // Remove ttl param before forwarding to AirLabs
  params.delete('ttl');
  params.set('api_key', apiKey);

  const apiUrl = `https://airlabs.co/api/v9/schedules?${params.toString()}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeout);

    const data = await resp.text();

    // Write to KV cache on successful response (non-blocking)
    if (resp.status === 200 && kv) {
      try {
        kv.put(cacheKey, data, {
          expirationTtl: ttl,
          metadata: { fetchedAt: Date.now() },
        }); // intentionally not awaited — fire and forget
      } catch (_) {
        // KV write failed — silent
      }
    }

    return new Response(data, {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': resp.status === 200 ? `public, max-age=${ttl}` : 'no-cache',
        'X-Cache': 'MISS',
      },
    });
  } catch (err) {
    // On upstream failure, try serving stale cache if available
    if (kv) {
      try {
        const stale = await kv.get(cacheKey, { type: 'text' });
        if (stale) {
          return new Response(stale, {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'public, max-age=60',
              'X-Cache': 'STALE',
            },
          });
        }
      } catch (_) {
        // KV unavailable
      }
    }

    const msg = err.name === 'AbortError' ? 'AirLabs API timed out' : 'Upstream request failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 504,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
