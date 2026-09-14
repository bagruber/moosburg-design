# Offene Punkte

*Notiert am 30.08.2026. Erledigte Punkte bitte streichen, nicht abhaken - die
Datei soll kurz bleiben.*

## Fuenf Repos haengen ungepinnt an main

`baumkarte`, `datahub`, `haushaltvis`, `moosburg` und `moosburg-historisch`
fuehren alle `"moosburg-design": "github:bagruber/moosburg-design"` - ohne Ref.
pnpm loest das auf den Default-Branch zum Installationszeitpunkt auf, `version`
steht seit dem ersten Commit auf `0.1.0`, und `git tag` ist leer.

Praktisch heisst das: eine Aenderung an `css/` faellt in fuenf Projekten an,
sobald dort das naechste Mal frisch installiert wird - und das ist nach jedem
Paket-Upgrade der Fall, weil die Hausbasis-Regel `rm -rf node_modules`
vorschreibt. Der Effekt ist erwuenscht, solange er beabsichtigt ist, und
unauffindbar, wenn nicht.

**Empfehlung:** `version` hochziehen, taggen, und in den fuenf Konsumenten
`#v0.2.0` anhaengen. Dann ist ein Design-Update ein Commit in fuenf Repos statt
einer Nebenwirkung.

Bewusst **nicht** in die fuenf Konsumenten dupliziert: das waeren fuenf Kopien
derselben Aussage, und `hausbasis/baseline.json` folgt genau der Gegenthese -
eine Quelle statt einer Tabelle je Repo.

## Formsprache in Arbeit (seit 11.09.2026)

Eine Ueberarbeitung der Formsprache laeuft, mit **vorlaeufigen** Entscheidungen
vom 14.09.2026 (Schriften, Kategorien, Farbflaechen, Navigation und mehr).
Nichts davon steht in `css/theme.css`. Protokoll und naechste Schritte:
`docs/formsprache/ENTSCHEIDUNGEN.md`; die Quelle der Vorschlagsseite liegt in
`docs/formsprache/artefakt/`. Bevor etwas davon in den Kanon wandert, zuerst den
Punkt oben (taggen und pinnen) erledigen.

## Haengt an gruber.am

Die Projektliste auf gruber.am liest **nichts** aus diesem Repo. Der Eintrag
wird von Hand in `gruberam/site/src/data/projects.ts` gepflegt und stand am
30.08.2026 so drin:

```ts
id: "moosburg-design"
stack: ["CSS custom properties"]
```

Wer hier die Sprache, das Framework oder die Datenbank wechselt, das Repo
umbenennt, archiviert oder privat schaltet, muss den Eintrag dort nachziehen.
Die Seite merkt es von allein nicht.

Alle Repos mit so einem Abschnitt finden:

```bash
grep -rl "Haengt an gruber.am" ~/Documents/GitHub/bagruber/*/OFFENE-PUNKTE.md
```
