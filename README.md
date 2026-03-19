# ✈️ Flight Data — Airport Flight Board

A real-time airport flight information display built for TV screens and monitors. Shows arrivals and departures in a split-board layout, pulling data from the [OpenSky Network](https://opensky-network.org/) API.

**Live Demo:** [flight-data.shankarsanjay0.workers.dev](https://flight-data.shankarsanjay0.workers.dev/)

![Flight Board Preview](https://img.shields.io/badge/status-live-brightgreen) ![OpenSky API](https://img.shields.io/badge/data-OpenSky%20Network-blue) ![Cloudflare Workers](https://img.shields.io/badge/hosted-Cloudflare%20Workers-orange)

---

## Features

- **Split-Board Layout** — Arrivals on the left, departures on the right, just like a real airport display
- **TV/Kiosk Mode** — Full-screen, auto-scrolling display designed for wall-mounted monitors
- **235 Countries, 4,600+ Airports** — Comprehensive airport database sourced from [OurAirports](https://ourairports.com/data/)
- **Auto-Scroll** — Long flight lists scroll automatically with configurable speed
- **Configurable Settings** — Country/airport picker, time span, 12/24h format, refresh interval, scroll speed
- **Server-Side API Proxy** — Cloudflare Worker proxies OpenSky API calls with OAuth2 authentication
- **No Framework** — Pure HTML, CSS, and JavaScript — lightweight and fast

## How It Works

1. The app queries the [OpenSky Network REST API](https://openskynetwork.github.io/opensky-api/rest.html) for arrivals and departures at the selected airport
2. API requests go through a Cloudflare Worker proxy (`worker.js`) which handles OAuth2 authentication and avoids CORS issues
3. Flight data is displayed in a TV-optimized split-board layout with auto-scrolling

### Important: Data Delay

The OpenSky arrivals/departures endpoints (`/flights/arrival` and `/flights/departure`) are **batch-processed nightly**. This means:

- **Only flights from the previous day or earlier are available**
- The app queries **yesterday's data** centered around the same time of day
- This is an OpenSky API limitation, not a bug — [see their docs](https://openskynetwork.github.io/opensky-api/rest.html#arrivals-by-airport)
- For truly real-time tracking, OpenSky's `/states/all` endpoint provides live state vectors, but in a different format

## API Reference

This project uses the following OpenSky Network endpoints:

| Endpoint | Description | Max Interval |
|----------|-------------|-------------|
| `GET /flights/arrival` | Flights arriving at an airport | 2 days |
| `GET /flights/departure` | Flights departing from an airport | 2 days |

**Authentication:** OAuth2 client credentials flow (Basic auth was deprecated on March 18, 2026)

**Rate Limits:**
- Anonymous: 400 API credits/day
- Authenticated: 4,000 API credits/day
- Active contributors: 8,000 API credits/day

For full API documentation, see: [OpenSky REST API Docs](https://openskynetwork.github.io/opensky-api/rest.html)

## Setup & Deployment

### Prerequisites

- A [Cloudflare](https://cloudflare.com/) account (free tier works)
- A [GitHub](https://github.com/) account
- An [OpenSky Network](https://opensky-network.org/) account (free, for API authentication)

### 1. Clone the Repository

```bash
git clone https://github.com/sanjuacodez/flight-data.git
cd flight-data
```

### 2. Create OpenSky API Credentials

1. Log in at [opensky-network.org](https://opensky-network.org/)
2. Go to **My OpenSky → Account**
3. Create a new API client
4. Note down your `client_id` and `client_secret`

### 3. Deploy to Cloudflare Workers

**Option A: Via Cloudflare Dashboard (recommended)**

1. Go to **Cloudflare Dashboard → Workers & Pages → Create**
2. Connect your GitHub repository
3. Set build settings:
   - **Build command:** `npx wrangler deploy`
   - **Build output directory:** `public`
4. After deployment, add secrets:
   - Go to **Settings → Variables and Secrets**
   - Add `OPENSKY_CLIENT_ID` = your client ID
   - Add `OPENSKY_CLIENT_SECRET` = your client secret
5. Redeploy for secrets to take effect

**Option B: Via Wrangler CLI**

```bash
# Install wrangler and login
npx wrangler login

# Set your OpenSky API secrets
echo "your-client-id" | npx wrangler secret put OPENSKY_CLIENT_ID
echo "your-client-secret" | npx wrangler secret put OPENSKY_CLIENT_SECRET

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

> **Note:** When opening `index.html` directly (`file://` protocol), the airport data loads via `<script src="airports.js">` instead of `fetch()`, so the dropdown will work. However, the OpenSky API proxy requires the Worker — use `wrangler dev` for full functionality.

## Project Structure

```
flight-data/
├── public/
│   ├── index.html          # Main app (HTML + CSS + JS)
│   ├── airports.js          # Airport data as JS (file:// compatible)
│   └── airports.json        # Airport data as JSON (fetch fallback)
├── data/
│   └── build_airports.py    # Script to rebuild airport data from OurAirports
├── worker.js                # Cloudflare Worker (API proxy + OAuth2)
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

- **Data is from yesterday** — OpenSky batch-processes arrival/departure data nightly. Only flights from the previous day or earlier are available via these endpoints.
- **Rate limited** — Free OpenSky accounts get 4,000 API credits/day. The app uses 2 credits per refresh (1 for arrivals, 1 for departures).
- **Small airports may have no data** — OpenSky's coverage depends on ADS-B receiver density. Remote airports may show fewer flights.
- **No future flights** — Unlike commercial flight trackers (FlightAware, Flightradar24), OpenSky only provides historical/observed data, not scheduled flights.
- **Airline names are approximate** — Airline identification is based on ICAO callsign prefixes (first 3 characters), which may not always match.

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **API:** [OpenSky Network REST API](https://openskynetwork.github.io/opensky-api/rest.html) with OAuth2
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
