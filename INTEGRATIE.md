# Blog-subpagina Masters in Telecom, integratie

Alles volgt de bestaande conventies uit `MicroDramaShowcase.tsx`: `<a href>`-navigatie,
`useRevealOnScroll`, brandkleuren via Tailwind-tokens (`bg-primary`, `text-secondary`),
`@/`-alias. Geen nieuwe dependencies.

## Bestanden en waar ze heen gaan

```
src/data/blogPosts.ts                      // alle postdata in één bron
src/components/blog/BlogImage.tsx           // afbeelding met gradient-fallback
src/components/blog/BlogPostLayout.tsx      // uniforme detail-layout
src/pages/Blog.tsx                          // overzichtspagina (/blog)
src/pages/blog/SamsungKnox.tsx              // detailpagina
src/pages/blog/GeenGlasvezel.tsx            // detailpagina
src/pages/blog/GalaxyTabA11.tsx             // detailpagina
src/pages/blog/NewlandScanners.tsx          // detailpagina
public/assets/...                           // afbeeldingen (zie hieronder)
```

## 1. Routes registreren

In de huidige opzet is elke post een eigen paginabestand. Voeg deze routes toe
(react-router-voorbeeld):

```tsx
import Blog from "@/pages/Blog";
import SamsungKnox from "@/pages/blog/SamsungKnox";
import GeenGlasvezel from "@/pages/blog/GeenGlasvezel";
import GalaxyTabA11 from "@/pages/blog/GalaxyTabA11";
import NewlandScanners from "@/pages/blog/NewlandScanners";

<Route path="/blog" element={<Blog />} />
<Route path="/blog/samsung-knox-wat-het-is-en-waarom-het-voor-jou-telt" element={<SamsungKnox />} />
<Route path="/blog/wat-doe-je-als-er-geen-glasvezel-beschikbaar-is" element={<GeenGlasvezel />} />
<Route path="/blog/samsung-galaxy-tab-a11-plus-ook-voor-accessoires-bij-masters-in-telecom" element={<GalaxyTabA11 />} />
<Route path="/blog/mobiele-computers-en-scanners-van-newland" element={<NewlandScanners />} />
```

Gebruik je liever één dynamische route (`/blog/:slug`)? Laat het weten, dan lever ik
in plaats van vier wrappers één `BlogPost.tsx` die de slug uit de URL leest. Dat is
minder onderhoud, maar het hangt af van je router-setup.

## 2. Menu-link toevoegen

Voeg "Blog" toe aan je hoofdnavigatie (en eventueel footer). Plain anchor:

```tsx
<a href="/blog">Blog</a>
```

Of, als je nav-items uit een array opbouwt:

```tsx
{ label: "Blog", href: "/blog" }
```

Ik weet niet zeker in welk bestand je navigatie staat (vermoedelijk de `MenuProvider`
of een `Navbar`/`Header`-component). Geef me dat bestand, dan zet ik de link op de
juiste plek met de juiste actieve-staat.

## 3. Afbeeldingen

Zet de bestanden in `public/assets/`. Met deze exacte namen werken de links direct:

- `samsung-knox-schild.png`  (jouw bestand "Samsung-Knox-schild")
- `samsung-galaxy.png`       (jouw bestand "Samsung Galaxy")
- `mt93-newland-masters-of-telecom.png` (jouw bestand "MT93-Newland-Masters-of_Telecom")
- `fwa-outdoor-data.png`     (NOG NIET aangeleverd, zie hieronder)

Heeft een bestand een andere naam of extensie? Pas dan het `image`-pad in
`src/data/blogPosts.ts` aan. Ontbreekt een afbeelding, dan valt de plek netjes terug
op de paars-naar-roze huisstijlgradient, zonder kapotte placeholder.

Let op: ik gebruik root-absolute paden (`/assets/...`), niet relatieve (`assets/...`).
Bij een multi-page React-app breekt een relatief pad op `/blog/...`. Voor Vite horen
deze bestanden in `public/assets/`. Dit wijkt bewust af van de losse Outdoor Data-pagina.

## 4. SEO-redirects

De slugs zijn gelijkgehouden aan de bestaande WordPress-URL's, zodat redirects
één-op-één kunnen. Stem dit af met Hexapo bij livegang:

- `/samsung-knox-wat-het-is-en-waarom-het-voor-jou-telt/` -> `/blog/samsung-knox-...`
- `/wat-doe-je-als-er-geen-glasvezel-beschikbaar-is/` -> `/blog/wat-doe-je-als-er-geen-glasvezel-beschikbaar-is`
- `/samsung-galaxy-tab-a11-plus-.../` -> `/blog/samsung-galaxy-tab-a11-plus-...`

## 5. GitHub

Ik kan niet rechtstreeks naar je repo pushen, daar heb ik geen toegang of credentials
voor. Twee werkbare routes:

A. Via de 10web-editor: rechtsklik op de map -> "New file" per bestand (nooit plakken
   in een bestaand bestand, dat geeft buildfouten zoals eerder). Plak per bestand de
   inhoud.

B. Via git lokaal:
   ```
   # vanuit de root van je project, met deze bestanden erin gekopieerd
   git checkout -b feature/blog
   git add src/data/blogPosts.ts src/components/blog src/pages/Blog.tsx src/pages/blog public/assets
   git commit -m "Blog: overzicht + vier uniforme detailpagina's"
   git push origin feature/blog
   ```
   Daarna een pull request openen.

## Tekstcorrecties die ik heb doorgevoerd

- "Ontdek" (verboden woord) weg uit de sectiekop en de Newland-titel.
- "van onze experts uit de sector" weg: Dennis is een eenmanszaak, geen "experts".
- Hero-subkop herschreven van abstract ("volgende-generatie digitale ecosystemen voor
  een verbonden wereld") naar concreet.
- Emoji en uitroeptekens uit de Newland-tekst gehaald, "krachtig/robuust" vervangen.
- "van ... tot ..." en "niet alleen ..., maar ook ..."-constructies herschreven.
- Dubbele punten in lopende tekst zoveel mogelijk vermeden.

## Twee beslissingen die ik voor je heb gemaakt (wijzig gerust)

- Galaxy Tab-post staat onder categorie "Mobiele abonnementen" (jouw vaste set),
  niet "Mobiele telefonie" uit de oude tekst.
- Categorie staat als label, niet als link. Categorie-archiefpagina's bestaan nog
  niet, dus zo voorkom ik kapotte koppelingen.
