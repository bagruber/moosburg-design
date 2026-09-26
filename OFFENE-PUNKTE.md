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

**Stand 26.09.2026:** bewusst noch nicht gepinnt. Der Schriftwechsel im Kanon
soll alle fuenf Projekte erreichen (Benedict: alles zuegig auf den aktuellen
Stand), das Pinnen wuerde ihn gerade aufhalten. `version` steht jetzt auf
`0.3.0` und ist getaggt; gepinnt wird, wenn die Projekte einzeln
nachgearbeitet sind und ein Kanon-Update wieder eine Entscheidung je Repo sein
soll.

Bewusst **nicht** in die fuenf Konsumenten dupliziert: das waeren fuenf Kopien
derselben Aussage, und `hausbasis/baseline.json` folgt genau der Gegenthese -
eine Quelle statt einer Tabelle je Repo.

## Formsprache in Arbeit (seit 11.09.2026)

Eine Ueberarbeitung der Formsprache laeuft. Protokoll und naechste Schritte:
`docs/formsprache/ENTSCHEIDUNGEN.md`; die Quelle der Vorschlagsseite liegt in
`docs/formsprache/artefakt/`.

**Im Kanon angekommen (26.09.2026):** Schriften (Source Serif 4, Atkinson
Hyperlegible Next), die sechs Themenfarben, die Ton-in-Ton-Toene, das tiefe Rot,
die Rolle von `red-600`, und die Regeln K1 bis K12 in `README.md`. Geprueft mit
`npm run kontrast`.

**Noch nicht:** Dunkelmodus (Werte stehen in ENTSCHEIDUNGEN, Abschnitt 6),
Gastelement auf Themenseiten (K9, wird ueberarbeitet), Gesichter-Regel (wartet
auf Personenfotos).

## woff2-Subsets fuer Projekte ohne Build fehlen

`fonts/` fuehrt weiter Inter und Playfair als Subsets. Der Kanon nennt seit dem
26.09.2026 Source Serif 4 und Atkinson Hyperlegible Next, und die kommen in den
Vite-Projekten als npm-Pakete. Projekte ohne Build-Step -- `moosburg-eu` mit
seinen eigenen Kopien in `public/assets/fonts/`, und das Sitzungstool -- haengen
damit noch an den alten Schriften.

Zu tun: Subsets aus den npm-Paketen ziehen (Source Serif 4 mit `opsz`-Achse),
samt OFL-Texten hier ablegen, und `moosburg-eu/public/assets/` nachziehen.
Solange das offen ist, sehen Portal und Sitzungstool anders aus als der Rest.

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
