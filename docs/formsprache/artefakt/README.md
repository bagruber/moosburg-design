# Quelle der Vorschlagsseite „Moosburg Formsprache“

Die Seite ist als Artefakt auf claude.ai veröffentlicht:
https://claude.ai/code/artifact/764bc923-36f6-4751-8e8e-01eddec5c826

Dieser Ordner hält die Quelle, damit die Vorschläge nicht an einer einzelnen Sitzung
hängen. Protokoll und Entscheidungen stehen in `../ENTSCHEIDUNGEN.md`.

## Dateien

| Datei | Rolle |
|---|---|
| `template.html` | Die Seite mit Platzhaltern (`{{IMG:…}}`, `{{FONT:…}}`, `{{ICON:…}}`, `{{SVG64:…}}`, `{{ROSE}}`). Hier wird geändert. |
| `build.mjs` | Ersetzt die Platzhalter und schreibt `moosburg-formsprache.html` (eine Datei, alles eingebettet). |
| `icons.json` | Phosphor-Icons (Gewicht `regular`) als Pfaddaten, aus `@phosphor-icons/react` im Repo `moosburg` gezogen. |
| `crops/` | Ausschnitte „Heute“ aus Screenshots der GitHub-Pages-Fassungen (11. und 14.09.2026). |
| `assets/` | `rathausB.svg` (Federzeichnung) und `rose.svg`, beide aus dem Repo `moosburg`. |
| `fonts/` | **Nicht eingecheckt.** Siehe unten. |

## Bauen

```bash
cd docs/formsprache/artefakt
node build.mjs            # schreibt moosburg-formsprache.html
```

Die gebaute HTML-Datei ist mit allen Schriften rund 1,9 MB groß (ohne die Dateien in `fonts/` rund 1 MB), weil Bilder und Schriften eingebettet sind. Sie
wird nicht eingecheckt (`.gitignore` in diesem Ordner).

Veröffentlicht wird mit dem Artifact-Werkzeug von Claude Code, **immer mit der bestehenden
URL** (Parameter `url`), sonst entsteht eine zweite Seite. Vor dem Veröffentlichen die
aktuelle Fassung lesen (`action: read`), falls jemand zwischendurch veröffentlicht hat.

## Schriften, die nicht im Repo liegen

Google-Fonts-Schriften lädt die Seite zur Laufzeit. Die übrigen werden eingebettet und
müssen vor dem Bauen nach `fonts/` gelegt werden. Fehlt eine, baut `build.mjs` trotzdem
und die Schrift fällt auf die Ersatzschrift zurück.

| Datei | Herkunft | Lizenz |
|---|---|---|
| `MadelonScript.otf` | `../../../../moosburg/public/fonts/` | nicht dokumentiert, deshalb nicht hier |
| `SF_Burlington_Script.ttf` | `moosburg-eu/inspiration/SF-Burlington-Script.zip` | ShyFonts-Freeware, keine Bearbeitung |
| `OpenScript.ttf` | `moosburg-eu/inspiration/open_script.zip` | unbekannt |
| `Sneaky-Times.woff2` | https://github.com/collletttivo/sneaky-times (Ordner `fonts/`) | OFL |
| `AMDAL-Regular.woff2` | https://gitlab.com/velvetyne/amdal (`fonts/webfonts/`) | OFL |
| `DoulosSIL-Regular.woff2` | https://software.sil.org/downloads/r/doulos/DoulosSIL-7.000.zip (`web/`) | OFL |
| `GalSILR.woff`, `GalSILB.woff` | https://software.sil.org/downloads/r/galatia/GalatiaSIL-2.1-web.zip (`web/`) | OFL |
| `Eeyek-Regular.woff` | https://github.com/silnrsi/font-eeyek/releases/download/v2.000/Eeyek-2.000.zip (`web/`) | OFL |

Die Screenshots der Referenz-Apps aus `moosburg-eu/inspiration/` enthalten private Daten
und sind bewusst nicht Teil der Seite.
