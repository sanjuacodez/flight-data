# ✈️ Flight Data — Airport Flight Board

A real-time airport flight information display built for TV screens and monitors. Shows arrivals and departures in a split-board layout, pulling live data from the [AirLabs](https://airlabs.co/) API.

**Live Demo:** [flight-data.shankarsanjay0.workers.dev](https://flight-data.shankarsanjay0.workers.dev/)

![Flight Board Preview](https://img.shields.io/badge/status-live-brightgreen) ![AirLabs API](https://img.shields.io/badge/data-AirLabs-blue) ![Cloudflare Workers](https://img.shields.io/badge/hosted-Cloudflare%20Workers-orange)

---

## Features

- **Live Flight Data** — Real-time arrivals and departures with status (scheduled, active, landed, cancelled)
- **Professional Airport Display** — Departures on the left, arrivals on the right, with prominent airport name header — inspired by real airport FIDS boards
- **5-Column Layout** — Time | City | Flight (with airline logo + name) | Status | Terminal/Gate — clean and readable
- **International / Domestic Filter** — Pass `?mode=int` for international only, `?mode=dom` for domestic only, or `?mode=all` for everything
- **Arrival / Departure Filter** — Pass `?type=arrival` or `?type=departure` to show a single full-width panel, or `?type=all` for both
- **Cloudflare KV Caching** — Lazy caching via Cloudflare KV reduces API calls. Cache TTL syncs with the refresh interval set in Settings
- **Airline Logos** — Each flight displays the airline's logo next to the flight code with airline name below
- **Time Window Filter** — Only show flights within ±N hours of now (default ±2h). No morning flights cluttering the evening board.
- **Slideshow Mode** — `?show=1` rotates through Arrivals International → Arrivals Domestic → Departures International → Departures Domestic every 10 seconds. Uses cached data — zero extra API calls. Slide counter shown in top bar.
- **URL Parameters** — Pass `?airport=JFK`, `?mode=int`, `?type=arrival`, `?show=1` etc. for direct/shareable links (all combinable)
- **TV/Kiosk Mode** — Full-screen, auto-scrolling display designed for wall-mounted monitors
- **235 Countries, 4,600+ Airports** — Comprehensive airport database sourced from [OurAirports](https://ourairports.com/data/)
- **Auto-Scroll** — Long flight lists scroll automatically with configurable speed
- **Configurable Settings** — Country/airport picker, mode/type filters, time window, 12/24h format, refresh interval, scroll speed, dark/light theme
- **Server-Side API Proxy** — Cloudflare Worker proxies AirLabs API calls (API key stays server-side), with KV caching and stale-while-error fallback
- **Backup API Key** — Supports a fallback AirLabs key that activates automatically when the primary key is rate-limited (429) or fails
- **Smart Column Hiding** — Terminal/Gate column auto-hides when no data is available (free plan), reappears on Pro plans
- **Fully Responsive** — Adapts from large TV screens (1920px+) down to small phones (360px). Columns, fonts, and layout adjust at 1024px, 768px, 480px, and 360px breakpoints
- **Dark & Light Themes** — Professional dark blue-black theme (default) and clean light theme, switchable from Settings
- **No Framework** — Pure HTML, CSS, and JavaScript — lightweight and fast

## How It Works

1. The app queries the [AirLabs Schedules API](https://airlabs.co/docs/schedules) for arrivals and departures at the selected airport
2. API requests go through a Cloudflare Worker proxy (`worker.js`) which adds the API key server-side, avoiding CORS issues and keeping the key secret
3. Responses are cached in **Cloudflare KV** with a TTL matching the user's refresh interval. Subsequent requests within the TTL are served from cache without calling AirLabs
4. If the primary API key is rate-limited (429/401/403), the Worker automatically retries with the backup key
5. If AirLabs is down or times out, the Worker serves stale cached data as a fallback
6. Flight data is displayed in a TV-optimized split-board layout with auto-scrolling
7. Schedules cover up to ~10 hours ahead with real-time status updates

## URL Parameters

All parameters can be combined in the URL for shareable, filtered views.

| Parameter | Values | Description |
|-----------|--------|-------------|
| `airport` | IATA or ICAO code | Select airport, e.g. `?airport=JFK` or `?airport=KJFK` |
| `mode` | `int`, `dom`, `all` | `int` = international only, `dom` = domestic only, `all` = both (default) |
| `type` | `arrival`, `departure`, `all` | `arrival` = arrivals only (full width), `departure` = departures only, `all` = both panels (default) |
| `show` | `1`, `all` | `1` = slideshow mode (rotates 4 views every 10s), `all` = normal display (default) |

**Examples:**

```
?airport=JFK&mode=int&type=arrival    # International arrivals at JFK
?airport=DXB&mode=dom                 # Domestic flights at Dubai
?airport=LHR&type=departure           # All departures from Heathrow
?airport=SIN&mode=int&type=all        # All international flights at Singapore
?airport=COK&show=1                   # Slideshow at Cochin: rotates Arr Int → Arr Dom → Dep Int → Dep Dom
?airport=COK&show=1&type=arrival      # Slideshow ignored when type is set (type takes priority)
```

Filters are also available in the Settings panel and persist in the URL when saved.

## API Reference

This project uses the AirLabs Schedules API:

| Endpoint | Description | Free Limit |
|----------|-------------|-----------|
| `GET /api/v9/schedules?dep_iata=XXX` | Departures from airport | 50 results |
| `GET /api/v9/schedules?arr_iata=XXX` | Arrivals at airport | 50 results |

**Authentication:** API key (passed server-side via Cloudflare Worker)

**Free Plan Limits:**
- 1,000 API requests/month
- 250 requests/minute
- 50 results per request

For full API documentation, see: [AirLabs Schedules Docs](https://airlabs.co/docs/schedules)

## Setup & Deployment

### Prerequisites

- A [Cloudflare](https://cloudflare.com/) account (free tier works)
- A [GitHub](https://github.com/) account
- An [AirLabs](https://airlabs.co/) account (free tier available)

### 1. Clone the Repository

```bash
git clone https://github.com/sanjuacodez/flight-data.git
cd flight-data
```

### 2. Get an AirLabs API Key

1. Sign up at [airlabs.co](https://airlabs.co/)
2. Go to your account dashboard
3. Copy your API key

### 3. Create a KV Namespace

1. Go to **Cloudflare Dashboard → Workers & Pages → KV**
2. Click **Create a namespace**
3. Name it `FLIGHT_CACHE`
4. Copy the **Namespace ID**
5. Open `wrangler.jsonc` and replace `YOUR_KV_NAMESPACE_ID_HERE` with the actual ID:

```jsonc
"kv_namespaces": [
  {
    "binding": "FLIGHT_CACHE",
    "id": "paste-your-namespace-id-here"
  }
]
```

### 4. Deploy to Cloudflare Workers

**Option A: Via Cloudflare Dashboard (recommended)**

1. Go to **Cloudflare Dashboard → Workers & Pages → Create**
2. Connect your GitHub repository
3. Set build settings:
   - **Build command:** `npx wrangler deploy`
   - **Build output directory:** `public`
4. After deployment, add secrets and bindings:
   - Go to **Settings → Variables and Secrets**
   - Add `AIRLABS_API_KEY` = your API key
   - Go to **Settings → Bindings** and bind the `FLIGHT_CACHE` KV namespace (if not auto-detected from `wrangler.jsonc`)
5. Redeploy for secrets to take effect

**Option B: Via Wrangler CLI**

```bash
# Install wrangler and login
npx wrangler login

# Set your AirLabs API key
echo "your-api-key" | npx wrangler secret put AIRLABS_API_KEY

# Deploy (KV binding is picked up from wrangler.jsonc)
npx wrangler deploy
```

### 5. Run Locally (for development)

```bash
# Serve the public/ directory with any static server
cd public
python3 -m http.server 8080

# Or use wrangler for full worker support
npx wrangler dev
```

> **Note:** When opening `index.html` directly (`file://` protocol), the airport data loads via `<script src="airports.js">` instead of `fetch()`, so the dropdown will work. However, the AirLabs API proxy requires the Worker — use `wrangler dev` for full functionality.

## Project Structure

```
flight-data/
├── public/
│   ├── index.html          # Main app (HTML + CSS + JS)
│   ├── airports.js          # Airport data as JS (file:// compatible)
│   └── airports.json        # Airport data as JSON (fetch fallback)
├── data/
│   └── build_airports.py    # Script to rebuild airport data from OurAirports
├── worker.js                # Cloudflare Worker (API proxy + KV caching)
├── wrangler.jsonc            # Cloudflare Workers config (KV binding)
└── .gitignore
```

## Rebuilding Airport Data

To refresh the airport database from [OurAirports](https://ourairports.com/data/):

```bash
cd data

# Download latest data
curl -sL -o airports.csv "https://davidmegginson.github.io/ourairports-data/airports.csv"
curl -sL -o countries.csv "https://davidmegginson.github.io/ourairports-data/countries.csv"

# Build airports.json and airports.js
python3 build_airports.py
```

This generates:
- `airports.json` — 235 countries, 4,600+ airports (large and medium airports with ICAO codes)
- `airports.js` — Same data as a JS global variable
- Continent CSVs for reference (africa.csv, asia.csv, etc.)

## KV Caching

The Worker uses **Cloudflare KV** as a lazy cache to minimize AirLabs API calls:

- **Cache key format:** `flights:<IATA>:arrival` / `flights:<IATA>:departure`
- **TTL:** Matches the refresh interval from Settings (passed via `?ttl=` query param)
- **Staleness check:** Each cached entry stores a `fetchedAt` timestamp in metadata. If the age exceeds the TTL, the Worker fetches fresh data
- **Stale fallback:** If AirLabs is unreachable, the Worker returns the last cached response (even if stale)
- **Response headers:** `X-Cache: HIT`, `MISS`, or `STALE` to help debug caching behavior

**Verify caching:** After the first request, check the KV dashboard — you should see keys like `flights:COK:arrival` appear.

## Backup API Key

The Worker supports a fallback AirLabs API key. If the primary key hits its rate limit (HTTP 429, 401, or 403), the Worker automatically retries with the backup key before falling back to stale cache.

**Setup:**

```bash
# Set the backup key as a Cloudflare secret
echo "your-backup-api-key" | npx wrangler secret put AIRLABS_API_KEY_BACKUP
```

For local development, add it to `.dev.vars`:

```
AIRLABS_API_KEY=your-primary-key
AIRLABS_API_KEY_BACKUP=your-backup-key
```

This effectively doubles your monthly API quota (~2,000 calls/month with two free keys). The backup key is optional — if not set, the Worker uses only the primary key.

## Limitations

- **Free plan: 1,000 requests/month** — Each refresh uses 2 API calls (arrivals + departures). Default 2h interval = ~720 calls/month, safe for 24/7.
- **50 results per request on free plan** — Busy airports may have more flights than the limit shows.
- **Schedules up to ~10 hours ahead** — AirLabs returns current and near-future schedules, not full-day flight plans.
- **Small airports may have limited data** — Coverage depends on AirLabs' data sources.

## Configuring for Pro / Paid Plans

The refresh rate is controlled by the `API_PLAN` config block at the top of `public/index.html`:

```javascript
const API_PLAN = {
    refreshInterval: 7200,     // Default refresh in seconds (2 hours)
    timeWindow: 12,            // Show flights within ±N hours of now (0 = all)
};
```

**Recommended values by plan:**

| Plan | Monthly Limit | Refresh Interval | Time Window | Calls/Month (24/7) |
|------|--------------|------------------|-------------|---------------------|
| Free | 1,000 | `7200` (2 hours) | `2` (±2h) | ~720 |
| Basic | 10,000 | `600` (10 minutes) | `4` (±4h) | ~8,640 |
| Pro | 100,000 | `120` (2 minutes) | `6` (±6h) | ~43,200 |

To upgrade: change `API_PLAN` values, and optionally update `AIRLABS_API_KEY` in Cloudflare secrets with your new key.

> **Formula:** `(30 days × 24h × 60min) / (interval_minutes) × 2 = monthly calls`

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **API:** [AirLabs Schedules API](https://airlabs.co/docs/schedules) — real-time flight schedules
- **Hosting:** [Cloudflare Workers](https://workers.cloudflare.com/) (free tier)
- **Airport Data:** [OurAirports](https://ourairports.com/data/) (public domain)

## License

This project is open source. Airport data is from OurAirports (Public Domain).

---

## Author

**Sanjay Shankar**

- Website: [sanjayshankar.me](https://sanjayshankar.me/)
- GitHub: [@sanjuacodez](https://github.com/sanjuacodez)
- Buy Me a Coffee: [buymeacoffee.com/sanjayshankar](https://buymeacoffee.com/sanjayshankar)

If you find this project useful, consider buying me a coffee! ☕
