# Briefing: Formsprache der Karten

*Geschrieben am 27.09.2026, am selben Tag um Meterstab (AP 6) und Hof mit Ring (AP 7) ergänzt, für eine Session, die es ohne Rückfragen abarbeitet. Grundlage
sind die erste Lesung und Benedicts Antworten darauf. Alle Entscheidungen sind
**vorläufig**; wo „Probe“ steht, wird gebaut und am gebauten Stand noch einmal angesehen,
der Ersatz liegt bereit und wird mit dokumentiert.*

Betroffen: `baumkarte`, `moosburg-historisch`, `foodhub` (die drei Karten unter
`moosburg.eu/data/`), dazu kleine Nacharbeiten in `datahub`, `hausbasis` und diesem Repo.

## 1. Zuerst lesen

| Was | Wo |
|---|---|
| Vorlage mit Attrappen und Beschlüssen (Version 3) | https://claude.ai/artifact/P9KpGjEkzRw94DcB2hZ8Rw, mit dem Artifact-Werkzeug lesen (`action: "read"`). Abschnitte „Beschlüsse“ und „Nachgearbeitet“ (N1 bis N4) zuerst. |
| Protokoll, Abschnitt 3 ab „26.09.2026, erste Lesung Karten“ | `ENTSCHEIDUNGEN.md` in diesem Ordner |
| Kanon, Regeln K1 bis K12 | `../../README.md`, Tokens in `../../css/theme.css` |
| Vorbild für Kopf, Panel, Stripe, Rose | `../../../datahub/src/components/Header.tsx`, `RainbowStripe.tsx`, `Rose` in `ui.tsx` |
| Vorbild für die Ladeformen | `../../../moosburg/src/components/RoseLoader.tsx`, Keyframes `rose-tile-pulse` und `rose-spin` in `../../../moosburg/src/index.css` |
| Kontext je Karte | `KONTEXT.md` und `OFFENE-PUNKTE.md` in jedem der drei Repos. Die Baumkarte hat dort Regeln, die weiter gelten (ruhige Oberfläche, Quellenvermerk des UFZ direkt an der Karte). |

## 2. Spielregeln

- **Je Repo ein Branch `probe/formsprache`**, abgezweigt vom aktuellen lokalen `main`. Im
  Data Hub heißt er `probe/karten`, weil `probe/formsprache` dort schon existiert.
- **Nichts mergen, nichts pushen.** Benedict gibt frei. Danach wird direkt in `main`
  gemergt (kein `/v2`), Deploys laufen nacheinander, nie parallel (ein FTP-Konto).
- **Ein Commit je Arbeitspaket und Repo.** Commit-Texte deutsch, Umlaute umschrieben wie in
  der bestehenden Historie („Kloetze“, „gekuerzt“). Keine Hinweise auf KI oder Assistenten,
  kein `Co-Authored-By`, nirgends.
- **Keine Gedankenstriche** in neuem Text (UI, Doku, Commits). Kommas, Punkte, Klammern.
- **Versionen nur über die Hausbasis** (`../../../hausbasis/baseline.json`). Kein Paket in
  einem Repo allein hochziehen. Nach einer Paketänderung `rm -rf node_modules && pnpm install`,
  dann `pnpm store prune`.
- **Kein gemeinsames Komponentenpaket.** Kopf, Blatt und Ladeanzeige werden in jedem der drei
  Repos gebaut, mit denselben Werten. Eine Abstraktion ist nicht Teil dieses Auftrags.
- **Datenfarben bleiben** (Baumhöhen-Grün, Dürreklassen, Rot der Häuser mit Karte).
- **Nicht Teil dieses Auftrags:** Handschrift und Notizen, Tuschezeichnungen, Dunkelmodus,
  Wahlkarte, Straßennamen.
- Wenn etwas im Code dem Briefing widerspricht oder ein Wert nicht funktioniert: bauen, was
  am nächsten liegt, und es unter „Auslegungen“ im Ergebnis notieren. Nur anhalten, wenn ein
  Schritt Daten zerstören oder fremde, uncommittete Arbeit überschreiben würde.

## 3. Die Beschlüsse in Werten

| Punkt | Beschluss | Werte |
|---|---|---|
| 1 | Band als einzige Kopfzeile | siehe AP 2 |
| 2 | Themenfarbe je Karte | Baumkarte `thema-tannengruen` `#1f3b2d`, Historische Karten `thema-erdbraun` `#4a2a17`, Speisekarten `thema-aubergine` `#3f2248`. Creme darauf 11,4 / 12,0 / 12,8:1, Gold-200 8,4 / 8,9 / 9,4:1 |
| 3 | Stripe oben, einmal | 4 px, `rb-1` bis `rb-9`, über dem Band |
| 4 | Desktop: Seitenleiste in allen drei; Telefon: Blatt zeigt in Ruhe das Instrument | siehe AP 3 |
| 5 | Kanon-Ecken | Leiste, Blatt, Knöpfe, Suche 8 px (`rounded-xl`); Kartenknöpfe, Popup 4 px (`rounded-md`); Chips Pille |
| 6 | **Probe** Gold für gesetzte Filter | Gold-700 `#6e5a30` auf Gold-100 `#f6ecd5` (5,64:1), Rand Gold-500, halbfett. **Ersatz:** voll `red-500` mit weißer Schrift (heutiger Stand der Speisekarten). **Keine Familienregel.** |
| 7 | **Probe C** Zeiger in der Themenfarbe | eine Variable `--zeiger` je App. **Ersatz A:** `--zeiger: var(--color-red-700)` |
| 8 | Grundkarte im Papierton | siehe AP 5 |
| 9 | Zoomknöpfe nur mit Maus, Standort am Daumen, Maßstab als Meterstab in Tinte und Creme | siehe AP 6 |
| 10 | **Probe** Klecks als Auswahlmarke mit Hof und Ring (beides, beschlossen) | siehe AP 7 |
| 11 | keine Handschrift in den Karten | |
| 12 | Laden in zwei Stufen | siehe AP 8 |
| T | Namen und Texte | siehe AP 9 |

Breakpoint für alles: unter `lg` (1024 px) Telefon-Aufbau mit Blatt von unten, ab `lg`
Seitenleiste. Die 400 px breite Leiste braucht die Breite; Tablets bekommen das Blatt.

## 4. Arbeitspakete

Reihenfolge: AP 0 für alle Repos. Dann die **Baumkarte vollständig (AP 1 bis 8)** als erste
Karte, danach die Historischen Karten, danach die Speisekarten. Nach der Baumkarte die
Aufnahmen mit den Attrappen der Vorlage vergleichen und Abweichungen notieren, ohne auf
Antwort zu warten. AP 9 und AP 10 zum Schluss.

### AP 0: Stand klären, vorbereiten

Stand am 27.09.2026: `baumkarte` 4 Commits vor und 32 hinter `origin/main` (dahinter liegen
nur die täglichen Commits „Umweltdaten: Stand …“), `moosburg-historisch` 3 vor, `datahub` 1
vor, `hausbasis` 2 vor, `foodhub` sauber bis auf eine unversionierte PDF in `sources/`, die
liegen bleibt. Die lokalen Commits sind Benedicts Schriftwechsel; sie bleiben, gepusht wird
nicht.

1. In jedem Repo `git status` und `git fetch`. Liegt uncommittete Arbeit vor, die hier nicht
   beschrieben ist: nicht anfassen, anhalten und melden.
2. `baumkarte`: `git pull --rebase` auf `main` (nur Cron-Daten), prüfen, dass die vier lokalen
   Commits obenauf liegen.
3. Branches anlegen (siehe Spielregeln).
4. `pnpm update moosburg-design` in den drei Karten: Die Lockfiles von Baumkarte und
   Historischen Karten zeigen noch auf Kanon `1b5c29e`, ohne `--color-thema-*`. Danach
   `grep thema-tannengruen node_modules/moosburg-design/css/theme.css` muss treffen.
5. Phosphor: `"@phosphor-icons/react": "^2.1.10"` in `hausbasis/baseline.json` eintragen
   (denselben Range führen schon `datahub`, `haushaltvis`, `moosburg`) und in allen drei
   Karten als Abhängigkeit setzen. Commit in `hausbasis` auf `main`, nicht pushen.
6. `foodhub`: Schriftwechsel wie in den anderen beiden (`package.json`, Importe in
   `src/index.css`, `font-feature-settings` weg). Das ist der erste Commit auf dem Branch.
7. `node ../hausbasis/check.mjs --kurz` zeigt für die drei Karten keine Abweichung.

**Prüfen:** In allen drei `pnpm typecheck`, `pnpm build`, `pnpm build:hostinger`; in
`foodhub` zusätzlich `pnpm test`. Vorher-Aufnahmen machen (AP 10, Werkzeuge), bevor sich
sichtbar etwas ändert.

### AP 1: Schrift, Versalien, Schriftgrade

- `.headline`, `.eyebrow`, `.label` löschen. Titel stehen künftig im Band (AP 2).
  Beschriftungen an Instrumenten („Baumhöhe in Meter“, „Mindesthöhe“, „Ausgabe“, „Fläche“)
  in Satzschreibung, 13 px, `font-semibold`, `text-ink-soft`. Gruppenköpfe der
  Speisekarten-Liste ebenso, weiter klebend, ohne `backdrop-blur`.
- **12 px ist die Untergrenze** für alles, was gelesen werden soll: Skalenziffern,
  Quellenvermerk, Kleingedrucktes, Zeilen der Liste. Heute stehen dort 0,6 bis 0,69 rem.
- Monate ausgeschrieben („21. August“ statt „21.08.“), Zahlen `tabular-nums lining-nums`.
- Kicker „Moosburg an der Isar“ entfällt ersatzlos.
- Phosphor statt eigener Zeichen: `foodhub/src/components/Icons.tsx` wird durch Phosphor
  ersetzt, soweit es dort ein passendes Zeichen gibt (Gewicht `regular`, in kleinen farbigen
  Flächen `bold`); was fehlt, bleibt und wird notiert. In der Baumkarte der Chevron.

**Prüfen:** `grep -rn "uppercase\|eyebrow\|headline\|\.label\|Inter\|Playfair" src` leer;
`grep -rnE "text-\[0\.[0-6][0-9]*rem\]|text-\[1[01]px\]|font-size: 0\.[0-6]" src` leer.

### AP 2: Kopfband, Themenfarbe, Stripe, Panel

Aufbau am Desktop (Höhe 4 + 52 px): Stripe; Band in der Themenfarbe mit Innenabstand 20 px
und Abstand 16 px zwischen den Teilen: Link „Data Hub“ mit `ArrowLeft` (15 px, Creme 85 %),
senkrechte Trennlinie (Creme 28 %), Titel in `font-display` 23 px halbfett Creme, Kennzahl
(Zahl in `font-display` 17 px Gold-200, Einheit 14 px Creme 82 %), rechts Knopf mit Rose in
Gold-200 und „Über das Projekt“ mit `CaretDown`.

Am Telefon (Höhe 4 + 60 px): Pfeil zurück als Knopf 44 × 44 (`ArrowLeft` bold), daneben
zweizeilig Titel 20 px und Kennzahl 12,5 px, rechts Rosen-Knopf 44 × 44.

- Der Rücklink geht immer auf `https://moosburg.eu/data/`, auch im Pages-Build.
- **Panel „Über das Projekt“** aus `datahub/src/components/Header.tsx` (`UeberDasProjekt`)
  übernehmen: Disclosure mit `aria-expanded`, Esc und Klick außerhalb schließen, Fokus zurück;
  ab `lg` unter dem Knopf, darunter als Blatt von unten. Inhalt: „moosburg.eu, alle
  Projekte“ als erster Eintrag, Name der Karte, ein Satz, „Privates Projekt, kein Auftritt
  der Stadt. Verbindlich sind die jeweiligen Quellen.“, dann „Über die Daten“
  (`https://moosburg.eu/data/about`), „Impressum und Kontakt“
  (`https://moosburg.eu/#impressum`), „Fehler melden“ (Issues des Repos), „Quellcode“.
- In der Baumkarte fällt dafür der Absatz „Private Eigenentwicklung, kein Angebot der Stadt.
  Kein Tracking. Feedback“ aus der Erläuterung. „Kein Tracking“ wandert als Satz ins Panel.
- Kennzahlen: Baumkarte „2.868.813 Einzelbäume“ (vorhandene Konstante), Historische Karten
  „8 Ausgaben seit 1960“ (aus `AUSGABEN.length` und `ERSTES`), Speisekarten „1.714 Gerichte
  aus 16 Häusern“, gerechnet aus `restaurants.json` (Summe von `dishCount`, Anzahl der Häuser
  mit `dishCount > 0`), nicht aus der erst später geladenen `dishes.json`.
- Die Kennzahl erscheint erst, wenn die Karte steht (AP 8).
- Die Goldregel als Blattkante zwischen Titel und Instrument entfällt, weil der Titel jetzt
  im Band steht. Die gestrichelte Blattschnitt-Linie auf der Karte der Baumkarte bleibt, sie
  ist Datengrenze.

**Prüfen:** Band über die volle Breite in allen Größen; Tastatur durch Rücklink, Panel und
zurück; Kontrast wie in der Tabelle in Abschnitt 3.

### AP 3: Seitenleiste und Blatt

**Ab `lg`:** Leiste links unter dem Band, 400 px (`w-[25rem]`), volle Resthöhe, Creme,
Haarlinie rechts, eigener Scrollbereich (`.plate-scroll` weiterverwenden). Die Karte füllt
den Rest. `fitBounds` braucht kein Polster mehr für einen schwebenden Block; das
asymmetrische Polster der Baumkarte und `randabstand()` der Historischen Karten entsprechend
anpassen. Speisekarten: Leiste von 26 auf 25 rem.

**Unter `lg`:** Blatt von unten, oben 8 px gerundet, Griff 36 × 4 px, in Ruhe genau das
Instrument:

| Karte | In Ruhe | Aufgezogen |
|---|---|---|
| Baumkarte | Höhenskala und Mindesthöhe | Boden, Zeitraum, Fläche, Erläuterung, Quellen |
| Historische Karten | Ausgabe und Zeitschiene | Notiz zur Ausgabe, Erläuterung, Quellen |
| Speisekarten | Umschalter, Suche, Chips (wie heute) | Liste, dann das Haus |

- Die Baumkarte übernimmt das Einklappen der Historischen Karten (Griff als Knopf mit
  `aria-expanded`). **Ruhige Oberfläche gilt weiter:** beide Zustände haben eine feste Höhe,
  Aufklappen der Erläuterung verschiebt nichts; die Position des Mindesthöhen-Reglers in
  beiden Zuständen und bei offener Erläuterung nachmessen, wie im Kontext der Baumkarte
  beschrieben.
- Die Speisekarten behalten ihre drei Rastungen, nur Radius und Stil ändern sich.
- Der Quellenvermerk bleibt im Blatt sichtbar, ohne Aufklappen; beim UFZ ist das
  Lizenzbedingung.

**Prüfen:** 390 × 844 und 1440 × 900 ohne waagrechten Überlauf; Karte am Telefon
eingeklappt mindestens drei Viertel des Bildschirms.

### AP 4: Bedienfarben (Probe 6 und Probe 7)

- Je App eine Variable in `src/index.css`: `--zeiger: var(--color-thema-tannengruen)`
  (Baumkarte), `var(--color-thema-erdbraun)` (Historische Karten),
  `var(--color-thema-aubergine)` (Speisekarten). Direkt darüber als Kommentar die Ersatzzeile
  `/* Ersatz 7A: --zeiger: var(--color-red-700); */`.
- Baumkarte: beide Schieber (`.rule-slider`, `.rule-slider--duerre`) nehmen `--zeiger`.
  Historische Karten: gewählte Marke und Schieber der Zeitschiene nehmen `--zeiger`, die
  übrigen Marken bleiben Gold-600. Speisekarten: Uhrzeit-Regler im Filterblatt
  (`accent-red-500`) auf `accent-color: var(--zeiger)`.
- Gesetzte Filter (Chips der Schnellfilter und im Filterblatt, Wochentage, Knopf „Filter“)
  in Gold, siehe Abschnitt 3. Der Knopf „Filter“ zeigt die Zahl gesetzter Filter. Die
  Ersatzklassen (`border-red-500 bg-red-500 text-white`) als Kommentar an der Stelle stehen
  lassen, an der die Chip-Klassen definiert sind.
- Umschalter als helle Schiene: Grund `cream-dark`, 2 px Innenabstand, gewähltes Feld weiß
  mit leichtem Schatten und halbfett. Betrifft „Fläche“ in der Baumkarte (heute Tinte). Er
  ist kein Filter und bleibt deshalb neutral.
- Fokusring bleibt Rot.

**Am gebauten Stand ansehen und im Ergebnis beschreiben:** Tannengrün-Schieber neben dem
dunkelsten Baumgrün `#0b3d20`; Gold-Chips neben den roten Punkten der Speisekarten.

### AP 5: Grundkarte im Papierton, Rückfall

- Eine Funktion `papierton(style)` in Baumkarte und Speisekarten (je eine Kopie, rund
  40 Zeilen): Sie geht rekursiv durch `layers[].paint` samt Ausdrücken und multipliziert jede
  Farbangabe kanalweise mit Creme `#faf7f2` (`r · 250/255`, `g · 247/255`, `b · 242/255`),
  Alpha bleibt. Welche Schreibweisen basemap.de nutzt (`#rgb`, `#rrggbb`, `rgb()`, `rgba()`,
  `hsl()`, `hsla()`), zuerst im Stil nachsehen und nur diese behandeln. Keine Ebene beim
  Namen ansprechen.
- Die Baumkarte lädt den Stil heute per `fetch` in `TreeMap.tsx`, die Speisekarten in
  `preloadBasemap()` in `CityMap.tsx`; dort jeweils einhängen.
- **Rückfall bei Ausfall von basemap.de** in beiden: die graue TopPlusOpen als Raster,
  `https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_grau/default/WEBMERCATOR/{z}/{y}/{x}.png`.
  Ersetzt in der Baumkarte die OSM-Kacheln; die Speisekarten haben heute gar keinen. Das
  Raster bleibt ungetönt. Der Quellenvermerk nennt, was tatsächlich geladen wurde.
- Die Historischen Karten bleiben bei der farbigen TopPlusOpen.
- Tests (vitest, in der Baumkarte gegebenenfalls einrichten wie in `foodhub`): Weiß wird
  `#faf7f2`, Schwarz bleibt Schwarz, Alpha bleibt, Farben in `interpolate` und `match` werden
  getönt, Nicht-Farben bleiben unberührt.

**Prüfen:** hellstes Baumgrün `#639436` auf Creme 3,38:1 (über 3:1); Ausfall per Playwright
simulieren (`page.route` auf den Stil mit `abort`), beide Karten zeigen die graue
TopPlusOpen.

### AP 6: Kartenknöpfe und Maßstab

- Plus und Minus nur bei `matchMedia("(hover: hover) and (pointer: fine)")`, oben rechts in
  der Karte. Kartenknöpfe Creme, Haarlinie, 4 px, Phosphor `Plus`, `Minus`, `Crosshair`.
- Am Telefon ein eigener Standort-Knopf, 42 × 42, 8 px gerundet, unten rechts 12 px über dem
  Blatt; er wandert mit der Höhe des Blatts (eine CSS-Variable für die Blatthöhe). Er löst die
  vorhandene `GeolocateControl` aus. Am Desktop bleibt der Standort in der Knopfgruppe. Die
  Historischen Karten bekommen keinen Standort-Knopf.
- **Maßstab als Meterstab**, wie auf gedruckten Karten (Attrappe N2 der Vorlage, Version 3):
  vier gleich breite Felder im Wechsel Tinte `#1c1c1c` und Creme, 5 px hoch, gerahmt mit
  1 px Tinte, außen 1 px Creme bei 85 % als Hof gegen dunkle Kartenstellen. Darüber, 3 px
  Abstand, links „0“ und rechts die Strecke („200 m“, „1 km“), 12 px `ink-soft`,
  `tabular-nums`, Hof in Creme (`text-shadow: 0 0 2px, 0 0 4px, 0 0 6px` in
  `--color-cream`). Keine Fläche hinter dem Ganzen.
  Umsetzung am vorhandenen `ScaleControl`, ohne eigenes Rechnen: MapLibre setzt die Breite des
  Elements auf die Strecke und schreibt den Text hinein. Die Felder entstehen als Hintergrund
  in Prozent der Breite, zum Beispiel
  `linear-gradient(90deg, ink 0 25%, cream 25% 50%, ink 50% 75%, cream 75%)` in einer auf
  5 px Höhe begrenzten, unten angesetzten Hintergrundebene, der Rahmen als zweite Ebene
  darunter; der Text rechtsbündig darüber, die „0“ als `::before` links. Wenn das mit dem
  Markup von MapLibre nicht sauber geht, ein eigenes Element, das beim Ereignis `move` Breite
  und Text vom `ScaleControl` übernimmt; das dann im Ergebnis notieren.
  Ort: ab `lg` unten links in der Karte, neben der Leiste; darunter oben links unter dem Band.
  Die feine Haarlinie aus der zweiten Fassung der Vorlage ist geparkt, nicht bauen.

**Prüfen:** am Telefon keine Zoomknöpfe; die vier Felder bleiben beim Zoomen gleich breit
zueinander; Meterstab auf dunklen Kartenstellen lesbar (Waldflächen der Baumkarte,
Siedlungen im Blatt 1969).

### AP 7: Auswahl auf der Karte (Probe 10)

Nur die Speisekarten.

- Das gewählte Haus bekommt einen `maplibregl.Marker` mit eigenem Element: Klecks 44 px,
  Pfad `M25 3.5c8.6.3 17.8 5.2 19.2 14.6 1.5 9.8-4 21.5-14.4 24.9C19.7 46.3 6.6 41.5 4.3 30.7 2 19.6 12.2 3 25 3.5z`
  in `viewBox 0 0 48 48`, Fläche `red-100`, Rand Creme 2,5 px, darin Phosphor `ForkKnife`
  bold in `red-700` (6,52:1), leichter Schlagschatten.
- **Hof**, solange das Haus gewählt ist: Kreis 84 px hinter dem Klecks,
  `radial-gradient(circle, rgb(200 16 46 / .38) 0, rgb(200 16 46 / .16) 45%, transparent 70%)`.
- **Ring beim Wählen, einmal:** Kreis 44 px, 2 px `red-500`, skaliert in 600 ms `ease-out`
  von 0,7 auf 1,9 und blendet dabei aus. Nicht bei `prefers-reduced-motion`.
- Der Punkt des gewählten Hauses in der Punktebene wird über einen Filter ausgeblendet,
  damit er nicht unter dem Klecks hervorschaut. Nie alle Häuser als Klecks.
- Die Baumkarte bleibt bei ihrem Zettel am Punkt (Popup, jetzt 4 px Ecken). Regel dafür: bis
  zwei Werte ein Zettel, mehr gehört ins Blatt.

### AP 8: Laden in zwei Stufen

- **Erstes Laden**, in allen drei Karten: auf der Kartenfläche (nicht über Band oder Leiste)
  mittig drei Kacheln 64 × 64, 8 px, Abstand 12 px; außen Creme mit Haarlinie und Rose
  32 px in der Themenfarbe, in der Mitte Themenfarbe mit Rose in Creme. Animation wie
  `rose-tile-pulse` aus dem Stadt-Konzept (1,6 s, Verzögerung 0, 200, 400 ms). Darunter
  „Karte wird geladen“ 14 px `ink-soft`, Satzschreibung. Kein `backdrop-blur`,
  `role="status"`, `aria-live="polite"`. Verschwindet beim ersten `idle`; erst dann erscheint
  die Kennzahl im Band.
- **Nachladen:** Wo heute nachgeladen wird, steht an der Stelle der Kennzahl eine drehende
  Rose 14 px Gold-200 (`rose-spin`, 1,6 s, `cubic-bezier(.65, 0, .35, 1)`) mit dem Wort:
  Historische Karten „Blatt 1984 wird geladen“ beim Wechsel der Ausgabe (das alte Blatt
  bleibt stehen, bis das neue da ist), Speisekarten „Gerichte werden geladen“ beim ersten
  Holen von `dishes.json`. Die heutigen Lade-Texte im Blatt entfallen.
- Bei `prefers-reduced-motion` stehen Kacheln und Rose still.
- Die Rose kommt als Maske wie `Rose` in `datahub/src/components/ui.tsx`.

### AP 9: Namen, Texte, Nacharbeiten außerhalb der Karten

- Titel: „Baumkarte“, „Historische Karten“, „Speisekarten“; auch `<title>` und
  `meta description` angleichen. „Was gibt es zu essen?“ wird Platzhalter der Suche im Modus
  Gerichte.
- Historische Karten, Gedankenstriche: „Topographische Karte 1:25 000, Blatt 7537. Acht
  Ausgaben, deckungsgleich übereinandergelegt.“ und „Die alten Blätter tragen die
  Gradangaben noch auf dem Bessel-Datum. Wer sie für heutige Koordinaten nimmt, legt die
  Karte rund 150 Meter daneben.“
- Speisekarten, Zeilen der Liste: „Restaurant“ entfällt aus der Aufzählung, Gasthof, Café,
  Imbiss und Ähnliches bleiben; Trenner Komma statt Mittelpunkt. Rechts die Zahl als
  „210 Gerichte“ in `ink-soft`, ohne rotes Etikett.
- `datahub` (Branch `probe/karten`), `src/pages/Home.tsx`: Kacheltitel „Moosburg historisch“
  wird „Historische Karten“; Satz der Speisekarten-Kachel „Aus 17 Speisekarten, jede mit
  Quelle und Datum.“ wird „Aus den Karten von 16 Häusern, jede mit Quelle und Datum.“ Die
  Zahl vorher in `foodhub/public/data/moosburg/restaurants.json` nachzählen.
- Dieses Repo: im `README.md` in „Wer nutzt was“ eine Zeile für `foodhub` (npm-Dependency,
  Theme, eigene Merkmalsfarben für die Ernährungsformen).

### AP 10: Prüfen, festhalten, melden

**Werkzeuge.** Playwright aus `../etymology/node_modules/playwright`, im ESM-Import als
`file:///C:/Users/bened/Documents/GitHub/bagruber/etymology/node_modules/playwright/index.mjs`.
Vorschau mit `pnpm exec vite preview --base=/data/<name>/ --port <p> --strictPort`, gestartet
aus **PowerShell** (`Start-Process`); Git Bash biegt `/data/…` zu einem Windows-Pfad um.
`pnpm exec` installiert vorher selbst, wenn `package.json` und Lockfile auseinanderliegen.
PMTiles brauchen Range-Anfragen, `python -m http.server` genügt deshalb nicht. basemap.de
war am 26.09. abends zeitweise nicht erreichbar; dann mit dem Rückfall aus AP 5 prüfen und
das notieren. Live auf moosburg.eu prüft Benedict selbst (Bot-Schutz von Hostinger).

**Je Karte:**

- Vorher- und Nachher-Aufnahmen bei 390 × 844 und 1440 × 900, jeweils Ruhe und aufgezogen,
  dazu Panel offen, Ladezustand, gewähltes Haus. Ablage `vorher/`, `nachher/` im Repo,
  per `.git/info/exclude` ausgenommen.
- `pnpm typecheck`, `pnpm build`, `pnpm build:hostinger` grün; `foodhub` `pnpm test`.
- Keine Konsolenfehler, keine 404; geladen werden nur Source Serif 4 und Atkinson
  Hyperlegible Next.
- Kein waagrechter Überlauf bei 390 px.
- Tastatur: Rücklink, Panel, Griff des Blatts, alle Regler, Chips, Umschalter.
- Kontraste der neuen Paare nachrechnen, Werte ins Ergebnis.

**Festhalten:** je Repo `docs/formsprache-probe/ERGEBNIS.md` nach dem Muster von
`datahub/docs/formsprache-probe/ERGEBNIS.md`: Tabelle „Was jetzt gilt“ mit Commits,
„Auslegungen, die Benedict ansehen sollte“, Messwerte, Prüfungen, gefundene Fehler. Pflicht
darin: die beiden Ersatzvarianten (6: voll Rot mit weißer Schrift; 7A: Rot-700) mit der
genauen Stelle, an der man umschaltet, und die Beobachtungen aus AP 4.

**Protokoll** (`ENTSCHEIDUNGEN.md`): im Verlauf ein Eintrag „Probe in den Karten umgesetzt“
mit Branches und Commit-Spannen; in Abschnitt 7 den Stand der Karten-Zeilen nachführen.
Nichts in den Kanon zurückschreiben: Die Kandidaten aus der Lesung werden erst am gebauten
Stand entschieden, und Punkt 6 ist ausdrücklich keine Regel.

**Melden:** eine kurze Zusammenfassung an Benedict mit den Pfaden der drei Ergebnisse und
der Liste der Stellen, die er ansehen soll. Nicht mergen, nicht pushen.
