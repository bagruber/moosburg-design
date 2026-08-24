# Moosburg Design

Die Farb- und Schrift-Tokens der Moosburg-Projekte, an einem Ort. Bis August
2026 lag der Kanon in `moosburg/src/index.css`, und die anderen Repos trugen
von Hand gepflegte Kopien, die auseinanderliefen. Seitdem gilt: **Wer am
Design etwas ändert, ändert es hier.** Die Projekte konsumieren diese Datei,
sie definieren keine eigenen Grundwerte mehr.

Ansicht der Tokens und Regeln:
[bagruber.github.io/moosburg-design](https://bagruber.github.io/moosburg-design/)

## Dateien

| Datei | Rolle |
|---|---|
| `css/theme.css` | Die Quelle. Tailwind-v4-`@theme` mit allen Tokens. |
| `css/tokens.css` | Generiert daraus, flaches `:root`. Für Projekte ohne Build-Step. Nicht von Hand ändern. |
| `scripts/tokens.mjs` | Erzeugt `tokens.css` neu (`npm run tokens`). |
| `scripts/kontrast.mjs` | Prüft die freigegebenen Farbpaare gegen WCAG 2.1 AA (`npm run kontrast`). |
| `index.html` | Der Showcase auf GitHub Pages, liest `css/tokens.css` direkt. |

Nach jeder Änderung an `theme.css` gehören beide Skripte ausgeführt und die
generierte `tokens.css` mit committet.

## Konsumieren

**Projekte mit Vite und Tailwind v4** nehmen das Repo als Dependency und
importieren das Theme vor den eigenen Regeln:

```jsonc
// package.json
"dependencies": { "moosburg-design": "github:bagruber/moosburg-design" }
```

```css
/* src/index.css */
@import "tailwindcss";
@import "moosburg-design/css/theme.css";

/* Abweichungen danach, je mit Grund im Kommentar: */
@theme {
  --text-display-1: 3rem; /* kompakterer Kopf, Datenseiten */
}
```

**Projekte ohne Build-Step** legen eine Kopie von `css/tokens.css` bei sich
ab. Die Kopie behält ihren Generiert-Kopf und wird nur durch eine neue Kopie
ersetzt, nie editiert.

## Wer nutzt was

| Repo | Bezug | Umfang |
|---|---|---|
| `moosburg` | npm-Dependency | volles Theme, dazu eigenes `@font-face` für Madelon Script |
| `datahub` | npm-Dependency | Theme, eigene Daten-Palette und kompaktere Display-Größen als dokumentierte Abweichung |
| `haushaltvis` | npm-Dependency | Theme, eigene Diagramm-Farben |
| `baumkarte` | npm-Dependency | Theme, eigene Karten- und Rampen-Tokens |
| `moosburghistorisch` | npm-Dependency | Theme |
| `moosburg-eu` | Kopie von `tokens.css` | Portalseite, ohne Build-Step |
| `council` | geplant: Kopie von `tokens.css` | Werkzeug-Profil, Umstellung mit der anstehenden Modularisierung |
| `council-voting-tool` | bewusst nicht angeschlossen | mandantenfähig, jeder Rat bringt eigene Farben mit; der Moosburg-Mandant nutzt die council-Werkzeug-Palette |

Nicht angeschlossen sind `hexagonalmap` (bewusst neutral, für Dritte) und
`elections` (abstrakter Kern; nur die künftige Moosburg-Ausspielung auf
moosburg.eu wird dieses Theme tragen).

## Zwei Anwendungsprofile

Der Kanon ist verbindlich, aber nicht überall gleich streng. Es gibt zwei
Profile, und jedes Projekt weiß, zu welchem es gehört:

**Auftritt** (Portal, Stadt-Prototyp, Data Hub, Karten): das volle Programm.
Playfair-Versalien für Display, Kicker in Gold, Rainbow-Stripe als Signatur,
Script-Akzent sparsam.

**Werkzeug** (council, Sitzungstool): hohe Informationsdichte schlägt
Markenauftritt. Einfachere Schriftgrade, dichtere Abstände und abweichende
Bedienelemente sind erlaubt, wo Lesbarkeit oder Bedienbarkeit sonst leiden.
Die Farben kommen trotzdem von hier: ein Werkzeug darf schlichter aussehen,
aber nicht fremd.

## Regeln

**Rainbow-Stripe.** Neun feste Segmente in der Reihenfolge rb-1 bis rb-9,
4 px hoch, nie als Verlauf, nie in anderer Reihenfolge.

**Kein einseitiger Kantenakzent.** Ein dekorativer Farbbalken entlang einer
Kante einer Karte oder Box ist in allen Projekten unerwünscht. Das Muster ist
die Standardausgabe gängiger Vorlagen und liest sich sofort als generiert.
Stattdessen typografisch unterscheiden (Kicker, Schriftschnitt, Rangfolge)
oder über die ganze Fläche, etwa einen eigenen Grundton samt Rahmen. Keine
Verstöße sind: der Aktiv-Unterstrich eines Tabs (Zustand), eine
Zeitstrahl-Schiene (Struktur), der Zitat-Einzug mit neutraler Haarlinie
(Typografie).

**Kontrast.** WCAG 2.1 AA ist Minimum; `npm run kontrast` prüft die
freigegebenen Paare. Zwei Entscheidungen aus dem August 2026, die frühere
Werte ersetzen:

- `ink-muted` ist jetzt `#6f6b63` statt `#888888`. Der alte Wert erreichte
  auf Creme nur rund 3,3:1; haushaltvis und baumkarte hatten ihn deshalb
  bereits lokal abgedunkelt, der dunklere Ton ist seitdem der Kanon.
- Goldener Text auf Creme nimmt `gold-700` (6,2:1). `gold-600` schafft nur
  3,8:1 und ist damit großer Schrift und Grafik vorbehalten; `gold-500` ist
  als Textfarbe nirgends freigegeben und mit weißer Schrift (2,8:1) auch
  als Badge-Grund nicht.

**Schriften.** Playfair Display und Inter kommen in den Vite-Projekten als
`@fontsource`-Pakete, in Projekten ohne Build als lokal gehostete
woff2-Subsets (Vorlage: `moosburg-eu/public/assets/fonts/`). Madelon Script
liegt nur im Repo `moosburg` und bleibt dort; andere Projekte setzen den
Script-Akzent nicht ein.

## Verantwortung

Teil der Moosburg-Projekte von Benedict Gruber, siehe
`moosburg-eu/BRIEFING.md` für den übergreifenden Kontext. Lizenz: MIT.
