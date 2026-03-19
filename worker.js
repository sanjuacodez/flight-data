// Cloudflare Worker: serves static assets and proxies OpenSky API requests

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Proxy OpenSky API requests
    if (url.pathname === '/api/opensky') {
      return handleOpenSkyProxy(url, request);
    }

    // For all other requests, pass through to static assets
    return env.ASSETS.fetch(request);
  }
};

async function handleOpenSkyProxy(url, request) {
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
  const auth = request.headers.get('Authorization');
  if (auth) {
    headers['Authorization'] = auth;
  }

  try {
    const resp = await fetch(apiUrl, { headers });
    const data = await resp.text();

    return new Response(data, {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Upstream request failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
