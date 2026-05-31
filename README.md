# Masters in Telecom — assets

Map met alle afbeeldingen voor de Masters in Telecom-site, klaar om in GitHub te zetten.

## Inhoud

- `assets/highspeed-fwa-infographic.png` — de Outdoor data / Highspeed FWA infographic (zit er al in).
- `download-images.sh` — haalt de overige site-afbeeldingen (logo's, dienstbeelden, partnerlogo's) op van 10web.
- `image-manifest.txt` — overzicht van bestandsnaam naar huidige live URL.

## Stap 1 — map compleet maken

Draai op je eigen machine:

    ./download-images.sh

Alle afbeeldingen staan daarna in `assets/`, met dezelfde bestandsnamen als de site nu gebruikt.

## Stap 2 — naar GitHub

Zet de `assets/`-map in de repo van de site. De Outdoor data-pagina verwijst al naar:

    assets/highspeed-fwa-infographic.png

Zodra de map op GitHub staat (en de pagina daarvandaan wordt geserveerd), is de infographic zichtbaar.

## De infographic nu al live op app.stroomlijn

De pagina staat nu nog op app.stroomlijn.nu. Daar werkt een relatief pad nog niet.
Twee opties om de infographic daar meteen te tonen:

1. Upload `highspeed-fwa-infographic.png` naar de 10web mediabibliotheek (waar de andere
   beelden ook staan) en stuur Tjimka de URL. Dan wordt die ene regel in de pagina vervangen.
2. Of wacht tot de site op GitHub staat, dan pakt het relatieve pad het vanzelf op.

De pagina is zo gebouwd dat er nooit een kapot-beeld-icoon verschijnt: staat het bestand er
nog niet, dan wordt het infographic-blok netjes verborgen.

## Migratie van alle pagina's naar assets/ (optioneel, later)

Wil je de hele site los van 10web maken? Vervang in elke pagina dit:

    https://regular-wombat.10web.cloud/wp-content/uploads/2026/04/
    https://regular-wombat.10web.cloud/wp-content/uploads/2026/05/

door:

    assets/

De bestandsnamen in deze map zijn precies gelijk aan de namen op 10web, dus daarna kloppen
alle verwijzingen.
