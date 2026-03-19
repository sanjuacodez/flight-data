// Cloudflare Worker: serves static assets and proxies OpenSky API requests with OAuth2

// Cache the OAuth2 token in memory (shared across requests on same isolate)
let tokenCache = { token: null, expiresAt: 0 };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy OpenSky API requests
    if (url.pathname === '/api/opensky') {
      return handleOpenSkyProxy(url, request, env);
    }

    // For all other requests, pass through to static assets
    return env.ASSETS.fetch(request);
  }
};

async function getAccessToken(env) {
  // Return cached token if still valid (with 60s buffer)
  if (tokenCache.token && Date.now() < tokenCache.expiresAt - 60000) {
    return tokenCache.token;
  }

  const clientId = env.OPENSKY_CLIENT_ID;
  const clientSecret = env.OPENSKY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const resp = await fetch(
    'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}`,
    }
  );

  if (!resp.ok) return null;
  const data = await resp.json();
  tokenCache.token = data.access_token;
  tokenCache.expiresAt = Date.now() + data.expires_in * 1000;
  return data.access_token;
}

async function handleOpenSkyProxy(url, request, env) {
  const dir = url.searchParams.get('dir');
  const airport = url.searchParams.get('airport');
  const begin = url.searchParams.get('begin');
  const end = url.searchParams.get('end');

  if (!dir || !airport || !begin || !end) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const endpoint = dir === 'arrival' ? 'arrival' : 'departure';
  const apiUrl = `https://opensky-network.org/api/flights/${endpoint}?airport=${encodeURIComponent(airport)}&begin=${encodeURIComponent(begin)}&end=${encodeURIComponent(end)}`;

  const headers = {};
  const token = await getAccessToken(env);
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const resp = await fetch(apiUrl, { headers, signal: controller.signal });
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
    const msg = err.name === 'AbortError' ? 'OpenSky API timed out' : 'Upstream request failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 504,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
