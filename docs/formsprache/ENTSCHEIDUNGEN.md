# Formsprache der Moosburg-Projekte: Prozess und Entscheidungen

*Angelegt am 14.09.2026. Diese Datei ist das Protokoll. Wer an der Formsprache
weiterarbeitet, liest sie zuerst und führt sie nach; der Abschnitt „Verlauf“ wächst,
nichts wird gelöscht.*

**Stand in einem Satz:** Zwei Vorschlagsrunden sind durch, am 14.09.2026 sind
**vorläufige** Entscheidungen gefallen, und die Probe im Haushalt (haushaltvis) ist auf
einem Branch umgesetzt, vorläufig und nur für dieses Projekt. Briefings für die nächsten
Proben (Portal, Stadtrat, Data Hub) liegen bereit. Nichts davon ist in `css/theme.css`
angekommen.

---

## 1. Worum es geht

Ziel ist ein einheitlicherer Look über alle Moosburg-Projekte und eine Bedienung, die
näher an großen, erfolgreichen Apps liegt, ohne die markanten Elemente zu opfern. Die
Kernfarben (Rot, Gold, Creme) werden nicht angefasst, der Rainbow-Stripe und die Rose
bleiben. Typische Merkmale generierter Oberflächen sollen verschwinden (etwa Etiketten über
jeder Überschrift, Icon im getönten Quadrat, einseitige Kantenakzente).

## 2. Wo alles liegt

| Was | Wo |
|---|---|
| Vorschlagsseite (Artefakt, privat, claude.ai) | https://claude.ai/code/artifact/764bc923-36f6-4751-8e8e-01eddec5c826 |
| Quelle der Vorschlagsseite, zum Weiterbauen | `docs/formsprache/artefakt/` in diesem Repo, siehe dortiges README |
| Briefing für die Probe im Haushalt | `../haushaltvis/docs/briefing-formsprache-probe.md` |
| Ergebnis der Haushalt-Probe, mit Benedicts Rückmeldung | `../haushaltvis/docs/formsprache-probe/ERGEBNIS.md` |
| Briefings für die nächsten Proben, in dieser Reihenfolge | `../moosburg-eu/docs/briefing-formsprache-portal.md`, `../council/docs/briefing-formsprache.md`, `../datahub/docs/briefing-formsprache.md` |
| Inspiration (App-Screenshots, Schriftdateien) | `../moosburg-eu/inspiration/`, nicht eingecheckt; die Screenshots enthalten private Daten und gehören in kein Repo |
| Heutiger Kanon | `css/theme.css`, `README.md` |

Die Vorschlagsseite wird aktualisiert, indem man die Quelle baut und mit dem Artifact-Werkzeug
unter derselben URL neu veröffentlicht (Parameter `url`). Veröffentlichungsstände:
Version 1 (11.09., erste Runde), Version 2 (14.09., zweite Runde mit Farbflächen),
Version 3 (14.09., vorläufige Entscheidungen markiert).

## 3. Verlauf

### 11.09.2026, Runde 1: Befund und erste Vorschläge

**Befund** über die GitHub-Pages-Fassungen und den Code:

- Etiketten in Versalien-Sperrsatz über fast jeder Überschrift (im Stadt-Prototyp rund
  300 Stellen `eyebrow`, im Data Hub jede Karte, auch im Showcase dieses Repos)
- Versalien in Navigation, Badges und Labels
- 52 Script-Wasserzeichen hinter Überschriften im Stadt-Prototyp, teils unleserlich
- Stripe mal oben, mal unter dem Kopf
- im Sitzungstool Noto-Schriften und ein roter Verlauf
- Stadtrat-Tab-Leiste am Desktop über 1440 px gestreckt
- Detector (impeccable) markiert Inter als austauschbare Standardschrift

Dazu Fehler, siehe Abschnitt 7.

**Vorschläge:**

- Überschriften ohne Etikett
- Handschrift als Randnotiz statt Wasserzeichen
- gruppierte Listen statt Kacheln
- Status als Punkt plus Wort
- Muster aus den Referenz-Apps: Suche als Pille, Chip-Zeile, Tab-Leiste unten, großer Titel
- ein Kopf für alle
- Versalziffern
- Dunkelmodus
- als Schriften Besley, Source Sans 3 und La Belle Aurore

### 14.09.2026, Rückmeldung von Benedict zu Runde 1

Wörtlich zusammengefasst, damit spätere Sitzungen die Begründungen kennen:

- **Schriften:**
  - Titelserife möglichst nah an Playfair (typische Attribute) und in der Balance zwischen
    wiedererkennbar und unaufdringlich
  - Handschrift als schöne Deko
  - Textschrift nach Lesbarkeit und Barrierefreiheit, gelobte Schriften
  - Fontlark-Schriften sind erlaubt, alle dort sind open license
- **Handschrift:** Die Überlappung mit der Serifen-Überschrift ist **bewusst** und gehört zur
  CI, die sonst sehr brav ist; die Überschrift muss lesbar bleiben. Notizen an sinnvollen
  Stellen sind zusätzlich gut.
- **Etiketten:** nicht generell streichen, nur Redundanz vermeiden. Für wiederkehrende
  Kategorien eine Zeile über oder unter der Überschrift, die sich farblich und optisch
  abhebt.
- **Liste statt Kachelreihe:** allenfalls für schmale Screens; am Desktop sind Kacheln als
  dominante Einträge sinnvoll.
- **Metazeile unter dem Titel** wirkt nackt, braucht mindestens Ikonografie.
- **Data-Hub-Karten ohne Etikett:** gleiches Problem; die Anzahl der Datenpunkte muss eine
  klar erkennbare eigene Zeile sein; es fehlt ein auflockernder Farbklecks.
- **Eintrags-Ästhetik von moosburg.eu** (Einträge ohne Rahmen oder Karte) ist gelungen und
  bleibt.
- **Weitere Punkte:**
  - Einheitliche Suche: ja.
  - Radien einheitlicher, eher weniger rund (10 statt 12 px).
  - Status-Punkte sehen zu sehr nach Standard aus.
  - Tab-Leiste unten ja, wo es mehrere Tabs gibt.
  - Titel oben links mobil ja; am Desktop darf es künstlerischer werden.
  - Eigene Tool-Icons und -Logos kommen später.
  - Gruppierte Listen sehen generisch aus.
  - Chips als scrollbare Zeile im Stadtrat schwierig bei so vielen Kategorien, aber als
    Versuch ok.
  - Button- und Segment-Ästhetik ok; einheitlich kurze Beschreibungen gut.
- **Navigation:**
  - einheitlich am Desktop für alles außer Sitzungstool und Website-Konzept
  - neben den Tool-Inhalten ein einheitlicher Eintrag zurück zu moosburg.eu und einer, der
    zum Projekt erzählt (mit Kontakt und Impressum)
- **Dunkelmodus:** gute Idee, gutes Design.
- **Versalien in der Titelserife:** nur noch extrem selten, höchstens Seitentitel, nie h2.
- **Nachgereicht:**
  - Die Kombination des Website-Konzepts (deckende Farbfläche mit goldener Deko oder
    Schrift) auch in den Apps, wo sinnvoll.
  - Gelegentlich thematisch passend in der Farbe abweichen, solange es eine
    gedeckte/kräftige, eher dunkle Farbe mit goldenem Akzent bleibt.
- **Arbeitsweise:** Keine Idee verwerfen, sondern markieren; nichts bauen ohne Freigabe.

### 14.09.2026, Runde 2: überarbeitete Vorschläge

Jede Idee der ersten Runde ist markiert: Weiter, Überarbeitet, Neu, Offen oder Geparkt.
Neu dazu:

- Schriftauswahl mit rund 70 Kandidaten, auf Umlaute, ß und € geprüft
- Kategoriezeile in drei Varianten (A darüber, B Marke darunter, C Farbklecks)
- Data-Hub-Kacheln mit Anzahl-Zeile
- zwei Alternativen zur gruppierten Liste (Register, Mini-Kacheln)
- drei Überlappungs-Varianten (1 wie heute, 2 Freistellung, 3 Anschnitt)
- vier Status-Varianten (Stempel, Rose, Handschrift, Mini-Stripe)
- Navigation in zwei Varianten (A eine Zeile, B Dachzeile)
- Seitentitel am Desktop mit Federzeichnung und Logo-Platz
- deckende Farbfläche mit Gold und sechs Themenfarben

### 14.09.2026, vorläufige Entscheidungen

Getroffen, um sie im Haushalt zu erproben. **Vorläufig heißt:** Sie gelten für die Probe
und für alle weiteren Vorschläge als Ausgangspunkt, aber nichts wandert in den Kanon, bevor
Benedict sie nach der Probe bestätigt. Siehe Abschnitt 4.

### 14.09.2026, Probe in haushaltvis umgesetzt

**Vorläufig und nur für haushaltvis.** Die Probe zeigt, wie die Entscheidungen in diesem
einen Projekt tragen. Keine Entscheidung ist dadurch endgültig, keine ist in den Kanon
übernommen, und für andere Projekte folgt daraus nichts, bis Benedict sie bestätigt.

- **Wo:** Branch `probe/formsprache` in haushaltvis, Commits `6624856`, `e970d5a`, `b1cf365`,
  `4d11fc2`. Vorschau unter https://bagruber.github.io/haushaltvis/v2/, die Wurzel bleibt
  der Stand von `main`.
- **Auswertung:** `../haushaltvis/docs/formsprache-probe/ERGEBNIS.md`, mit Kontrastwerten je
  Kategorie, Abweichungen und Screenshot-Paaren.
- **Abweichungen, im Haushalt begründet:** aktive Zustände in Tinte statt Rot; Tab-Leiste bis
  1024 px, weil die Kopfzeile darunter nicht in eine Zeile passt; keine Kategoriezeile in den
  Einzelplan-Abschnitten, weil sie überall denselben Einzelplan wiederholt hätte.
- **Beim Bauen gelernt:** `overflow-hidden` am Seitenkopf schneidet den Schwung der
  Handschrift ab, nur die Zeichnung darf beschnitten werden; über einem Titel mit Überlappung
  braucht es rund 1,15 em Abstand, sonst kreuzt das Script das Element darüber; ECharts muss
  auf die Schriften warten und bekommt sie explizit, sonst bleibt der Canvas in der
  Systemschrift.
- **Offen für Benedict:** Flächenton im Haushalt (Tiefrot oder Erdbraun), aktive Zustände,
  Null mit Schrägstrich (kein OpenType-Feature schaltet sie ab), Madelon Script vorerst
  öffentlich erlaubt.

### 14.09.2026, Briefings für Portal, Stadtrat und Data Hub

Benedict will nach dem Haushalt die Portalseite angehen, danach Stadtrat und Data Hub. Für
alle drei liegt ein Briefing im jeweiligen Repo (Abschnitt 2). Die Entscheidungen bleiben
vorläufig; jede Probe läuft auf einem eigenen Branch, der Kanon bleibt unberührt.

- **Übernommen aus der Rückmeldung zur Haushalt-Probe** (`../haushaltvis/docs/formsprache-probe/ERGEBNIS.md`):
  Handschrift mit `top: -0.42em` stärker in der Überschrift, rund 0,85 em Abstand darüber;
  im sichtbaren Text Bindestrich statt Gedankenstrich. Abschnitt 4 nennt noch die
  Ausgangswerte.
- **Beim Lesen der drei Projekte aufgefallen:**
  - Der Stadtrat nutzt nicht mehr Material Symbols, sondern ein Lucide-Sprite mit
    Material-Namen als IDs (`council/scripts/build_icon_sprite.mjs`). Abschnitt 7 ist
    korrigiert.
  - Portal: „In eigener Sache“ als Farbfläche kollidiert mit dem roten Fuß direkt darunter
    (eine Fläche pro Bildschirm). Beide Varianten sollen als Paar vorgelegt werden.
  - Portal: Die Rose vor „Aktive Tools“ und „Archiv“ verursacht den Einzug und bedeutete
    neben der Rose als Status zweierlei.
  - Stadtrat: Einstellungen und Kontakt nennen die App „Ratsinformationssystem der Stadt“
    und verweisen an die Geschäftsstelle des Stadtrats; dieselbe Frage wie die Fußzeile im
    Data Hub.
  - Stadtrat: Die Bereichsfarben im Kopf (`--chrome`) haben auf der Vorschlagsseite kein
    Gegenstück. Die „nächste Sitzung“ als Fläche oben auf der Startseite widerspricht der
    begründeten Rangfolge dort.
  - Stadtrat und Data Hub: Mit „moosburg.eu“ samt Rose und der Rose als Logo-Platzhalter
    stünden zwei Rosen nebeneinander.
  - Data Hub: Die Über-Seite verspricht Download und Methodik-Hinweis, beides gibt es nicht;
    `public/logo.svg` ist die Rose, kein eigenes Logo.
- Die offenen Fragen stehen je Briefing in Abschnitt 5.

### 14.09.2026, Antworten von Benedict auf die Briefings

- **Icons:** Phosphor ist auch für den Stadtrat in Ordnung (vorläufig). Der Stadt-Prototyp
  importiert 156 verschiedene Phosphor-Icons in 67 Dateien, meist im Gewicht `regular`.
- **Doppelte Rose:** Die Rose als Logo-Platzhalter neben der Rose von „moosburg.eu“ ist bis zu
  den Tool-Logos kein Problem.
- **Vorschau unter `/v2/`** gibt es nur beim Haushalt; der Data Hub wird lokal geprüft.
- **Portal, mehrere Farbflächen auf einer Seite:** Vorbild ist die Startseite des
  Stadt-Prototyps. Dort folgen Creme, Gold-100, Creme-dunkel, Tinte (Veranstaltungen, mit
  Stripe als Abschluss), Creme (Wort des Bürgermeisters) und Creme-dunkel aufeinander, der
  Fuß ist `red-900`; dunkle Flächen stehen nie direkt beieinander. Fürs Portal wird „In eigener
  Sache“ ein Einschub in Tinte mit dem Ton eines Vorworts, zwischen „Aktive Tools“ und
  „Archiv“. Tinte ist damit ein siebter Flächenton neben den sechs Themenfarben; Kontrast von
  Hand gerechnet (Creme etwa 15,9:1, Gold-200 etwa 11,8:1), noch nicht in `kontrast.mjs`.

### 14.09.2026, zweite Antwort von Benedict

- **Ablauf der Proben:** erst lokal prüfen, nach Freigabe direkt in `main` mergen. Keine
  öffentliche Vorschau außer `/v2/` im Haushalt.
- **Portal:**
  - „Werkstatt“ wird die Handschrift über dem Titel, das Etikett entfällt.
  - „Über das Projekt“ als Panel wie im Haushalt, mit einem Eintrag, der zur ausführlichen
    Erklärung („In eigener Sache“) führt.
  - Das Archiv kommt vor die Erklärung. Damit stößt der Einschub in Tinte direkt an den Fuß;
    eine bewusste Abweichung von „eine Fläche pro Bildschirm“, der Stripe bildet die Naht.
    Die vorige Positionierung zwischen „Aktive Tools“ und „Archiv“ ist damit überholt.
  - Der Fuß darf, ähnlich wie im Website-Konzept, dunkler werden. Befund: Der Fuß des
    Stadt-Prototyps ist ebenfalls `red-900`; dunkler wirkt er durch Stripe oben und
    Wappen-Wasserzeichen. Das Briefing verlangt ein Paar: `red-900` mit Wasserzeichen gegen
    einen tieferen Ton, Vorschlag `#52060f` (Creme etwa 14,1:1, Gold-200 etwa 10,4:1, von
    Hand gerechnet).
- **Stadtrat und Data Hub:** Dort darf mit anderen Flächenfarben aus den Themenfarben
  experimentiert werden. Beide Briefings haben dafür einen Abschnitt.
- **Push:** freigegeben zu einem sinnvollen Zeitpunkt.

### 14.09.2026, Probe auf der Portalseite umgesetzt

**Vorläufig und nur für die Portalseite.** Keine Entscheidung ist dadurch endgültig oder im
Kanon.

- **Wo:** Branch `probe/formsprache` in moosburg-eu, Commits `5ebf321`, `59a661a`, `7933f92`,
  `04799b7`, `23557e1`, `33f97c5`. Lokal, nicht gepusht; nach Freigabe Merge in `main`.
- **Auswertung:** `../moosburg-eu/docs/formsprache-probe/ERGEBNIS.md`, mit Kontrastwerten,
  Screenshot-Paaren und dem Abschnitt „Ohne Build-Step gelernt“ für den Stadtrat.
- **Abweichungen:** Panel ohne den Hinweissatz, weil er auf dem Portal schon in der Kopfzeile
  steht; Rose der Wortmarke als Maske statt Inline-SVG; Federzeichnung erst ab 64 rem;
  Beschreibungen noch nicht gekürzt.
- **Beim Bauen gelernt:**
  - Das letzte Stripe-Segment (`#1a1a1a`) verschwindet auf Tinte (`#1c1c1c`).
  - Tinte gegen `red-900` erreicht 1,38:1, gegen `#52060f` 1,13:1; die Naht zwischen Einschub
    und Fuß trägt nur der Stripe.
  - Eine Federzeichnung in Gold mit 30 % kreuzt zwischen 44 und 64 rem Titel und Lead; in
    Gold braucht sie eine höhere Ausblende-Grenze als in Tinte.
  - Die Rose als Status erreicht in `gold-600` 3,81:1, in `gold-500` 2,62:1.
- **Offen für Benedict:** Fußton, Stripe am Einschub, Zeichnung Gold oder Tinte, Rose
  `gold-500` oder `gold-600`, „ein Wort“, Tinte als Flächenton, neue Texte, Merge.

### 14.09.2026, Entscheidungen zur Portal-Probe und Merge

- **Farbflächen:** Rot und Tinte getauscht. „In eigener Sache“ steht im tiefen Rot
  `#52060f`, der Fuß darunter in Tinte. Beide Töne sind damit Flächentöne der Probe, nicht
  im Kanon; Kontrast in `../moosburg-eu/docs/formsprache-probe/ERGEBNIS.md`.
- **Wappen nur im Website-Konzept.** In allen Anwendungen auf moosburg.eu ist das
  Wasserzeichen die reine Rose, etwa halb über den Rand gesetzt wie das Wappen im
  Website-Konzept. Das gilt auch für die Proben in Stadtrat und Data Hub.
- **Rose als Status in `gold-600`** statt `gold-500`. Folgearbeit: Die Haushalt-Probe setzt
  `RoseStatus` noch in `gold-500`.
- Federzeichnung in Gold, Handschrift „ein Wort“ und die Beschreibungen in einem Satz sind
  übernommen; beim Website-Konzept bleibt „kein amtlicher Auftritt“ als Metazeile.
- **Merge:** `probe/formsprache` ist in `main` von moosburg-eu gemergt und damit live.

### 15.09.2026, Probe im Stadtrat umgesetzt

**Vorläufig und nur für den Stadtrat.** Nichts davon ist im Kanon.

- **Wo:** Branch `probe/formsprache` in council, neun Commits von `5f80836` bis `1068ee2`,
  lokal, nicht gemergt.
- **Umgesetzt:** AP 1 bis 8 des Briefings (Phosphor, Familienschriften, Satzschreibung,
  Kategoriezeile mit Klecks, heller Kopf nach Navigation A, Chip-Zeile mit Blatt, Fläche
  nächste Sitzung, Ecken 10 und 4 px).
- **Vorlage der offenen Fragen:** „Beschlussvorlage Stadtrat-Probe“,
  https://claude.ai/artifact/3pZ2PBGcT5tRp7QC5QKUKd, zwölf Tagesordnungspunkte mit allen
  Vergleichsbildern. Bleibt als Archiv der verworfenen Varianten stehen.
- **Beim Bauen gefunden:**
  - Ab dem zweiten Thema war der Themen-Chip in einer Karte ein verschachtelter Link
    (`.map(categoryChip)` gab den Index als `asLink` weiter); behoben.
  - `termine.json` wurde von der App nicht geladen.
  - Der Kontakt-Text behauptete, alle Ergebnisse entsprächen den Niederschriften, obwohl
    Einzelstimmen auch aus Presse und Mitschrift stammen.
  - Eine vierte einseitige Kante: `.sheet-event` im Kalenderblatt trägt die Gremienfarbe.
  - Jede Flächenfarbe kollidiert auf Fraktionsseiten mit einer Parteifarbe (Tiefrot mit SPD,
    Nachtblau mit AfD und UMB, Aubergine mit Linke).

### 15.09.2026, Entscheidungen von Benedict zur Stadtrat-Probe

- **Aktive Zustände in Rot** (`red-700` auf `red-50`).
- **Kategoriezeile mit farbigem Text**, wie im Protokoll.
- **Handschrift-Wörter** „nachvollziehbar“ (Themen), „öffentlich“ (Kalender), „gewählt“
  (Gremien), auch mobil.
- **Federzeichnung `rathausC`**, nur auf der Themen-Übersicht, ab 1280 px.
- **Nächste Sitzung** als Card mit deckender Farbe oben im Kalender; die kompakte Zeile auf
  der Startseite entfällt. Farbe hängt an der offenen Frage zu Bereichsfarben.
- **Icons für Merkmale und Funktionen:** `Rainbow`, `GenderFemale`, `GlobeHemisphereWest`,
  `Wheelchair`, `Megaphone` (noch nicht befriedigend), `UsersThree`, `Gavel`,
  `BuildingOffice` oder `Factory` (gebaut: `BuildingOffice`).
- **Texte** für Über das Projekt, Einstellungen und Kontakt übernommen, mit
  „Stadtverwaltung“ statt „Geschäftsstelle des Stadtrats“, die es nicht gibt.
- **Klecks am Handy über dem Titel**, am Desktop daneben.
- **Kanten an `.faction-move` und `.sheet-event`** bleiben als Datenmarken.
- **Null mit Schrägstrich** in Ordnung.
- **Offen: Bereichsfarben.** Rückmeldung dazu:
  - Der Klecks soll ein wiederkehrendes Element werden, am sinnvollsten bei den Themen.
  - Farbflächen nur über die ganze Breite oder gar nicht. Eine Card mit deckender Farbe passt
    für Hervorgehobenes wie den nächsten Termin, nicht für Seitenköpfe.
  - **Der Stripe ist überstrapaziert.** Steht er oben im Kopf, dann nicht noch als Abschluss
    einer Zwischenebene. Gilt als Hinweis für alle Projekte und stellt die Zeile
    „Stripe als unterer Abschluss“ der Farbflächen in Abschnitt 4 infrage.
  - Idee: Listen-Elemente eines Themas ragen teilweise in die farbige Fläche hinein.
  - Parteiseiten: ausnahmsweise mit der Parteifarbe oder ohne Fläche.
- **Offen: Gremien als Kategoriezeile** (Erläuterung erbeten) und **Ecken**: 10 px wirken
  tendenziell zu rund.

---

## 4. Vorläufige Entscheidungen vom 14.09.2026

| Thema | Entscheidung | Werte und Details |
|---|---|---|
| Titelschrift | **Source Serif 4** | Adobe, OFL, optische Größen 8 bis 60, Stärken 200 bis 900. npm: `@fontsource-variable/source-serif-4` 5.3.0. Die Datei mit `opsz` und `wght` nutzen. Ziffern mit `lining-nums`. |
| Textschrift | **Atkinson Hyperlegible Next** | Braille Institute, OFL, Stärken 200 bis 800. npm: `@fontsource-variable/atkinson-hyperlegible-next` 5.3.0. Null mit Schrägstrich, auch in Jahreszahlen: offen, ob gewünscht. |
| Handschrift | **Madelon Script** (wie heute) | Datei nur in `../moosburg/public/fonts/`. Lizenz nicht dokumentiert (Datei: „Ferdiansyah ijemrockart Studio, All rights reserved“): **offen**. Ersatz mit gleichem Charakter: Ms Madi (OFL). |
| Versalien | **mehrheitlich keine** | Seitentitel höchstens ausnahmsweise, h2 und tiefer nie; Navigation, Buttons, Labels, Kennzahlen in Satzschreibung. Ausnahme mit Charakter: Stempel-Status (nicht gewählt). |
| Kategorien | **Variante C: Farbklecks mit Kategoriezeile** | Kategoriezeile: Icon 16 px plus Text 14 px, 600, Satzschreibung, Kategoriefarbe. Klecks: 46 px (38 px dicht), SVG `viewBox 0 0 48 48`, Pfad `M25 3.5c8.6.3 17.8 5.2 19.2 14.6 1.5 9.8-4 21.5-14.4 24.9C19.7 46.3 6.6 41.5 4.3 30.7 2 19.6 12.2 3 25 3.5z`, Varianten durch Drehung 70° bzw. 150° gespiegelt; Fläche helle Tönung, Icon dunkle Tönung der Kategoriefarbe. Farben im Artefakt: Rot (`red-700`/`red-100`), Gold (`gold-700`/`gold-200`), Purpur (`#6b3e7a`/`#e2d2e8`). |
| Data-Hub-Kacheln | **Vorschlag übernommen** | Klecks plus Kategoriezeile oben, Titel in Titelschrift, Anzahl als eigene Zeile unten über einer Haarlinie (Zahl groß in Titelschrift, Einheit daneben). Pergamentgrund für amtliche Statistik bleibt. |
| Kacheln und Einträge | **Vorschlag übernommen** | Desktop: Kacheln (weiß, 1 px Linie, Radius 10), Klecks statt getöntem Quadrat, Etikett über der Überschrift bleibt, wo es etwas anderes sagt. Einträge auf moosburg.eu bleiben ohne Rahmen. |
| Schmale Screens („In zwei Klicks zum Ziel“) | **Register-Variante** | Einträge ohne Rahmen, Haarlinien, Klecks links, Titel plus Unterzeile, Pfeil rechts. |
| Handschrift-Überlappung | **Variante 1: wie heute, in Satzschreibung** | Script groß (etwa 1,45 × Überschrift), `gold-500` mit etwa 55 % Deckkraft, hinter der Überschrift, −6°, `aria-hidden`. Etikett darüber mit genug Abstand, damit das Script es nicht kreuzt. |
| Notizen | bestätigt | Handschrift in `gold-700`, Pfeil in `gold-500`, zeigen auf eine konkrete Stelle, höchstens eine pro Bildschirm. |
| Seitenköpfe | **Vorschlag übernommen** | Mobil Titel oben links. Desktop: großer Titel mit Überlappung, Federzeichnung (`sketches/*.svg`) als Maske in Gold im Anschnitt, Platz für Tool-Logo (bis dahin Rose). |
| Farbflächen | **übernommen** | Dunkle Fläche, Creme-Schrift; Etikett, große Zahl und Handschrift `gold-200`; Zeichnung Creme mit geringer Deckkraft; Stripe als unterer Abschluss; höchstens eine pro Bildschirm. |
| Themenfarben | **übernommen** | Tiefrot `#6d0818` (= red-900), Tannengrün `#1f3b2d`, Isar-Petrol `#123b4a`, Erdbraun `#4a2a17`, Nachtblau `#26295e`, Aubergine `#3f2248`; jede ein abgedunkeltes Stripe-Segment bzw. der Purpur-Akzent. Gold-700 als Fläche gibt es im Prototyp schon. Kontrast siehe Abschnitt 6. |
| Status | **Rose** | Rose in Zustandsfarbe plus Wort: Rot „online“, Gold „Vorschau“, verblasst (45 %) „Archiv“. Das Wort steht immer dabei. |
| Navigation | **Variante A, alles in einer Zeile** | Stripe 4 px an der Oberkante; Zeile 64 px: Eintrag „moosburg.eu“ mit Rose, Trennlinie, Logo-Platz, Tool-Name in Titelschrift, Tool-Navigation rechts in Satzschreibung (aktiv 600 und 2 px Unterstreichung), Trennlinie, „Über das Projekt“ als Disclosure mit Beschreibung, Hinweis „Privates Projekt, kein Auftritt der Stadt“, Datenquelle, Kontakt, Impressum und Datenschutz, Quellcode. Gilt für alle Projekte außer Sitzungstool und Website-Konzept. Mobil: beide Einträge hinter der Rose in der App-Leiste. |
| Sitzungstool | **Kompromiss** | Phosphor-Icons, Familienschriften, flaches Rot statt Verlauf; bleibt außerhalb der Familien-Navigation. |
| Zahlen | **Vorschlag übernommen** | Überall `font-variant-numeric: lining-nums tabular-nums` für Kennzahlen; Zahl zuerst, Beschriftung darunter in Satzschreibung. |
| Gefundene Fehler | **werden korrigiert** | siehe Abschnitt 7 |

### Aus Runde 2 bestätigt, ohne dass eine Variante zu wählen war

- **Suche:** einheitlich, Radius 10 px, statt Pille.
- **Ecken:** 4 px für Marken und Kleinteile, 10 px für Kacheln, Buttons, Suche, Flächen;
  Pille nur für Chips und Tab-Markierung.
- **Tab-Leiste unten:** in Projekten mit mehreren Tabs (Stadtrat, Haushalt,
  Stadt-Prototyp); Beschriftung plus Pillen-Markierung; ab 1024 px Navigation im Kopf.
- **Chips:** als seitlich scrollbare Zeile, im Stadtrat mit Knopf „Alle Themen“ (Versuch).
- **Buttons:** drei Stufen (primär, tonal, Text-Link).
- **Segmente:** wie im Artefakt.
- **Beschreibungen:** Titel plus genau ein Satz.
- **Icon-Set:** Phosphor (im Stadt-Prototyp schon genutzt); ausdrücklich entschieden für das
  Sitzungstool, am 14.09.2026 vorläufig auch für den Stadtrat.

## 5. Geparkt, nicht verworfen

Stehen eingeklappt und markiert in der Vorschlagsseite.

- Überschriften grundsätzlich ohne Etikett; nackte Metazeile unter dem Titel
- Handschrift nur als Randnotiz statt Überlappung („Servus in“ statt Etikett)
- gruppierte Liste statt Kacheln; Portal-Einträge in einer Karte
- Status als Punkt plus Wort
- 12 px Ecken, Suche als Pille
- Versalien in der H1 als Standard
- Ein Kopf für alle, erste Fassung (ohne Familien-Einträge, ohne Ausnahmen)
- Schriften der ersten Runde: Besley, Newsreader, Ultra, Schibsted Grotesk; ebenso die
  Empfehlungen der zweiten Runde Playfair (2.0), Ms Madi (als Hauptwahl), Inclusive Sans
- nicht gewählte Varianten: Kategorien A und B, Mini-Kacheln, Überlappung 2 und 3, Status
  Stempel, Handschrift, Stripe, Navigation B

### Aus der Stadtrat-Probe (15.09.2026)

Bilder aller Varianten in der „Beschlussvorlage Stadtrat-Probe“
(https://claude.ai/artifact/3pZ2PBGcT5tRp7QC5QKUKd). Die Varianten waren eingespritztes CSS
auf dem gebauten Stand, die Werte stehen hier, damit sie sich wieder herstellen lassen.

- **Aktive Zustände in Tinte:** gewählter Chip `cream-dark` mit Tinte-Schrift, Kopf-Tab mit
  Unterstrich in Tinte, Tab-Pille `cream-dark`. Wirkte am Handy zu leise.
- **Kategoriezeile nur mit farbigem Icon**, Text in `--text-muted` (`#6F6F6F`). Ruhiger bei
  mehreren Themen je Karte.
- **Bereichsfarbe als abgerundete Karte im Seitenkopf** der Detailseiten (Variante 2 des
  Briefings): Fläche mit 10 px Radius, Titel Creme, Metazeile Gold-200, Stripe als
  Abschluss. Getestet: Themenfeld in Tiefrot, Nachtblau, Aubergine; Sitzung in Gold-700,
  Tiefrot, Nachtblau, Aubergine; Fraktion in Tiefrot, Nachtblau, Aubergine. Verworfen in
  dieser Form (nicht über die ganze Breite, Stripe doppelt); die Frage nach Bereichsfarben
  ist weiter offen.
- **Handschrift mobil ausgeblendet**, Seitentitel mit 12 px Abstand darüber.
- **Nächste Sitzung als kompakte Zeile auf der Startseite:** eine Zeile in der Flächenfarbe
  über „Zahlen zum Bestand“, „Nächste Sitzung“ in Gold-200, dann „Mo., 28. Sept., 18:00 Uhr,
  Stadtrat“ und Pfeil. Gebaut in council `040b258`, wieder entfernt.
- **Fläche nächste Sitzung** in Tiefrot und Nachtblau (gebaut war Gold-700).
- **Icon-Alternativen:** LGBTQ+ `GenderNonbinary`, `Heart`; FLINTA `GenderTransgender`
  (erster Vorschlag), `GenderIntersex`; Migrantisch `Globe`, `AirplaneTilt`; Barrierefrei
  `PersonSimpleCircle`, `HandHeart`; Referent/in `Microphone`, `ChatCircleText`; Ausschuss
  `Users` (erster Vorschlag), `UsersFour`; Vorsitz `Crown`, `Star`; Aufsichtsrat
  `Briefcase` (erster Vorschlag), `Buildings`, `Factory`.

## 6. Werte, die schon nachgerechnet sind

Kontrast nach WCAG 2.1 (Formel wie `scripts/kontrast.mjs`), am 14.09.2026 von Hand
gerechnet, **noch nicht** in `kontrast.mjs` eingetragen:

| Fläche | Creme `#faf7f2` | Gold-200 `#e8d5a3` | Gold-500 `#b8964e` |
|---|---|---|---|
| Tiefrot `#6d0818` | 11,6:1 | 8,5:1 | 4,4:1 |
| Tannengrün `#1f3b2d` | 11,4:1 | 8,4:1 | 4,4:1 |
| Isar-Petrol `#123b4a` | 11,2:1 | 8,3:1 | 4,3:1 |
| Erdbraun `#4a2a17` | 12,1:1 | 8,9:1 | 4,6:1 |
| Nachtblau `#26295e` | 12,6:1 | 9,3:1 | 4,8:1 |
| Aubergine `#3f2248` | 12,8:1 | 9,4:1 | 4,9:1 |

Dunkelmodus (weiter verfolgt, nicht entschieden), Vorschlag aus Runde 1:

- Grund `#171412`, Fläche `#221e1a`
- Schrift `#f3eee6`, Nebentext `#a39a8d` (5,9:1 auf Fläche)
- Rot als Text `#f28b98` (7,8:1), Rot als Fläche bleibt `#c8102e`
- Handschrift `#e8d5a3`

## 7. Gefundene Fehler und Folgearbeiten je Repo

| Repo | Fehler | Stand |
|---|---|---|
| haushaltvis | Achse schneidet „120 Mio. €“ zu „20 Mio. €“ ab (`grid.left` fest); gleiche Bauart in Einnahmen, Querschnitte, Timeline, Investitionen | im Probe-Briefing, AP 4 |
| haushaltvis | einseitige Kantenakzente (`Home.tsx`, `Themen.tsx`, `intern/ThemenVorschau.tsx`; farbige Oberkanten in Einzelplan und Querschnitte) | im Probe-Briefing, AP 4 |
| haushaltvis | Playfair-Mediävalziffern in Kennzahlen | im Probe-Briefing, AP 3 |
| datahub | „1,656 Antworten“ mit englischem Tausendertrenner neben „2.868.813“ | im Briefing Data Hub, AP 2 |
| datahub | Fußzeile nennt „Data Hub der Stadt Moosburg“, das Portal betont „kein Auftritt der Stadt“ | offen, inhaltlich mit Benedict klären; im Briefing Data Hub, AP 7 |
| datahub | Über-Seite verspricht Download und Methodik-Hinweis, beides gibt es nicht | offen, im Briefing Data Hub, AP 7 |
| datahub | acht Diagramme tragen „Inter Variable“ fest ein | im Briefing Data Hub, AP 1 |
| council-voting-tool | Namen im Sitzring liegen unter den Kreisen („Dick“, „Marschoun“) | offen |
| council-voting-tool | Noto-Schriften, roter Verlauf im Kopf | Kompromiss entschieden, offen |
| moosburg | einseitiger Kantenakzent `border-l-4` in `src/pages/HubPage.tsx:80` | offen |
| moosburg | Geschichtsseite: Script „Erinnerung“ kreuzt das Etikett „Zu Besuch“ | offen, wird mit Überlappung Variante 1 plus Abstand gelöst |
| moosburg-eu (Portal) | Zwischenüberschriften „Aktive Tools“, „Archiv“ gut 25 px eingerückt, in Versalien | im Briefing Portal, AP 2 und AP 4 |
| council | Tab-Leiste am Desktop über volle Breite; Lucide-Sprite statt Phosphor (bis 14.09. hier fälschlich „Material Symbols“, die IDs tragen noch Material-Namen) | im Briefing Stadtrat, AP 1 und AP 6 |
| council | einseitiger Kantenakzent an `.source-note` (3 px Gold) | im Briefing Stadtrat, AP 8 |
| council | Einstellungen und Kontakt sprechen als Angebot der Stadt („Ratsinformationssystem der Stadt“, „Geschäftsstelle des Stadtrats“) | offen, inhaltlich mit Benedict klären; im Briefing Stadtrat, AP 6 |

## 8. Rahmenbedingungen für die Umsetzung in den Kanon

- **Vorher taggen und pinnen** (siehe `OFFENE-PUNKTE.md` dieses Repos): Die fünf
  Vite-Projekte hängen ungepinnt an `main`. Eine Schriftänderung in `theme.css` landete
  sonst beim nächsten `pnpm install` unbemerkt überall.
- **Schriftpakete** kommen gleichzeitig in alle Repos und in `../hausbasis/baseline.json`;
  nie ein Repo allein hochziehen.
- Neue Flächentöne und Dunkelmodus-Tokens bekommen ihre Paare in `scripts/kontrast.mjs`,
  bevor sie genutzt werden.
- **Textstimme:** keine Gedankenstriche in neuem Text; Bestand nicht massenhaft umschreiben.
- Anwendungsprofile (Auftritt, Werkzeug) bleiben; das Werkzeug-Profil darf dichter und
  schlichter sein, aber nicht fremd.

## 9. Recherche-Notizen

**Schriften, geprüft am 14.09.2026:**

- Alle Kandidaten wurden nebeneinander gesetzt und auf Umlaute, ß und € geprüft.
- **Amdal** (Velvetyne): Umlaute, ß und € fehlen, für Deutsch nicht nutzbar.
- **Galatia SIL:** kein €.
- Doulos SIL, Galatia SIL, Eeyek, Ponomar und Content sind Schriften für andere
  Schriftsysteme mit Times-artigem bzw. schreibmaschinenhaftem lateinischem Teil.
- **Allkin** (Monotype 2025): breit, schreibmaschinenhaft.
- **Sneaky Times** (Collletttivo): Times mit verschobenen Details.
- Nah an Playfair und zugleich ruhig: Playfair (2.0), Source Serif 4, Frank Ruhl Libre,
  Libre Bodoni, Gloock.
- Zu fein unter 24 px: Bodoni Moda, Noto Serif Display, Gilda Display, Libre Caslon
  Display, Bellefair, Cormorant Garamond.
- **Lizenzen:** SF Burlington Script (Inspiration) verbietet jede Bearbeitung, auch
  woff2-Subsetting; Open Script ohne Hersteller- und Lizenzangabe.
- **Handschrift über Überschriften:** Dünne, gleichmäßige Striche (Madelon, Ms Madi,
  Sacramento) lassen die Überschrift lesbar; kräftige (Satisfy, Yellowtail, Great Vibes)
  decken zu.

**Barrierefreie Textschriften:** Unabhängige Studien finden für Schriften, die speziell für
Legasthenie beworben werden, meist keinen Vorteil gegenüber gut gesetzten Standardschriften.
Was hilft, ist der Satz: etwas Laufweite, Zeilenabstand ab 1,5, 45 bis 75 Zeichen pro
Zeile, linksbündig, Kontrast ab 4,5:1. Atkinson Hyperlegible adressiert konkret verwechselbare
Zeichen für Menschen mit Sehschwäche und ist deshalb am besten begründbar.
Quelle: https://fontalternatives.com/blog/best-free-accessible-fonts-dyslexia-low-vision/

**Referenz-Apps** (Screenshots in `../moosburg-eu/inspiration/`): Threads, Telegram,
Signal, Threema, Instagram, DB Navigator, MVGO, Play Store, Discord. Gemeinsame Grammatik:

- Abschnittsüberschriften als schlichter Satz ohne Etikett
- Hierarchie über Größe und Gewicht
- Suche prominent
- gruppierte Einstellungszeilen
- Tab-Leiste unten mit Beschriftung und Pillen-Markierung
- großer Seitentitel oben links
- Segmente, Chips
- ein Primärbutton, tonale Sekundärbuttons
