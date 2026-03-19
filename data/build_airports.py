#!/usr/bin/env python3
"""
Build airports.json from OurAirports CSV data.
Includes all large_airport and medium_airport entries with ICAO codes,
grouped by country name, sorted alphabetically.
Also splits raw data into continent-based CSV files for reference.
"""

import csv
import json
import os
from collections import defaultdict

DATA_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT = os.path.join(DATA_DIR, '..', 'airports.json')

# --- Load countries mapping: iso_country -> country name ---
countries = {}
with open(os.path.join(DATA_DIR, 'countries.csv'), 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        countries[row['code']] = row['name']

# --- Load and filter airports ---
airports_by_country = defaultdict(list)
continent_rows = defaultdict(list)
header = None

with open(os.path.join(DATA_DIR, 'airports.csv'), 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    header = reader.fieldnames
    for row in reader:
        # Only large and medium airports with ICAO codes
        if row['type'] not in ('large_airport', 'medium_airport'):
            continue
        icao = (row.get('icao_code') or '').strip()
        if not icao:
            continue

        iso = row['iso_country']
        country_name = countries.get(iso, iso)
        continent = row.get('continent', 'Unknown')

        # Collect for continent CSVs
        continent_rows[continent].append(row)

        # Build a display name: municipality if available, else airport name (cleaned)
        municipality = (row.get('municipality') or '').strip()
        name = (row.get('name') or '').strip()

        # Clean up name - remove common suffixes for brevity
        display = municipality if municipality else name
        # If municipality is very different from airport name, include both for clarity
        # But for the dropdown, keep it concise
        # For large airports, prefer: "City - Airport Name" style if city != name
        if municipality and municipality.lower() not in name.lower():
            display = f"{municipality} - {name}"
        elif municipality:
            # Municipality is already part of the name, use shorter form
            display = name
        else:
            display = name

        # Remove overly long suffixes
        for suffix in [' International Airport', ' International', ' Airport']:
            if display.endswith(suffix) and len(display) > len(suffix) + 3:
                display = display[:-len(suffix)]

        airports_by_country[country_name].append({
            'icao': icao,
            'name': display,
            'type': row['type']
        })

# --- Write continent CSVs ---
continent_names = {
    'AF': 'africa',
    'AN': 'antarctica',
    'AS': 'asia',
    'EU': 'europe',
    'NA': 'north-america',
    'OC': 'oceania',
    'SA': 'south-america'
}

for code, rows in continent_rows.items():
    fname = continent_names.get(code, code.lower()) + '.csv'
    fpath = os.path.join(DATA_DIR, fname)
    with open(fpath, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=header)
        writer.writeheader()
        writer.writerows(rows)
    print(f"  {fname}: {len(rows)} airports")

# --- Sort airports within each country: large first, then by name ---
for country in airports_by_country:
    airports_by_country[country].sort(
        key=lambda a: (0 if a['type'] == 'large_airport' else 1, a['name'])
    )

# --- Build final JSON (without 'type' field) ---
result = {}
for country in sorted(airports_by_country.keys()):
    result[country] = [
        {'icao': a['icao'], 'name': a['name']}
        for a in airports_by_country[country]
    ]

with open(OUTPUT, 'w', encoding='utf-8') as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

# Also generate airports.js for file:// protocol compatibility
OUTPUT_JS = os.path.join(DATA_DIR, '..', 'airports.js')
with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
    f.write('const AIRPORT_DATA = ')
    json.dump(result, f, indent=2, ensure_ascii=False)
    f.write(';\n')

# --- Stats ---
total_countries = len(result)
total_airports = sum(len(v) for v in result.values())
print(f"\nGenerated airports.json:")
print(f"  Countries: {total_countries}")
print(f"  Total airports: {total_airports}")

# Show countries with most airports
top = sorted(result.items(), key=lambda x: -len(x[1]))[:15]
print(f"\nTop 15 countries by airport count:")
for c, a in top:
    print(f"  {c}: {len(a)}")

# Show countries with fewest
bottom = sorted(result.items(), key=lambda x: len(x[1]))[:10]
print(f"\nBottom 10 countries by airport count:")
for c, a in bottom:
    print(f"  {c}: {len(a)}")
