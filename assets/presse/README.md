# Presse-Logos

Quelle für die Logos der Medien, die über Moosburg berichten, und ihre
Markenfarben (16.11.2026). Die Apps haben keine gemeinsame Laufzeit-Quelle,
deshalb liegt in jeder eine Kopie; geändert wird hier, dann wird kopiert.

| id       | Medium               | Farbe     | Datei      |
|----------|----------------------|-----------|------------|
| `merkur` | Münchner Merkur      | `#008bd0` | merkur.svg |
| `sz`     | Süddeutsche Zeitung  | `#29293a` | sz.svg     |
| `br`     | Bayerischer Rundfunk | `#0082c6` | br.svg     |
| `mz`     | Moosburger Zeitung   | `#e20c15` | mz.svg     |

idowa ist die Moosburger Zeitung im Netz und trägt deren Badge; im Text
daneben steht weiter „idowa“. Die Farben kommen aus `council/data/media.json`,
dem Datenbestand der Presse.

## Badge

Ein Quadrat in der Markenfarbe, Ecken `--radius-md` (4 px), darin das Logo
weiß auf 70 % der Kante. Weiß wird es in der App, nicht in der Datei:
`filter: brightness(0) invert(1)` auf dem Bild oder die Datei als
`mask-image` auf weißer Fläche. Die Größe richtet sich nach dem Ort.

## Kopien

- `council/img/logos/`, Farben in `council/data/media.json`
- `datahub/public/press/`, Farben in `src/components/press/PressLogo.tsx`
- `moosburg-eu/public/assets/presse/`, Farben in `public/assets/aktion.css`
