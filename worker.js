// Cloudflare Worker: serves static assets and proxies AirLabs API requests

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

async function handleAirLabsProxy(url, env) {
  const apiKey = env.AIRLABS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Pass through query params (dep_iata, arr_iata, etc.)
  const params = new URLSearchParams(url.search);
  params.set('api_key', apiKey);

  const apiUrl = `https://airlabs.co/api/v9/schedules?${params.toString()}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeout);

    const data = await resp.text();

    return new Response(data, {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': resp.status === 200 ? 'public, max-age=60' : 'no-cache',
      },
    });
  } catch (err) {
    const msg = err.name === 'AbortError' ? 'AirLabs API timed out' : 'Upstream request failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 504,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
