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
| `moosburg-historisch` | npm-Dependency | Theme |
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
Große Serifen-Titel, Rainbow-Stripe als Signatur, Script-Akzent sparsam,
Farbflächen nach Gegenstand. Versalien sind seit dem 14.09.2026 nicht mehr
Teil davon; Kicker über der Überschrift nur, wo sie etwas anderes sagen als
die Überschrift.

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

**Schriften.** Seit dem 26.09.2026 Source Serif 4 für Display und Atkinson
Hyperlegible Next für alles andere, beide OFL. In den Vite-Projekten als
`@fontsource-variable`-Pakete, Version über `hausbasis/baseline.json`:

```
@import "@fontsource-variable/source-serif-4/opsz.css";
@import "@fontsource-variable/atkinson-hyperlegible-next";
```

Der `opsz`-Import ist Absicht: Source Serif 4 bringt optische Größen 8 bis 60,
und nur damit holen sich die Titelgrade die richtige Zeichnung. In Projekten
ohne Build als lokal gehostete woff2-Subsets (Vorlage:
`moosburg-eu/public/assets/fonts/`). Playfair Display und Inter sind aus dem
Kanon heraus — Inter war als austauschbare Standardschrift aufgefallen,
Atkinson ist auf Lesbarkeit hin entworfen. Madelon Script liegt nur im Repo
`moosburg` und bleibt dort; andere Projekte setzen den Script-Akzent nicht ein.

**Versalziffern.** Kennzahlen, Uhrzeiten und Telefonnummern tragen
`font-variant-numeric: lining-nums tabular-nums`. Monate werden ausgeschrieben
(„15. April 2026“), nicht abgekürzt.

**Farbe nach Gegenstand (K1).** Eine Farbe trägt in allen Projekten denselben
Gegenstand. Nicht nach Bereich oder Projekt vergeben, sonst gibt es je Projekt
eine eigene Zuordnung statt einer gemeinsamen.

| Token | Wert | Gegenstand | Belegt in |
|---|---|---|---|
| `thema-tiefrot` | `#6d0818` | Rat, Feste | Stadtrat (`--gremium-stadtrat`), Data Hub (Volksfest), Konzept (Stadtrat, Veranstaltungen, Highlights) |
| `thema-erdbraun` | `#4a2a17` | Bauen, Boden, Geschichte | Stadtrat (BPU), Konzept (Stadtentwicklung, Wohnen, Geschichte) |
| `thema-nachtblau` | `#26295e` | Geld, Wahlen, Recht | Stadtrat (HVFA), Data Hub (Kommunalwahl), Konzept (Stadtfinanzen, Wahlen, Satzungen) |
| `thema-isarpetrol` | `#123b4a` | Wege, Wasser, Ankommen | Data Hub (Bahnhofumfrage), Konzept (Mobilität, Anreise, Umziehen) |
| `thema-tannengruen` | `#1f3b2d` | Natur, draußen | Konzept (Umwelt & Klima, Freizeit & Sport, Fair Trade) |
| `thema-aubergine` | `#3f2248` | Bildung, Kultur, Begegnung | Konzept (Familie & Bildung, Vereinsleben, Ehrenamt, Partnerstädte) |
| `gold-700` | `#6e5a30` | Mitmachen | Data Hub (amtliche Statistik), Konzept (Bürgerbeteiligung, Mängel melden) |
| `ink` | `#1c1c1c` | Übersicht, Verzeichnis | Portal (Fuß), Konzept (Verzeichnis-Spotlights) |

`gold-700` ist **bewusst doppelt belegt** (Benedict, 26.09.2026): im Data Hub
steht es für die Herkunft „amtliche Statistik“, im Stadt-Konzept für den
Gegenstand „Mitmachen“. Die beiden begegnen sich nicht auf einer Seite.

**Hinweis-Fläche `red-600`.** Keine Themenfläche, sondern die Ausnahme für
Stellen mit Aufmerksamkeitscharakter: Jubiläen, besondere Feste. Höchstens
eine pro Seite. Creme darauf 6,69:1, Gold-200 4,93:1. Rot bleibt im Übrigen
Bedienfarbe, nicht Flächenfarbe.

**Flächenfolge.** Über die ganze Breite oder gar nicht — eine Karte mit
deckender Farbe bleibt Hervorgehobenem vorbehalten. Höchstens eine dunkle
Fläche pro Bildschirm, zwei dunkle nie direkt aneinander; wo die Zuordnung das
verlangt, wird eine der beiden Creme oder `cream-dark`. Der Stripe steht nur im
Kopf und schließt keine Zwischenebene mehr ab (Ausnahme: der Einschub „In
eigener Sache“ im Portal). Karten dürfen etwa 72 px in die Fläche darüber
ragen.

**Ton in Ton (K2).** Die Farbebene einer zweifarbigen Zeichnung auf einer
dunklen Fläche nimmt den Ton ihres Bandes, nicht `red-500` — auf Petrol, Grün
oder Braun wäre Rot kein Ton in Ton mehr. Die Töne sind auf 2,2:1 gegen ihr
Band gerechnet, dieselbe Ruhe wie `red-500` auf Tiefrot (2,1:1), und stehen als
`zeichnung-*` bereit. Auf Tiefrot bleibt `red-500`. Dekorativ, nie Textfarbe;
Gold-200-Linien darauf erreichen 3,7 bis 4,3:1.

**Zweifarbige Zeichnungen: Trennung und Deckung (K3, K4).** Die beiden
Schablonen werden über **Chroma** (`max − min` der Kanäle) getrennt, nicht über
die HSV-Sättigung: bei dunklen Pixeln springt die Sättigung schon durch
JPEG-Rauschen hoch, und die fast schwarzen Tuschelinien landen dann in der
Farbebene. Die Farbebene wird anschließend auf volle Deckung normiert (Alpha
durch das 90. Perzentil der Nicht-Null-Werte, bei 1 gekappt) — ohne das liegt
die mittlere Deckung bei 56 bis 66 % und `red-500` wirkt auf Creme rosa.

**Wo Zeichnungen stehen (K5, K6).** Volle Deckung auf Identity-Köpfen und
Themenseiten, nie auf Service-Seiten. Identity-Flächen gelten als werbend,
deshalb ist dort volle Deckung erlaubt. Die Fläche zeigt auf den Gegenstand der
Seite, nicht auf ihren Bereich. Wasserzeichen stehen bei 6 bis 9 % Deckkraft,
je Grund nachgemessen (K12).

**Beschriftung in Zeichnungen (K11).** Ortsnamen ja, Betriebsnamen nein. Sonst
wird die Zeichnung zur Werbung für einen einzelnen Betrieb.

**Fotos (K7, K8).** Kein Text auf abgedunkeltem Foto und kein Verlauf darüber;
der Nachweis steht klein unter dem Bild. Bildstil „Blick durch die Blumen“,
Format WebP in 1200 und 2400 px, Dateiname aus Motiv und Aufnahmenummer. Ein
Motiv je Bereich, nicht mehrfach genutzt.

**Handschrift (K10).** Eine Überlappung im Kopf: etwa 1,45 × die Überschrift,
`gold-500` mit 55 % Deckkraft, −6°, hinter der Überschrift, `aria-hidden`; die
Überschrift muss lesbar bleiben. Eine zweite Handschrift auf derselben Seite
wird Notiz — `gold-700`, Pfeil in `gold-500`, zeigt auf eine konkrete Stelle —
oder fällt weg. Höchstens eine Notiz pro Bildschirm, nie auf Service-Seiten.

**Gastelement auf Themenseiten (K9).** Ein einzelnes Element, das nur auf
dieser Seite vorkommt. Festgehalten, noch nicht angenommen (26.09.2026).

## Verantwortung

Teil der Moosburg-Projekte von Benedict Gruber, siehe
`moosburg-eu/BRIEFING.md` für den übergreifenden Kontext.

## Lizenz

Mozilla Public License 2.0, siehe `LICENSE`. Wer Dateien dieses Repos abwandelt
und weitergibt, muss diese Dateien unter derselben Lizenz offenlegen; Projekte,
die die Tokens nur einbinden, bleiben davon unberührt. Stände bis einschließlich
Commit `15e3af0` wurden unter MIT veröffentlicht und bleiben es.

Ausgenommen sind Dateien fremder Herkunft mit eigener Lizenz: die Schriften in
`fonts/` (Inter, Playfair Display) unter der SIL Open Font License 1.1, Texte in
`fonts/OFL-Inter.txt` und `fonts/OFL-PlayfairDisplay.txt`, und die
Icon-Pfade in `docs/formsprache/artefakt/icons.json` aus Phosphor Icons (MIT).
