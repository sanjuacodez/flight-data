# ✈️ Flight Data — Airport Flight Board

A real-time airport flight information display built for TV screens and monitors. Shows arrivals and departures in a split-board layout, pulling live data from the [AirLabs](https://airlabs.co/) API.

**Live Demo:** [flight-data.shankarsanjay0.workers.dev](https://flight-data.shankarsanjay0.workers.dev/)

![Flight Board Preview](https://img.shields.io/badge/status-live-brightgreen) ![AirLabs API](https://img.shields.io/badge/data-AirLabs-blue) ![Cloudflare Workers](https://img.shields.io/badge/hosted-Cloudflare%20Workers-orange)

---

## Features

- **Live Flight Data** — Real-time arrivals and departures with status (scheduled, active, landed, cancelled)
- **Split-Board Layout** — Arrivals on the left, departures on the right, just like a real airport display
- **TV/Kiosk Mode** — Full-screen, auto-scrolling display designed for wall-mounted monitors
- **235 Countries, 4,600+ Airports** — Comprehensive airport database sourced from [OurAirports](https://ourairports.com/data/)
- **Auto-Scroll** — Long flight lists scroll automatically with configurable speed
- **Configurable Settings** — Country/airport picker, 12/24h format, refresh interval, scroll speed
- **Server-Side API Proxy** — Cloudflare Worker proxies AirLabs API calls (API key stays server-side)
- **No Framework** — Pure HTML, CSS, and JavaScript — lightweight and fast

## How It Works

1. The app queries the [AirLabs Schedules API](https://airlabs.co/docs/schedules) for arrivals and departures at the selected airport
2. API requests go through a Cloudflare Worker proxy (`worker.js`) which adds the API key server-side, avoiding CORS issues and keeping the key secret
3. Flight data is displayed in a TV-optimized split-board layout with auto-scrolling
4. Schedules cover up to ~10 hours ahead with real-time status updates

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

### 3. Deploy to Cloudflare Workers

**Option A: Via Cloudflare Dashboard (recommended)**

1. Go to **Cloudflare Dashboard → Workers & Pages → Create**
2. Connect your GitHub repository
3. Set build settings:
   - **Build command:** `npx wrangler deploy`
   - **Build output directory:** `public`
4. After deployment, add secrets:
   - Go to **Settings → Variables and Secrets**
   - Add `AIRLABS_API_KEY` = your API key
5. Redeploy for secrets to take effect

**Option B: Via Wrangler CLI**

```bash
# Install wrangler and login
npx wrangler login

# Set your AirLabs API key
echo "your-api-key" | npx wrangler secret put AIRLABS_API_KEY

# Deploy
npx wrangler deploy
```

### 4. Run Locally (for development)

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
├── worker.js                # Cloudflare Worker (API proxy for AirLabs)
├── wrangler.jsonc            # Cloudflare Workers configuration
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

## Limitations

- **Free plan: 1,000 requests/month** — Each refresh uses 2 API calls (arrivals + departures). At 5-minute intervals, that's ~576 calls/day, so budget accordingly.
- **50 results per request on free plan** — Busy airports may have more flights than the limit shows.
- **Schedules up to ~10 hours ahead** — AirLabs returns current and near-future schedules, not full-day flight plans.
- **Small airports may have limited data** — Coverage depends on AirLabs' data sources.

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
