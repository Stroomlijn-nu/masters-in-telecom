#!/usr/bin/env bash
# Download alle Masters in Telecom site-afbeeldingen naar ./assets/
# Draai dit op je eigen machine (de bestanden staan op regular-wombat.10web.cloud).
# Daarna heb je een complete assets-map die je in GitHub kunt zetten.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p assets
BASE="https://regular-wombat.10web.cloud/wp-content/uploads"

dl () { echo "→ $2"; curl -fSL "$1" -o "assets/$2"; }

# Logo's
dl "$BASE/2026/04/2025-LOGO-DELIVERY-MIT512-marge.png"      "2025-LOGO-DELIVERY-MIT512-marge.png"
dl "$BASE/2026/05/2025-LOGO-DELIVERY-MIT512X128-kopie.png"  "2025-LOGO-DELIVERY-MIT512X128-kopie.png"

# Dienst-afbeeldingen
dl "$BASE/2026/04/Mobiele-scanning-zw-met-filter.png"       "Mobiele-scanning-zw-met-filter.png"
dl "$BASE/2026/05/Mobiele-telefonie.png"                    "Mobiele-telefonie.png"
dl "$BASE/2026/04/VoIP-zw-met-filter.png"                   "VoIP-zw-met-filter.png"
dl "$BASE/2026/04/Glasvezel-zw-met-filter.png"              "Glasvezel-zw-met-filter.png"
dl "$BASE/2026/04/eSIM-zw-met-filter.png"                   "eSIM-zw-met-filter.png"

# Partnerlogo's
dl "$BASE/2026/04/LOGO-KPN-1.png"                           "LOGO-KPN-1.png"
dl "$BASE/2026/04/LOGO-ODIDO-1.png"                         "LOGO-ODIDO-1.png"
dl "$BASE/2026/04/LOGO-VODAFONE-1.png"                      "LOGO-VODAFONE-1.png"

echo "Klaar. De infographic (highspeed-fwa-infographic.png) staat al in ./assets/"
