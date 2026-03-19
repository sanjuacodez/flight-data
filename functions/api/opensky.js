// Cloudflare Pages Function: proxies OpenSky API requests to avoid CORS issues.
// Route: /api/opensky?dir=arrival&airport=KJFK&begin=...&end=...

export async function onRequest(context) {
  const url = new URL(context.request.url);
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

  // Only allow arrival/departure endpoints
  const endpoint = dir === 'arrival' ? 'arrival' : 'departure';

  const apiUrl = `https://opensky-network.org/api/flights/${endpoint}?airport=${encodeURIComponent(airport)}&begin=${encodeURIComponent(begin)}&end=${encodeURIComponent(end)}`;

  // Forward auth header if present
  const headers = {};
  const auth = context.request.headers.get('Authorization');
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
