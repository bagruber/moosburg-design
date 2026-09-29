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

### 15.09.2026, zweite Lesung zur Stadtrat-Probe

Vorlage: „Zweite Lesung Stadtrat-Probe“, https://claude.ai/artifact/CjfKtaZwwokhbZsCd2p5wk.

- **Kein Klecks in den Themenkarten.** Idee für später: Themen könnten eine eigene
  Federzeichnung (Ink-Art) bekommen.
- **Themenfeld mit Band** über die ganze Breite im tiefen Ton der Themenfarbe (60 %
  abgedunkelt, Creme darauf mindestens 8,4:1), die Dossier-Karten ragen 72 px hinein, kein
  Stripe. Gebaut.
- **Dossier ohne Band.** Die Farbgebung erschlösse sich nicht, und der Zeitstrahl ist keine
  Auflistung, sondern braucht Fluss.
- **Sitzung mit Band**, aber nach einem festen Schema je Gremium; öffentlich tagen nur
  Stadtrat, BPU und HVFA. Welches Schema, ist offen. Gebaut ist die Ableitung aus den
  Gremienfarben von Kalender und Diagrammen: Stadtrat Tiefrot, BPU Erdbraun, HVFA Nachtblau.
  Die Termin-Card nimmt die Farbe ihres Gremiums.
- **Fraktion ohne Fläche.**
- **Termin-Card ohne Stripe.**
- **Ecken:** Benedict schlägt vor, das 10-px-Token im Kanon auf 8 px zu senken. In der Probe
  als Überschreibung gesetzt. Der Kanon ist noch nicht geändert: `--radius-xl` steht in
  `css/theme.css`, daran hängen auch die rund 100 `rounded-xl` im Stadt-Prototyp.
- **Gremium als Kategoriezeile: ja.** Ohne farbigen Seitenstrich an den Einträgen, der wirkt
  wie ein generiertes Klischee. Ohne Wiederholung: Steht das Gremium in der Zeile, folgt
  darunter nur „N. Sitzung“ und das Datum. Gebaut im Kalenderblatt und im Sitzungskopf.

### 16./17.09.2026, erste Lesung Data Hub

Vorlage: „Data Hub, erste Lesung“, https://claude.ai/artifact/7yJQBjHVUt2bakmAsVmTXY.
Umfang auf Benedicts Ansage: Übersicht, die beiden öffentlichen Umfragen (Bahnhof 2023,
Volksfest 2024), Bevölkerungsstatistik 2022. Wahlergebnisse, Baumkarte, Moosburg
historisch und Speisekarten laufen getrennt. Gebaut ist nichts.

Entschieden (Punkt 1 bis 7 und 12 jeweils Variante A):

- **Kopf der Übersicht:** Handschrift „nachgefragt“, Federzeichnung `buechereiA` in Gold
  ab 1280 px, rechts unten angeschnitten. Etikett „Data Hub“ über der H1 fällt weg.
- **Klecks auf den Kacheln bleibt** (46 px), zusammen mit der Kategoriezeile. Die
  Stadtrat-Regel „Klecks nur in Köpfen“ meint Listen innerhalb einer Seite, nicht die
  Kacheln der Übersicht.
- **Alle drei Herkunftsarten behalten** ihren Grund: weiß für Umfragen, Pergament für
  amtliche Statistik, Schraffur für eigene Auswertungen.
- **Anzahl-Zeile** unten über einer Haarlinie. Bei den Karten-Kacheln wird der Restsatz
  nicht gestrichen, sondern steht als ein Satz über der Zahl.
- **Kein Aufmacher auf der Übersicht.** Die Farbe sitzt in den Köpfen der Datensatzseiten.
- **Kopf der Datensatzseiten als Band** über die ganze Breite in der Themenfarbe, dunkler
  Ton: Bahnhof Isar-Petrol `#123b4a`, Volksfest Tiefrot `#6d0818`, Bevölkerungsstatistik
  Gold-700 `#6e5a30`. Zuordnung als Konstante nach Datensatz-ID im Code, Tiefrot als
  Rückfall, keine neuen Felder im Manifest. Kennzahlen im Band, Zahl in Gold-200.
- **Kennzahlen als Zeile statt als Karten.** Die Quelle ist keine Kennzahl und wandert in
  die Kategoriezeile („Amtliche Statistik · Bayerisches Landesamt für Statistik“); die
  dritte Kennzahl der Statistikseite wird die Zahl der Datenpunkte.
- **„Kapitel N“ wird gestrichen.** Nachsatz Benedict: Bei längeren, vielfältigeren
  Datensätzen braucht es gelegentlich trotzdem eine Struktur; das löst die Orientierung,
  nicht die Zeile.
- **Die offenen Rückmeldungen werden angezeigt.** Der Abschnitt `open_themes` der
  Bahnhofumfrage (zehn ausgewertete Themen mit Titel, Beschreibung und Icon-Namen) wird
  als Register mit Klecks gebaut. Bisher zeigte die Seite dort den Platzhalter „Für diesen
  Abschnitt liegen noch keine Visualisierungen vor.“
- **Tuschezeichnung je Datensatz: ja.** Motive werden zuerst ausgewählt, Benedict legt die
  Zeichnungen nach. Technik wie im Portal-Einschub: WebP, die das Bild allein im
  Alphakanal trägt, dunkel auf der Fläche eingefärbt.
- **moosburg.org ist ein Fehler** und fällt aus dem Fuß. Der Weg zurück auf moosburg.eu
  steht wie in den anderen Anwendungen rechts oben im Info-Panel.
- **Rot bleibt Rot für Bedienung und Links**, aber die Filterauswahl geht nicht auf Tinte:
  ausgeblasstes gegen kräftiges Gold. Werte in der zweiten Lesung.

### 17.09.2026, zweite Lesung Data Hub

Vorlage: „Data Hub, zweite Lesung“, https://claude.ai/artifact/K7x9KzUVvjAkREAmkvehPR.
Vier Punkte vorgelegt, Antworten stehen aus:

- **Orientierung:** Kapitelzeile in der klebenden Leiste (erscheint erst nach dem Kopf, auf Seiten ohne Filter trägt sie allein), gegen Sprungleiste als Chips und Marke am linken Rand.
- **Filter am Handy:** klebend und aufklappbar in beiden Varianten; eingeklappt entweder Zustand plus gesetzte Filter als Chips oder die wichtigste Kategorie als Chip-Zeile.
- **Goldtöne** statt Rot für die Filterauswahl, nachgerechnet auf Weiß: Gold-200 1,45:1, heutiges `#b39f7a` 2,57:1, Gold-500 2,80:1, Gold-600 4,07:1, Gold-700 6,63:1. Vorgeschlagen Gold-500 ruhig gegen Gold-700 gewählt plus 2 px Grundstrich (Trennung 2,37:1; der heutige Sprung Gold auf Rot trennt mit 2,29:1). Dann kann `--color-gold-400: #b39f7a` aus dem Data Hub verschwinden.
- **Motive:** Übersicht `buechereiA` (vorhanden), Bahnhof Bahnsteig mit Schranke und Abgang zur Unterführung, Volksfest Festzelt mit Riesenrad, Bevölkerungsstatistik eine Häuserzeile ohne Kirche. Benedict zeichnet, Lieferformat quadratisch ab 2000 px, reine Strichzeichnung, Motiv links im Blatt.


Gefundene Fehler im Data Hub stehen in Abschnitt 7.

### 17.09.2026, Antworten zur zweiten Lesung und dritte Lesung Data Hub

Vorlage: „Data Hub, dritte Lesung“, https://claude.ai/artifact/D8g4dAkGrFwFzDtMyqtHjT.

Entschieden:

- **Filterbalken in zwei Goldtönen** (Punkt 11 A): ruhig Gold-500 `#b8964e`, gewählt
  Gold-700 `#6e5a30`, dazu 2 px Grundstrich unter dem gewählten Balken, damit die Auswahl
  nicht allein an der Farbe hängt. Rot fällt an dieser Stelle weg, der app-eigene Ton
  `--color-gold-400: #b39f7a` im Data Hub ebenfalls. Dieselben Töne tragen die Filterknöpfe
  und die Balken in der Auswahlliste.
- **Zeichnungen beginnen mit dem Bahnhof** (Punkt 13): Bahnsteig mit Schranke und Abgang
  zur Unterführung. Volksfest und Bevölkerungsstatistik folgen, wenn die erste im Band steht.

Zurückgewiesen und neu gestellt:

- **Orientierung (Punkt 9):** Weder die Kapitelzeile mit Aufklappliste noch die Sprungleiste
  als Chips. Benedicts Entwurf: Kapitelname in der Mitte, Pfeile links und rechts. Als
  Stepper ausgearbeitet, offen sind Ort (oben in der klebenden Leiste oder am Handy unten am
  Daumen) und ob der Name zusätzlich die Kapitelliste öffnet.
- **Filter am Handy (Punkt 10):** Weder Zustandszeile noch Chip-Zeile. Benedicts Entwurf:
  zwei bis drei Kategorien als dauerhaft sichtbare Knöpfe, die eine Auswahlliste öffnen, mit
  den Balken als kleinem Element in der Liste. Ausgearbeitet mit echten Zahlen; offen ist,
  ob der Balken als eigene Spalte oder als Zeilenhintergrund steht.

Nebenbefund aus dem Zählen: In der Bahnhofumfrage haben 314 von 1.656 Antworten keine
Altersgruppe, 643 keinen Wohnort, 650 keine Nutzungshäufigkeit. Heute verschweigt die
Filterleiste das. Vorgeschlagen ist „ohne Angabe“ als eigene, abgesetzte Zeile in der
Auswahlliste.

### 17.09.2026, Antworten zur dritten Lesung; Briefing Data Hub neu geschrieben

- **Stepper (Punkt 9):** Die Pfeile springen zur nächsten Kapitelüberschrift, mehr nicht.
  Kein Aufklappen am Namen; für den direkten Sprung gibt es das nicht klebende
  Inhaltsverzeichnis unter dem Kopf. Ausdrücklich vorläufig, wird am gebauten Stand noch
  einmal angesehen. Der Ort am Handy (oben in der Leiste oder unten am Daumen) bleibt offen,
  gebaut wird zunächst oben.
- **Auswahlliste (Punkt 10):** Variante B, der Balken als Hintergrund der Zeile. **„ohne
  Angabe“ ist ein Punkt wie jeder andere**: Die Breite skaliert auf das Maximum aller Zeilen
  einschließlich dieser, die größte Zeile bekommt die volle Breite. In der Bahnhofumfrage ist
  „ohne Angabe“ bei zwei von drei Filtern die größte Gruppe (314 ohne Altersgruppe, 643 ohne
  Wohnort, 650 ohne Nutzungshäufigkeit, bei 1.656 Antworten).

Damit ist die Vorbereitung abgeschlossen. `datahub/docs/briefing-formsprache.md` ist neu
geschrieben (datahub `a8b9c08`): neuer Umfang, alle Entscheidungen, AP 0 bis 13. Die
Wahlseite erbt die gemeinsamen Bausteine und bekommt vorläufig Nachtblau; entschieden ist das
nicht und gehört in die Wahl-Runde.

### 17.09.2026, Probe im Data Hub umgesetzt

Branch `probe/formsprache` in datahub, AP 0 bis 13, Commits `69f451a` bis `bd76522`.
Noch nicht gemergt, Freigabe steht aus. Auswertung: `../datahub/docs/formsprache-probe/ERGEBNIS.md`.

- Der Data Hub hing per Lockfile noch am Kanon-Stand vor `dd2f435`; nachgezogen, damit
  `rounded-xl` auch dort 8 px ist.
- Die Bahnhof-Zeichnung steht als Beispiel im Band und wird ersetzt, wenn die endgültige kommt.
- Auslegungen zum Ansehen: Kategoriezeile ohne Icon, wo ein Klecks daneben steht; Auswahlliste
  mit getöntem Zeilengrund wie in Attrappe B und Gold-500/Gold-700 als Grundstrich; „ohne
  Angabe“ als Index hinter der letzten Option, bestehende Filter-URLs bleiben gültig;
  moosburg.eu als erster Eintrag im Panel.
- Das Band in Gold-700 trägt Gold-200 nur mit 4,57:1, deutlich weniger als die dunklen
  Themenfarben.
- Gefunden: Das Weiterleitungs-Skript in `index.html` verschluckt Filter, deren Schlüssel auf
  „p“ endet (`age_group`); einseitige rote Kante am Hinweis der Hexmap (Wahl-Runde).

Entscheidungen bleiben vorläufig.

### 17./18.09.2026, Diagramme im Data Hub: drei Lesungen, entschieden

Vorlagen: [erste Lesung](https://claude.ai/artifact/GzS2QsS4DaGV81u9bpXdVd),
[zweite Lesung](https://claude.ai/artifact/NY9ombMSL1RtjmjxfP9nAa),
[dritte Lesung](https://claude.ai/artifact/RGoMTMAxdu8e6kBvNR7tRP). Gesichtet wurden 14
Diagrammtypen in fünf Datensätzen; Hexmap und Gremium der Wahlseite bleiben der Wahl-Runde.
Gebaut ist noch nichts.

**Farben, geprüft mit dem Palettenprüfer der Dataviz-Methode:**

- **Unterscheiden** (sechs Töne aus dem Stripe, in der Helligkeit angepasst): Rot `#c0041e`,
  Isar-Blau `#1196c1`, Gold `#ab821e`, Indigo `#525ab8`, Orange `#cc6c00`, Purpur `#8b569c`.
  Schwächstes Nachbarpaar ΔE 20,8 bei Farbschwäche; die ersten drei bestehen auch jeder gegen
  jeden. Grün `#0f994a` nur als siebter Ton, weil Rot neben Grün knapp trennt und wertet.
- **Werten** (Skalen, Korrelation), sechs Stufen: `#a21a20` `#ca5650` `#de958e` `#72b5d3`
  `#1b8cb3` `#00617f`; fünf Stufen mit warmem Grau `#d9d4ca` in der Mitte. Die heutige
  Rot-Grün-Rampe fällt durch (Stufe 3 gegen 4: ΔE 4,6).
- **Ordnen** (Preise, Wartezeiten), Gold: `#cfac64` `#b58f3c` `#99741b` `#7b5b01` `#5c4304`.
- Die Hexwerte in `public/data/*.json` werden künftig ignoriert; die Farbe entscheidet der Code.

**Elemente:** Titel in der Titelschrift mit Basiszeile (zählt mit den Filtern mit); Haarlinien
ohne Tickstriche, keine Werteachse wo beschriftet; Prozent ohne Leerzeichen, Korrelation als
„,24“; Legende als durchgehender Verlauf mit Kerbe, 11 bis 12 px; eigener Tooltip; Tabelle
aufklappbar wie im Haushalt; am Handy Beschriftung über dem Balken, Kopf und Legende mittig.

**Typen:** Balken und Säulen aufgeräumt (Säulen 70 % der Bandbreite); Anteilsbalken für
geordnete Antworten, Ring mit Liste daneben für ungeordnete; Venn bleibt und wird flächentreu
(zwei Mengen Kreise, drei Mengen Ellipsen, gerechnet statt konstruiert, größte Abweichung 0,09
von 189 Personen), Schnittmengen in Schraffur aus den Farben ihrer Mengen; Skalen mit Kerben
statt Mittellinie und mit dem arithmetischen Mittel als Punkt darunter, ebenso die Preise;
zwei Lager zentriert auf „beide oder keine Meinung“; Spinnennetz bleibt, eingeklappt
überlagert, ausgeklappt fünf einzelne Netze; Korrelation als halbe Matrix (Zahl ab ,30,
negativ ab −,20), am Handy mit Namen auf der Diagonale; Linien monoton statt Catmull-Rom,
damit keine Zwischenwerte erfunden werden; Alterspyramide feiner, ohne Geschlechterklischee.

**Handschriftliche Notizen** kommen in die Diagramme: von Hand im Datensatz gesetzt, dazu eine
Einstiegsnotiz an der Filterleiste beim ersten Besuch. Regeln wie am 14.09. festgelegt.

**Gefundene Fehler:** die Rot-Grün-Skala; Prozentwerte ohne Basis (Verkehrsmittel summieren
sich auf 143 %); geglättete Kurven, die zwischen Zählungen Werte erfinden; Korrelationsmatrix
und Spinnennetz am Handy unlesbar; Reste der alten Formsprache („ANTWORTEN“ in Versalien,
Achsentitel mit Pfeil).

### 18.09.2026, Diagramme im Data Hub umgesetzt

Branch `probe/diagramme` in datahub, abgezweigt von `probe/formsprache`, AP 1 bis 11.
Noch nicht gemergt, Freigabe steht aus. Auswertung:
`../datahub/docs/diagramme-probe/ERGEBNIS.md`.

- Farben liegen jetzt in `src/lib/palette.ts`; die Hexwerte der JSON-Dateien werden
  ignoriert. Für andere Projekte gilt dieselbe Aufteilung: unterscheiden, werten, ordnen.
- Neu gebaut: Basiszeile je Diagramm, aufklappbare Tabelle, Skalenleiste mit Kerbe,
  Mittelwert unter den Skalen, halbe Korrelationsmatrix, Spinnennetz zum Ausklappen,
  flächentreues Venn mit Ellipsen-Löser und Schraffur.
- **Berichtigung zur ersten Lesung:** Die Linien waren nie überschwingend geglättet,
  `LineSeries` nutzt seit jeher `monotone-x`.
- Offen und in die ETL-Runde verschoben, weil sie ein neues Feld in den JSON-Dateien
  brauchen: Anteilsbalken für geordnete Antworten und die handschriftlichen Notizen.
- Der Ellipsen-Löser braucht rund 200 ms, nicht „wenige Millisekunden“ wie in der
  dritten Lesung geschätzt.

### 19.09.2026, zweifarbige Zeichnungen, im Kanon notiert

Entstanden an der Aktionsseite „Pop-up Bahnhof“ (`moosburg-eu`, Bereich
`/aktionen/`), auf Benedicts Wunsch als Variante in den Kanon zurückgeschrieben.

**Die Technik.** Ein Blatt wird in **zwei Schablonen** zerlegt, eine für die
Tuschelinien, eine für die Farbflächen, deckungsgleich beschnitten. Beide liegen
als Maske übereinander, jede nimmt ihre Farbe aus einem Token. Getrennt wird über
Sättigung und Deckung, nicht über einen festen Farbwert:
`Deckung = clip((230 − Luma) / 170)`, `farbig = clip((Sättigung − 25) / 65)`, daraus
`Linien = Deckung × (1 − farbig)` und `Flächen = Deckung × farbig`. Als `LA`-WebP
mit Qualität 72 gespeichert, zusammen rund so groß wie eine einfarbige Zeichnung
(im ersten Fall 95 plus 28 KB). Ein `<img>` scheidet aus, es brächte seine Farben
mit und fiele aus dem Kanon.

**Die drei Varianten** (Werte in Abschnitt 6, geprüft von `scripts/kontrast.mjs`):

| Grund | Linien | Flächen |
|---|---|---|
| dunkle Fläche (Tiefrot, Petrol, Nachtblau …) | Gold-200 | Rot-500, Ton in Ton |
| Pergament Gold-100 | Gold-700 | Rot-500 |
| heller Grund (Creme, Weiß) | Tinte | Rot-500 |

**Die Regel dazu: Die Linien tragen das Bild, die Flächen schmücken es.** Auf
dunklem Grund liegt Rot-500 bei 2,1:1; das ist gewollt und hält die Fläche ruhig,
verlangt aber, dass die Linienebene für sich lesbar ist. **Weiß ist für die Linien
nicht vorgesehen** (Benedict, 19.09.2026): Es wirkt auf den Farbflächen hart, Gold
oder Beige gehören dorthin.

**Deckung.** Als Wasserzeichen bleibt es bei einer Ebene und 6 bis 9 Prozent. In
voller Deckung als Bild steht eine Zeichnung nur, wo eine Seite wirbt statt zu
informieren; bisher nur auf Aktionsseiten.

**Fürs Zeichnen:** die zweite Farbe als Fläche anlegen, nicht als dünne Linie,
sonst bleibt nach dem Trennen zu wenig übrig. Sonst gilt das Übliche: quadratisch
oder querformatig, mindestens 2000 px, reine Strichzeichnung, kein Rahmen, keine
Signatur.

Gezeigt wird das Ganze im Showcase (`index.html`, Abschnitt „Zeichnungen: ein
Blatt, zwei Schablonen“), die Beispieldateien liegen in `assets/`.

### 26.09.2026, erste Lesung Website-Konzept

Vorlage: „Website-Konzept, erste Lesung“, https://claude.ai/artifact/RoXPJU5xYuszioVQmbTP3G.
Protokoll: `../moosburg/docs/formsprache/konzept-erste-lesung.md`. Nur Vorschläge,
gebaut ist nichts, Antworten stehen aus.

- **Vorgabe von Benedict:** funktionale Logik, Vielfalt der Seitenstrukturen und
  gezielte Lenkung bleiben; mehr als Rot für Farbflächen; Themenseiten dürfen einen
  eigenen Charakter haben; Ergänzungen zum Kanon sind erwünscht.
- **13 Punkte**, darunter Farbe nach Gegenstand (familienweit abgeglichen mit Stadtrat
  und Data Hub), Foto-Kopf ohne Text auf abgedunkeltem Bild, zweifarbige Zeichnungen auf
  Identity-Köpfen, Handschrift als Wegweiser, Gastelement auf Themenseiten.
- **Zwölf Kanon-Ergänzungen K1 bis K12**, für diesen Abschnitt am wichtigsten:
  - **K2 Ton in Ton für alle Themenfarben.** Rot-500 auf Petrol, Grün oder Braun ist kein
    Ton in Ton mehr. Flächentöne auf 2,2:1 gegen das Band gerechnet: Tannengrün
    `#157840`, Isar-Petrol `#117393`, Erdbraun `#9b5309`, Nachtblau `#5159b6`,
    Aubergine `#7f4e8f`. Nicht in `kontrast.mjs`.
  - **K3 Trennformel:** Chroma (`max − min`) statt HSV-Sättigung. Beim Hirschen zog die
    Sättigung die dunklen Tuschelinien in die Farbebene.
  - **K4 Deckung der Farbebene:** im Mittel 56 % (Bahnhof) und 66 % (Hirschen), Rot-500
    wird auf Creme rosa. Normieren oder als Aquarell wollen.
  - **K12 Deckkraft der Wasserzeichen:** Kanon 6 bis 9 %, der Stadt-Prototyp hat 11 bis
    22 % je Grund gemessen.
- **Neues Material:** zweifarbiger Hirschen als `hirschenC-tinte.webp` und
  `hirschenC-farbe.webp` in `../moosburg/public/sketches/`; 32 Fotos vom 21.09.2026 in
  `../moosburg/public/images/stadt/`.

### 26.09.2026, Antworten zur ersten Lesung Website-Konzept

Grundsätzlich angenommen, mit den empfohlenen Varianten und K1 bis K12 (K4: normieren).
Für den Kanon wichtig:

- **Rot-600 bleibt** als Hinweis-Fläche für Stellen mit Aufmerksamkeitscharakter
  (Jubiläen, besondere Feste), nicht als allgemeine Themenfläche. Creme darauf 6,69:1,
  Gold-200 4,93:1.
- **Gold-700 doppelt belegt:** amtliche Statistik im Data Hub, Mitmachen im Konzept.
- **Madelon Script bleibt.**
- **Gastelement auf Themenseiten (K9):** festgehalten, noch nicht angenommen, wird
  überarbeitet.
- **Gesichter-Regel:** verschoben, Personenfotos kommen nach.
- Zwei weitere zweifarbige Zeichnungen liegen vor (Rathaus, Stalag VII A), noch nicht
  zerlegt.

Die Umsetzung, auch die Kanon-Schritte in diesem Repo (taggen und pinnen, Schriften und
Themenfarben in `theme.css`, Paare in `kontrast.mjs`), steht als Anweisung in
`../moosburg/docs/formsprache/briefing-umsetzung.md`.

### 26.09.2026, im Kanon umgesetzt

Erste Phase des Briefings, in diesem Repo abgeschlossen. `version` steht auf `0.3.0`.

- **Schriften getauscht.** `--font-display` auf Source Serif 4, `--font-sans` auf Atkinson
  Hyperlegible Next, beide als `@fontsource-variable`-Paket in `^5.3.0`. Der Import von
  Source Serif 4 geht bewusst auf `/opsz.css`, sonst fehlt die Achse der optischen Größen.
  Madelon Script bleibt. Playfair und Inter sind aus dem Kanon heraus.
- **Farben.** Die sechs Themenfarben als `--color-thema-*`, die Ton-in-Ton-Flächen als
  `--color-zeichnung-*`, das tiefe Rot der Portal-Probe als `--color-red-950`. Tiefrot ist
  derselbe Wert wie `red-900` und steht zusätzlich unter seinem Gegenstandsnamen, damit
  eine Seite ihre Farbe benennen kann statt eine Stufe der Rot-Skala. `red-600` behält
  seinen Wert und bekommt die Rolle als Hinweis-Fläche.
- **`kontrast.mjs`.** Themenfarben gegen Creme, Gold-200 und Gold-500; Gold-200 auf den
  Ton-in-Ton-Flächen; Creme und Gold-200 auf `red-600`, `gold-700` und `red-950`. Dazu ein
  zweiter Prüfteil mit einer **Obergrenze** statt einer Untergrenze: eine Ton-in-Ton-Fläche
  soll ruhig sein, nicht kontrastreich, und darf nicht aus ihrem Band herausspringen
  (gemessen 2,20 bis 2,23:1, erlaubt bis 2,6). Alle Werte des Briefings bestätigt.
- **`README.md`.** K1 als Tabelle „Farbe nach Gegenstand“ samt der Doppelbelegung von
  Gold-700, dazu K2 bis K12 als kurze Regeln, die Rot-600-Regel und die Flächenfolge.
- **Showcase.** Neuer Abschnitt zu Ton in Ton je Themenfarbe, zur Trennung über Chroma und
  zur Normierung, letztere als Vorher-Nachher nebeneinander
  (`assets/bahnhofA-farbe-normiert.webp`, neu). Das Bahnhof-Paar selbst bleibt
  unverändert, weil die live geschaltete Aktionsseite in `moosburg-eu` es nutzt.

**Nicht gepinnt, bewusst.** Das Briefing sah vor, zuerst `v0.2.0` zu taggen und die fünf
Konsumenten darauf festzunageln. Benedict hat am 26.09.2026 entschieden, alle Projekte
zügig auf den neuen Stand zu bringen; ein Pin auf den alten Kanon würde genau das
aufhalten. Der Schriftwechsel soll die fünf erreichen. Entsprechend sind die beiden
Schriftpakete in `hausbasis/baseline.json` eingetragen und in allen fünf Konsumenten
gesetzt, Inter und Playfair dort entfernt. `baumkarte` und `moosburg-historisch` haben
ihre CSS-Importe mitbekommen; ihre Versalien-`.headline` bleibt vorerst, das ist Teil der
Nacharbeit je Projekt.

**Offen für Projekte ohne Build-Step.** `fonts/` führt weiter Inter- und
Playfair-Subsets; `moosburg-eu` und das Sitzungstool hängen damit noch an den alten
Schriften. Siehe `OFFENE-PUNKTE.md`.

### 26.09.2026, erste Lesung Karten

Vorlage: „Karten, erste Lesung“, https://claude.ai/artifact/P9KpGjEkzRw94DcB2hZ8Rw.
Umfang: Baumkarte, Historische Karten, Speisekarten (alle unter `/data/`). Wahlkarte und
Straßennamen vorgeschlagen als nicht dabei, Bestätigung steht aus. Gebaut ist nichts,
Antworten stehen aus.

- **Zwölf Punkte**, Empfehlung jeweils A: ein Kopf statt zwei (Stripe plus Band in der
  Themenfarbe als einzige Leiste, mit Rücklink „Data Hub“, Titel, Kennzahl und Rose);
  Themenfarben Tannengrün, Erdbraun, Aubergine (B: Speisekarten Tiefrot); Stripe oben;
  ein Blatt, das in Ruhe genau das Instrument zeigt, am Desktop schwebend oder bei Listen
  angedockt; 8 px statt eckigem Papier; gesetzte Filter in Gold; Zeiger in Rot;
  Grundkarte mit Creme multipliziert; Zoomknöpfe nur mit Maus, Standort am Daumen; Klecks
  als Auswahlmarke; Handschrift als Notiz am Ort; Rose als Ladezeichen im Band.
- **Kanon-Kandidaten:** Kopf für Vollbildanwendungen, Ruhelage zeigt das Instrument,
  „Filter in Gold, Navigation in Rot“, Grundkarte im Grund der Familie, Klecks als
  Auswahlmarke, Notiz am Ort, 12 px als kleinster Lesegrad.
- **Gefunden:** Keine der drei Karten führt zum Data Hub oder zu moosburg.eu zurück.
  basemap.de antwortete am 26.09. abends mit 503; die Baumkarte fällt dann auf bunte
  OSM-Kacheln, die Speisekarten zeigen Punkte ohne Karte und ohne Hinweis (TopPlusOpen
  grau war erreichbar). Beschriftungen um 9,6 bis 11 px. Die Speisekarten laden noch Inter
  und Playfair und fehlen in „Wer nutzt was“. „17 Speisekarten“ auf der Kachel passt nicht
  zu 16 Häusern mit Gerichten.
- Quelle der Vorlage im Session-Scratchpad (`karten-lesung.src.html`, `build.py`).

### 27.09.2026, Antworten zur ersten Lesung Karten; Briefing geschrieben

Wo nichts anderes steht, gilt die Empfehlung (U, 1A, 2A, 3A, 5A, 8A, T). Abweichend:

- **4B:** Am Desktop in allen drei Karten eine angedockte Seitenleiste (400 px), nicht nur
  bei den Speisekarten. Am Telefon bleibt die Regel „in Ruhe zeigt das Blatt das Instrument“.
- **6, Probe Gold:** gesetzte Filter Gold-700 auf Gold-100 mit Rand Gold-500. **Ersatz:** der
  heutige Stand der Speisekarten, voll Rot (`red-500`) mit weißer Schrift, wie im Stadtrat.
  **Ausdrücklich keine Familienregel:** Wie gesetzte Filter und aktive Zustände familienweit
  aussehen (Data Hub Gold, Stadtrat Rot), ist noch zu entscheiden.
- **7, Probe C:** Zeiger in der Themenfarbe der Karte. **Ersatz A:** Rot-700.
- **9A mit feinerem Maßstab:** ohne Kasten und Fläche, Haarlinie mit kurzen Endstrichen,
  Zahl 12 px darüber, Hof in Creme.
- **10A mit Hof:** Klecks als Auswahlmarke, dazu ein bleibender weicher Hof in Rot-500 und ein
  Ring, der beim Wählen einmal auseinanderläuft.
- **11 nein:** keine Handschrift in den Karten. „Notiz am Ort“ bleibt geparkt, gedacht für ein
  späteres Tutorial.
- **12A, zweistufig** (Benedicts Frage nach drehender Rose oder dem Laden aus dem Profil des
  Stadt-Konzepts): drei hüpfende Rosen wie der `RoseLoader` beim ersten Laden, mittlere Kachel
  in der Themenfarbe; drehende Rose (`.rose-spin`) im Band beim Nachladen.

Nachgearbeitete Attrappen (N1 bis N4) in Version 2 der Vorlage. Antworten darauf, ebenfalls
27.09.2026: N1 und N4 wie gezeigt; N3 Hof und Ring zusammen; N2 statt der feinen Haarlinie
ein **Meterstab** wie auf gedruckten Karten, vier Felder im Wechsel Tinte und Creme, 5 px,
Rahmen Tinte, „0“ links und Strecke rechts darüber in 12 px (Version 3 der Vorlage). Umsetzung als Arbeitsablauf
für eine andere Session: `briefing-karten.md` in diesem Ordner, AP 0 bis 10.

### 28.09.2026, Probe in den Karten umgesetzt

Das Briefing ist abgearbeitet, AP 0 bis 10. Nichts gemergt, nichts gepusht.

| Repo | Branch | Commits |
|---|---|---|
| baumkarte | `probe/formsprache` | `ed89c4d` bis `5a05320` (3) |
| moosburg-historisch | `probe/formsprache` | `09b0d31` bis `656e12c` (2) |
| foodhub | `probe/formsprache` | `ff3747a` bis `610b9f3` (2) |
| datahub | `probe/karten` | `df3fb36` (1) |
| hausbasis | `main` | `f366f44` (Phosphor in die Baseline) |

Ergebnisse je Repo in `docs/formsprache-probe/ERGEBNIS.md`. Was Benedict ansehen
sollte:

- **Punkt 7C in der Baumkarte.** Tannengrün `#1f3b2d` und das dunkle Ende der
  Höhenrampe `#0b3d20` stehen 1,01:1 zueinander. Bei hoher Mindesthöhe sitzt der
  Zeiger direkt unter diesem Ende, und Bedienung und Daten lesen sich als dasselbe.
  In den anderen beiden Karten tritt das nicht auf.
- **Punkt 6 in den Speisekarten.** Gold liest sich am gebauten Stand ruhiger als das
  bisherige volle Rot und trennt Bedienung von Daten, die in dieser App selbst rot
  sind. Gold-700 auf Gold-100 5,64:1 gegen 5,88:1 für Weiß auf Rot-500.
- **Drei Befunde** in den Ergebnissen: MapLibres Stylesheet stand in allen drei Karten
  im Bundle hinter den eigenen Regeln und überschrieb sie; `isSourceLoaded` taugt
  nicht als Signal fürs Nachladen; `Marker.addTo()` liest die Koordinaten sofort.
- **basemap.de nutzt ausschließlich `rgb()`** (557 Ebenen, 614 Farbangaben, am
  28.09.2026 nachgezählt). `papierton()` ist darauf gekürzt, Hex bleibt als übliche
  zweite Schreibweise.

Nichts davon ist in den Kanon zurückgeschrieben. Die Kandidaten aus der Lesung werden
erst am gebauten Stand entschieden, und Punkt 6 ist ausdrücklich keine Regel.

### 29.09.2026, erste Lesung Bilder im Website-Konzept

Vorlage: „Bilder im Konzept, erste Lesung“, https://claude.ai/artifact/DK32rZZcKCeeULf6qvnTGA.
Protokoll: `../moosburg/docs/formsprache/bilder-erste-lesung.md`. Nur Vorschläge,
Antworten stehen aus.

- **Elf Ideen**, jede im Ausschnitt der Seite, auf die sie gehört, mit umschaltbaren
  Varianten und lauffähigen Effekten: Stadtfenster, Diptychon, Anschnitt im Wechsel,
  goldener Rahmen (versetzt, Ecken, voll), Abzug, Klecks als Bildmaske,
  Bildunterschrift (Serif und Ortszeile, Kartenlink, Notiz, senkrecht), Hover,
  Scroll-Effekte, Zeichnung wird Foto, „Moosburg im Jahr“.
- **Kandidaten für den Kanon**, falls angenommen: kein Text auf dem Foto; höchstens ein
  Effekt und ein gerahmtes Bild pro Bildschirm; keine Bewegung im Seitenkopf; Bildfokus,
  Titel und Ort je Foto im Bildregister; der goldene Rahmen als handgezeichnetes Element
  neben den Federzeichnungen.
- Die Rahmen und die Linien für „Zeichnung wird Foto“ sind in der Vorlage gerechnet,
  als Stellvertreter für Zeichnungen von Benedict.

### 29.09.2026, Antworten zur ersten Lesung Bilder; Briefing geschrieben

Angenommen: Stadtfenster (1), Diptychon versetzt (2 B), Bilder in der Spalte, aber
querer als 4:3 (3 B), goldener Rahmen versetzt mit Ecken als Ersatz (4 A/B), und zwar
**in allen Bildplatzierungen**, nicht nur bei freistehenden Bildern; Bildunterschrift mit
Ortszeile und Kartenlink (7 B), Notiz als Option für Einzelelemente im Bild (7 C); Hover
zeichnet den Rahmen nach (8 B); Scharfstellen oder Zoom über 4 % (9, Wahl am gebauten
Stand). Abgelehnt: Klecks als Bildmaske (6). Verschoben: Abzug (5, später etwa für
Partnerstädte), Zeichnung wird Foto (10, Benedict hat eine Idee andersherum), Moosburg
im Jahr (11).

Für den Kanon wichtig, sobald die Rahmen von Hand kommen: **Lieferformat** ist eine
Mittellinie mit einheitlicher Stärke, als einzelne lange Linien statt fertiger Rahmen.
Nur so bleibt die Stärke beim Strecken konstant, das Zittern bei jedem Bildformat gleich
stark, und nur ein Strich lässt sich beim Hover nachzeichnen. Einzelheiten und der
Umsetzungsplan: `../moosburg/docs/formsprache/briefing-bilder.md`.

### 29.09.2026, Bilder im Stadt-Prototyp gebaut

Alle sechs Phasen umgesetzt, auf Branch `probe/bilder`, nicht gemergt. Drei Punkte
warten auf Benedicts Wahl am gebauten Stand und sind dafür über die Adresse
umschaltbar (`?wz=`, `?rahmen=`, `?fx=`), damit kein Umschalter in der Seite steht.

**Kanon-Kandidaten aus der Umsetzung** — erst in `README.md` eintragen, wenn Benedict
sie am gebauten Stand bestätigt hat:

- **Ein Bildregister je Projekt.** Titel, Fokuspunkt, Ort und Nachweis stehen einmal
  an einer Stelle, die Seiten nennen nur den Schlüssel. Vorher stand der Nachweis in
  fünfzehn Aufrufen; eine Korrektur wäre an vierzehn davon liegen geblieben.
- **Ein Ort steht nur, wo das Motiv ihn zeigt.** Kein „Altstadt“ auf Verdacht. Eine
  falsche Ortsangabe ist schlechter als keine, weil sie aussieht wie eine Auskunft.
- **Der Ort ist ein Weg.** Hat das Foto einen Kartenpunkt, führt die Unterschrift auf
  die Karte an diese Stelle. Damit wird aus einer Bildlegende eine Navigation.
- **Rahmen als vier Linien, nicht als Rechteck.** Jede Kante in einem eigenen
  Koordinatensystem, gedreht an ihren Platz; beim Formatwechsel streckt sich nur die
  Länge. Das ist die Bedingung dafür, dass eine Handzeichnung ohne Umbau eingesetzt
  werden kann, und gilt für jedes gezeichnete Element, das sich an Inhalt anpassen
  muss.
- **Höchstens ein ruhender Rahmen pro Bildschirm**, Hover-Rahmen zählen nicht.
- **Ein Bild über die volle Breite bekommt keinen Rahmen.** Dort fehlen die Seiten,
  und eine einzelne Linie oben oder unten wäre der verbotene Kantenakzent.
- **Ein Bild über die volle Breite wiegt wie eine dunkle Fläche** und fällt damit
  unter dieselbe Regel: nie zwei nebeneinander, höchstens eines pro Bildschirm.
- **Scroll-Fortschritt als CSS-Variable, nicht als `animation-timeline`.** Firefox
  kann Letzteres nur hinter einem Schalter. Dieselbe Stelle war schon beim
  Johannisturm aufgefallen.
- **Bewegung nur unterhalb des ersten Bildschirms**, nie im Seitenkopf.

**Nicht in den Kanon, sondern in die Projekte:** die Zuordnung Foto zu Seite. Sie
hängt am Bestand, nicht an der Formsprache.

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

### 16.09.2026, Stadtrat live; Erkenntnisse für die Familie

Die Probe ist in `main` von council gemergt und über
`.github/workflows/moosburg-eu.yml` auf moosburg.eu/stadtrat/ deployt. Auswertung:
`../council/docs/formsprache-probe/ERGEBNIS.md`.

**Im Kanon geändert:** `--radius-xl` von 10 auf 8 px (`css/theme.css` und
`css/tokens.css`, Commit `dd2f435`). Der Wunsch kam aus dieser Iteration; in den
anderen Projekten ist noch zu prüfen, ob die Kacheln damit stimmen. Betroffen sind
alle, die `theme.css` importieren: Stadt-Prototyp (rund 100 `rounded-xl`),
haushaltvis und datahub (je eine Handvoll) sowie die Token-Kopien in council und
moosburg-eu (council ist nachgezogen, das Portal noch nicht).

**Für alle Projekte mitzunehmen:**

- **Stripe nur einmal.** Steht der Regenbogen im Kopf, schließt er keine
  Zwischenebene mehr ab. Das stellt die Zeile „Stripe als unterer Abschluss“ bei
  den Farbflächen in Abschnitt 4 infrage. **Ausnahme (16.09.2026):** Der Einschub
  „In eigener Sache“ im Portal behält seinen Stripe, dort wirkt er nicht
  aufdringlich.
- **Gremienfarben eingeloggt** (16.09.2026): Stadtrat Tiefrot `#6d0818`, BPU
  Erdbraun `#4a2a17`, HVFA Nachtblau `#26295e`, jeweils der dunkle Ton der Farbe
  aus Kalenderpunkten und Diagrammen. Gilt für Sitzungskopf und Termin-Card.
- **Logos dürfen vom Icon-Set abweichen** (16.09.2026): LinkedIn steht als
  schlichtes „in“ ohne Kasten (Font Awesome Free 6.5.1, CC BY 4.0); die übrigen
  Kontaktzeichen kommen aus Phosphor, im Gewicht `bold`, damit sie in kleinen
  farbigen Flächen tragen.
- **Farbflächen über die ganze Breite oder gar nicht.** Eine Card mit deckender
  Farbe bleibt Hervorgehobenem vorbehalten (nächster Termin).
- **Karten dürfen in die Fläche ragen.** Läuft unter dem Band eine Kartenliste,
  zieht eine Überlappung von etwa 72 px die Liste an den Kopf. Technik:
  `margin-inline: calc(50% - 50vw)`, `padding-inline: calc(50vw - 50%)`,
  `body { overflow-x: clip }`, Überlappung über `:has(+ …)`.
- **Keine einseitige Farbkante an Karten.** Sie liest sich wie ein generiertes
  Muster, auch wenn sie Daten trägt. Stattdessen eine Kategoriezeile.
- **Kategoriezeile und Titel wiederholen sich nicht.** Nennt die Zeile das
  Gremium, heißt der Titel darunter „2. Sitzung“ plus Datum.
- **Wiederkehrende Ebenen tragen ihre Farbe als dunklen Ton** derselben Farbe, die
  Punkte und Diagramme schon nutzen. So gibt es eine Zuordnung, nicht zwei.
- **Parteifarben taugen nicht als Fläche:** Sie lesen sich wie Werbung, und die
  meisten erreichen mit keiner Schriftfarbe 4,5:1.
- **Einstellungen können in „Über das Projekt“ aufgehen.** Impressum und Kontakt
  stehen dort ohnehin; Barrierefreiheits-Schalter passen dazu und sparen einen Tab.
  Mobil öffnet ein Info-Knopf das Blatt, der erste Eintrag führt auf moosburg.eu.
- **Suche:** überall derselbe Bestand, nur die Reihenfolge der Gruppen richtet sich
  nach dem Ort.

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
- **Aus der zweiten Lesung** (Bilder in der Vorlage „Zweite Lesung Stadtrat-Probe“):
  - Klecks in jeder Themenkarte, 46 px am Desktop und 38 px am Handy, links neben
    Kategoriezeile, Titel und Anriss, im Ton des ersten Themas.
  - Themenfeld-Band in Tiefrot für alle Felder, als helle Klecks-Tönung mit Tinte-Schrift und
    ganz ohne Band mit 72-px-Klecks.
  - Dossier-Kopf als helles Band in der Klecks-Tönung.
  - Fraktion mit Band in der Parteifarbe, Schrift je nach Kontrast in Creme oder Tinte. SPD
    erreicht erst um 5 % abgedunkelt 4,5:1 mit Creme, UMB auch dann nicht.
  - Ecken 6 px, auch an Chips und Tab-Markierung.
  - Gremien-Kategoriezeile in der Skizze mit farbigem Seitenstrich am Eintrag (der alte
    Rahmen `.sheet-event.bpu`) und vollem Sitzungstitel darunter.

### Aus der ersten Lesung Data Hub (16./17.09.2026)

Bilder aller Varianten in „Data Hub, erste Lesung“
(https://claude.ai/artifact/7yJQBjHVUt2bakmAsVmTXY). Nicht gewählt, aber aufgehoben:

- **Kopf der Übersicht ohne Federzeichnung**, reine Typografie. Ebenso die anderen
  Wörter für die Handschrift: „gezählt“, „erhoben“, „Zahlen“, „was zurückkam“.
- **Kacheln nur mit Kategoriezeile**, ohne Klecks.
- **Ein Grund für alle Kacheln** (weiß), Unterschied allein über Klecks und Kategoriezeile;
  sowie die Zwischenstufe „Pergament bleibt, Schraffur fällt“.
- **Restsätze der Karten-Kacheln streichen** („rund um Moosburg“, „von 1960 bis heute,
  übereinandergelegt“, „aus 17 Speisekarten, jede mit Quelle und Datum“).
- **Aufmacher auf der Übersicht:** Farbband über dem Raster für den ersten Nicht-Wahl-Eintrag
  des Manifests, mit großer Zahl in Gold-200 und Knopf in Creme. Und die Variante, den
  Aufmacher zurückzustellen, bis die Wahlseite dran ist. Der erste Manifest-Eintrag ist die
  Kommunalwahl, deshalb wäre er ohne Ausnahmeregel auf sie gefallen.
- **Datensatzköpfe hell lassen** (Kennzahlen als drei Karten, wie gebaut), und die
  Zwischenstufe „Band nur bei der Statistik in Gold-700“, bei der die Farbe die Herkunft
  trüge statt des Gegenstands.
- **Kennzahlen als Karten behalten** und nur die Quelle verschieben.
- **„Kapitel N“ als ruhige Zeile** in Satzschreibung, 13 px, gedämpfte Tinte.
- **Anregungen als Kacheln** statt als Register, und die Variante, den Abschnitt vorerst
  auszublenden.
- **Zeichnungen für alle drei Datensätze gleichzeitig**, statt erst einer Probe.
- **Filterauswahl in Tinte** statt in Rot, ausdrücklich abgelehnt: zu leise.


### Aus der zweiten Lesung Data Hub (17.09.2026)

Bilder in „Data Hub, zweite Lesung“ (https://claude.ai/artifact/K7x9KzUVvjAkREAmkvehPR).
Nicht gewählt:

- **Kapitelzeile in der klebenden Leiste**, die erst nach dem Kopf einblendet und den Namen
  des aktuellen Kapitels samt Zählung trägt; ebenso die **Sprungleiste als Chips** mit
  Pillen-Markierung und die **Marke am linken Rand**, die das Kapitel am Desktop mitführt.
- **Filterleiste am Handy als Zustandszeile** („412 von 1.656 Antworten“) mit den gesetzten
  Filtern als Chips darunter, und die Variante mit der **wichtigsten Kategorie als
  Chip-Zeile** plus Aufklapp für den Rest.
- **Goldpaare:** Gold-200 `#e8d5a3` ruhig gegen Gold-600 `#967a40` gewählt (größter Sprung,
  aber 1,45:1 auf Weiß und damit fast unsichtbar), sowie das heutige `#b39f7a` ruhig gegen
  Gold-700 gewählt.


### Aus der dritten Lesung Data Hub (17.09.2026)

Bilder in „Data Hub, dritte Lesung“ (https://claude.ai/artifact/D8g4dAkGrFwFzDtMyqtHjT).
Nicht gewählt:

- **Stepper, dessen Name die Kapitelliste öffnet**, und der Ort am unteren Rand am Handy
  (dort, wo im Stadtrat die Tab-Leiste sitzt). Der Ort ist nur zurückgestellt, nicht
  verworfen.
- **Balken als eigene Spalte** in der Auswahlliste, alle auf einer Startlinie, Beschriftung
  auf weißem Grund.
- **„ohne Angabe“ nur nennen, nicht auswählbar**, sowie die Variante, es wie heute ganz
  wegzulassen.


### Aus der ersten Lesung Karten (26./27.09.2026)

Bilder in „Karten, erste Lesung“ (https://claude.ai/artifact/P9KpGjEkzRw94DcB2hZ8Rw).
Nicht gewählt:

- **Kopf im Blatt** (1B): kein Band, Stripe und Kopf in Themenfarbe oben im Blatt, Karte bis
  zur Oberkante. **Familienleiste mit Karte darunter** (1C), cremefarben, 64 px, ohne
  Themenfarbe.
- **Speisekarten in Tiefrot** (2B) statt Aubergine.
- **Karten ohne Stripe** (3B), die frühere Entscheidung der Baumkarte.
- **Blatt am Desktop schwebend** (4A), oben links, 312 px, nur die Speisekarten angedockt.
- **Eckiges Papier** (5B), 2 px, als Eigenheit der Kartenblätter.
- **Gesetzte Filter voll Rot mit weißer Schrift** (heutiger Stand der Speisekarten, wie im
  Stadtrat): **Ersatz für die Gold-Probe**, nicht verworfen. Dazu die leise Variante Rot-700
  auf Rot-50 mit Rand Rot-700 (6B).
- **Zeiger in Rot-700** (7A): **Ersatz für die Probe C**. Zeiger in der Farbe der Skala (7B),
  wie heute in der Baumkarte (`#14522a` für die Höhe, `#6d0818` für den Zeitraum).
- **Grundkarte wie geliefert** (8B).
- **Zoomknöpfe auch am Telefon** (9B); Maßstab als Kasten mit Rand und Fläche (Lesung 9A);
  **feiner Maßstab** als 1-px-Haarlinie `ink-soft` mit 4 px Endstrichen, Zahl 12 px darüber,
  Hof in Creme (N2 der zweiten Fassung, abgelöst vom Meterstab).
- **Klecks nur mit Hof** oder nur mit Ring (N3); gewählt ist beides zusammen.
- **Punkt mit Hof** statt Klecks (10B), 20 px, 3 px Rand, Hof 5 px in Rot bei 22 %.
- **Notiz am Ort** (11A): Handschrift mit Pfeil, gebunden an Koordinate, Zoomstufe und
  Ausgabe, Hof in Creme. Geparkt für ein Tutorial.
- **Ladetext im Blatt** (12B); **Tuschezeichnung als Ladebild**.

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

Zweifarbige Zeichnungen, am 19.09.2026 gerechnet und **in `kontrast.mjs`
eingetragen**:

| Paar | Wert | Rolle |
|---|---|---|
| Gold-200 auf Tiefrot | 8,5:1 | Linien auf dunkler Fläche |
| Gold-700 auf Gold-100 | 5,6:1 | Linien auf Pergament |
| Tinte auf Creme | 16,0:1 | Linien auf hellem Grund |
| Rot-500 auf Gold-100 | 5,0:1 | Flächen auf Pergament |
| Rot-500 auf Creme | 5,5:1 | Flächen auf hellem Grund |
| Rot-500 auf Tiefrot | 2,1:1 | Flächen auf dunkler Fläche, Ton in Ton, dekorativ |

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
| datahub | acht Diagramme tragen „Inter Variable“ fest ein | behoben auf `probe/formsprache` (17.09.2026) |
| datahub | Abschnitt `open_themes` der Bahnhofumfrage wird von keiner Komponente gerendert; zehn ausgewertete Themen liegen im Datensatz, die Seite zeigt den Platzhalter „Für diesen Abschnitt liegen noch keine Visualisierungen vor.“ | gefunden 16.09.2026, wird gebaut (erste Lesung, Punkt 12) |
| datahub | Fuß verlinkt `moosburg.org` | Fehler laut Benedict (17.09.2026), fällt ersatzlos weg; der Weg zurück steht rechts oben im Info-Panel |
| datahub | Kennzahl „Quelle“ setzt den Namen des Landesamts als Zahl (Serifenschrift, 36 px, Rot) | wandert in die Kategoriezeile (erste Lesung, Punkt 7) |
| datahub | Kommunalwahl trägt `kind: "statistik"` und damit Pergament und die Zeile „Amtliche Statistik“ | notiert, gehört zur Wahl-Runde |
| baumkarte, moosburg-historisch, foodhub | kein Weg zurück zum Data Hub oder zu moosburg.eu | behoben auf den Probe-Branches (28.09.2026), Rücklink und Panel im Band |
| baumkarte, foodhub | fällt basemap.de aus (26.09. abends und 27.09. ganztags, 503), zeigt die Baumkarte bunte OSM-Kacheln, die Speisekarten Punkte ohne Karte und ohne Hinweis | behoben auf den Probe-Branches (28.09.2026), beide fallen auf die graue TopPlusOpen zurück |
| baumkarte, moosburg-historisch, foodhub | Beschriftungen zwischen 9,6 und 11 px | behoben auf den Probe-Branches (28.09.2026), 12 px als Untergrenze |
| foodhub | lädt noch Inter und Playfair; fehlt in „Wer nutzt was“ im README dieses Repos | behoben (28.09.2026), Schriften auf dem Probe-Branch, README-Zeile hier |
| datahub | Kachel „aus 17 Speisekarten“, im Datensatz haben 16 von 49 Häusern Gerichte; Kacheltitel „Moosburg historisch“ gegen „Historische Karten“ in der Anwendung | behoben auf `probe/karten` (28.09.2026) |
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
