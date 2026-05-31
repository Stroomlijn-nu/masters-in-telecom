// Centrale bron voor alle blogposts.
// Overzichtspagina én detailpagina's lezen hieruit, zodat elk bericht
// gegarandeerd hetzelfde format heeft (uniforme blogstructuur).

export type BodyBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  date: string; // weergave, NL
  isoDate: string; // voor sortering en <time>
  readingTime: string;
  excerpt: string;
  image: string; // root-absoluut pad, bestand in /public/assets
  imageAlt: string;
  intro: string; // eerste, grotere alinea
  body: BodyBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "samsung-knox-wat-het-is-en-waarom-het-voor-jou-telt",
    category: "Mobiele beveiliging",
    categorySlug: "mobiele-beveiliging",
    title: "Samsung Knox: wat het is en waarom het voor jou telt",
    date: "30 april 2026",
    isoDate: "2026-04-30",
    readingTime: "5 min leestijd",
    excerpt:
      "Mobiele toestellen staan steeds vaker in het hart van de bedrijfsvoering. Dan wil je weten dat ze goed beveiligd zijn. Samsung Knox regelt dat, van binnenuit.",
    image: "/assets/samsung-knox-schild.png",
    imageAlt: "Samsung Knox beveiligingsschild",
    intro:
      "Mobiele toestellen staan steeds vaker in het hart van de bedrijfsvoering. Dan wil je weten dat ze goed beveiligd zijn. Samsung Knox regelt dat, van binnenuit.",
    body: [
      {
        type: "p",
        text: "Veel bedrijven werken tegenwoordig volledig mobiel. Medewerkers hebben een smartphone of tablet in de hand, klantgegevens staan in apps, en communicatie loopt via mobiele netwerken. Dat is efficiënt. Maar het vraagt ook om goede beveiliging.",
      },
      {
        type: "p",
        text: "Samsung speelt daar al jaren op in met Knox. Dat is een beveiligings- en beheerplatform dat standaard is ingebouwd in Samsung-toestellen. Niet als losse app, maar als onderdeel van de hardware zelf.",
      },
      { type: "h", text: "Wat doet Knox precies?" },
      { type: "p", text: "Knox werkt op twee niveaus." },
      {
        type: "p",
        text: "Op hardwareniveau is er een beveiligde chip die controleert of het besturingssysteem van het toestel niet is aangepast of gecompromitteerd. Dit heet de Knox Vault. Zodra iemand probeert het systeem te omzeilen, registreert het toestel dat direct. Je ziet dat terug in de beheerconsole.",
      },
      {
        type: "p",
        text: "Op softwareniveau biedt Knox een reeks beheertools waarmee je als organisatie toestellen op afstand kunt instellen, vergrendelen of wissen. Je bepaalt welke apps beschikbaar zijn, welke netwerken worden gebruikt en welke gegevens medewerkers kunnen inzien.",
      },
      { type: "h", text: "Het verschil met standaard Android" },
      {
        type: "p",
        text: "Android Enterprise van Google biedt al een basis voor zakelijk beheer. Knox gaat een stap verder. Waar Android Enterprise werkt op softwareniveau, verankert Knox de beveiliging ook in de hardware van het toestel. Dat maakt het lastiger te omzeilen.",
      },
      {
        type: "p",
        text: "Bovendien biedt Knox functies die zijn ontwikkeld voor organisaties die hoge eisen stellen aan gegevensbescherming, zoals de gezondheidszorg, de logistiek en de financiële sector.",
      },
      { type: "h", text: "Wat levert het op in de praktijk?" },
      {
        type: "ul",
        items: [
          "Toestellen zijn op afstand te beheren, ook als ze verloren gaan of worden gestolen.",
          "Zakelijke en privégegevens blijven gescheiden, ook op een persoonlijk toestel van een medewerker.",
          "Configuraties worden centraal uitgerold. Geen handmatig instellen per toestel.",
          "Je ziet in één overzicht welke toestellen actief zijn en of er iets afwijkt.",
        ],
      },
      { type: "h", text: "Voor wie is dit relevant?" },
      {
        type: "p",
        text: "Voor elke organisatie die medewerkers uitrust met Samsung-toestellen en wil dat die toestellen veilig en beheersbaar zijn. Dat geldt voor vijf toestellen net zo goed als voor vijfhonderd.",
      },
      {
        type: "p",
        text: "Wil je weten of Knox past bij jouw situatie? Neem contact op, dan kijken we samen wat er nodig is.",
      },
    ],
  },
  {
    slug: "wat-doe-je-als-er-geen-glasvezel-beschikbaar-is",
    category: "Glasvezel en internet",
    categorySlug: "glasvezel-en-internet",
    title: "Wat doe je als er geen glasvezel beschikbaar is?",
    date: "26 februari 2026",
    isoDate: "2026-02-26",
    readingTime: "5 min leestijd",
    excerpt:
      "Je hebt net een nieuw bedrijfspand betrokken. Alles staat klaar. Alleen: er ligt geen glasvezelkabel. Die situatie zien we vaker dan je denkt.",
    image: "/assets/fwa-outdoor-data.png",
    imageAlt: "Buitenantenne en dual-sim router voor 5G Fixed Wireless Access",
    intro:
      "Je hebt net een nieuw bedrijfspand betrokken. Alles staat klaar. Alleen: er ligt geen glasvezelkabel.",
    body: [
      {
        type: "p",
        text: "Dat is een situatie die we vaker zien dan je zou denken. Zeker op nieuwbouwlocaties of bedrijventerreinen waar de infrastructuur nog niet op orde is. De vraag is dan niet of er een oplossing is, maar welke oplossing past.",
      },
      {
        type: "p",
        text: "In dit geval kozen we voor een combinatie die goed werkt in gebieden zonder vaste verbinding. We plaatsten een router met twee simkaarten, aangevuld met een buitenantenne op het dak. De antenne staat op een tegelvoet, zodat hij stabiel staat zonder dat er geboord hoeft te worden in het dakoppervlak.",
      },
      {
        type: "p",
        text: "Het resultaat is een betrouwbare 5G-verbinding, klaar voor gebruik vanaf dag één.",
      },
      {
        type: "p",
        text: "Dit is geen noodoplossing. Het is een bewuste keuze voor bedrijven die niet kunnen of willen wachten op glasvezeluitrol. Met de juiste apparatuur en plaatsing geeft 5G voldoende bandbreedte voor de meeste zakelijke toepassingen, zoals bellen, mailen, videovergaderen en cloudopslag.",
      },
      {
        type: "p",
        text: "Heb je een nieuw pand en weet je nog niet wat de mogelijkheden zijn voor verbinding? Neem contact op, we kijken graag mee.",
      },
    ],
  },
  {
    slug: "samsung-galaxy-tab-a11-plus-ook-voor-accessoires-bij-masters-in-telecom",
    category: "Mobiele abonnementen",
    categorySlug: "mobiele-abonnementen",
    title:
      "Samsung Galaxy Tab A11 Plus: ook voor accessoires bij Masters in Telecom",
    date: "18 februari 2026",
    isoDate: "2026-02-18",
    readingTime: "5 min leestijd",
    excerpt:
      "Een nieuwe tablet kopen is één ding. Zorgen dat je hem goed kunt gebruiken voor je werk is een tweede.",
    image: "/assets/samsung-galaxy.png",
    imageAlt: "Samsung Galaxy Tab A11 Plus tablet",
    intro:
      "Een nieuwe tablet kopen is één ding. Zorgen dat je hem goed kunt gebruiken voor je werk is een tweede.",
    body: [
      {
        type: "p",
        text: "De Samsung Galaxy Tab A11 Plus is een veelzijdige tablet voor zakelijk gebruik. Geschikt voor videovergaderen, documenten verwerken en altijd bereikbaar blijven. Maar een tablet werkt pas echt goed met de juiste accessoires erbij.",
      },
      {
        type: "p",
        text: "Bij Masters in Telecom ben je daarvoor op het juiste adres. Of je nu een beschermhoes zoekt, een toetsenbord, een oplader of iets anders, we kijken mee naar wat bij jouw situatie past.",
      },
      {
        type: "p",
        text: "En dat geldt niet alleen voor de Tab A11 Plus. Voor elk tablet- of mobiel toestel kun je bij ons terecht, ongeacht het merk of model.",
      },
      {
        type: "p",
        text: "Heb je ook behoefte aan een zakelijk mobiel abonnement? Masters in Telecom sluit dat rechtstreeks voor je af. Per maand opzegbaar, met ruime keuze uit databundels. Geen gedoe, geen lange contracten.",
      },
      {
        type: "p",
        text: "Vraag naar de mogelijkheden via onze website of bel ons direct.",
      },
    ],
  },
  {
    slug: "mobiele-computers-en-scanners-van-newland",
    category: "Mobiele scanning",
    categorySlug: "mobiele-scanning",
    title: "Mobiele computers en scanners van Newland",
    date: "4 november 2025",
    isoDate: "2025-11-04",
    readingTime: "2 min leestijd",
    excerpt:
      "In de logistiek, retail, zorg en industrie draait veel om snel en foutloos scannen. Mobiele computers en handscanners zijn daar niet meer weg te denken.",
    image: "/assets/mt93-newland-masters-of-telecom.png",
    imageAlt: "Newland mobiele computer en handscanner",
    intro:
      "In de logistiek, retail, zorg en industrie draait veel om snel en foutloos scannen. Mobiele computers en handscanners zijn daar niet meer weg te denken.",
    body: [
      {
        type: "p",
        text: "Bij Masters in Telecom vind je naast mobiele abonnementen en toestellen ook mobiele scanners en touchscreenoplossingen van Newland.",
      },
      { type: "h", text: "Waarom Newland?" },
      {
        type: "p",
        text: "Newland staat wereldwijd bekend om zijn scanoplossingen. De focus ligt op kwaliteit, snelheid en betrouwbaarheid, zodat processen eenvoudiger en sneller verlopen.",
      },
      {
        type: "p",
        text: "Onze selectie omvat onder andere:",
      },
      {
        type: "ul",
        items: [
          "Mobiele computers en handscanners, geschikt voor magazijnen, retail en buitendienst.",
          "Touchscreenbeeldschermen voor snelle bediening in elke werkomgeving.",
          "Handscanners om de pols, ergonomisch en praktisch als je je handen vrij wilt houden.",
        ],
      },
      {
        type: "p",
        text: "Alle apparaten zijn voorzien van professionele beveiligingssoftware, zodat je bedrijfsdata beschermd blijft.",
      },
      { type: "h", text: "De voordelen op een rij" },
      {
        type: "ul",
        items: [
          "Snellere verwerking van bestellingen en voorraadbeheer.",
          "Veilig en versleuteld dataverkeer dankzij ingebouwde beveiliging.",
          "Hogere efficiëntie voor medewerkers, op locatie en in het magazijn.",
          "Lange batterijduur en een stevig ontwerp voor intensief gebruik.",
        ],
      },
      {
        type: "p",
        text: "Of je nu barcodes, QR-codes of RFID-tags wilt scannen, met Newland heb je een betrouwbare oplossing.",
      },
      { type: "h", text: "Van hardware tot beveiliging" },
      {
        type: "p",
        text: "We leveren de hardware en regelen daarnaast de implementatie van de beveiligingssoftware, advies over de juiste toestellen voor jouw bedrijfsproces en ondersteuning bij de integratie met je bestaande systemen.",
      },
      {
        type: "p",
        text: "Wil je weten hoe de scanners van Newland jouw organisatie sneller laten werken? Neem contact op voor een vrijblijvend adviesgesprek.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Nieuwste eerst.
export const sortedPosts = [...blogPosts].sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate),
);
