// Prüft die freigegebenen Farbpaare gegen WCAG 2.1 AA.
// Scheitert ein Muss-Paar, endet der Lauf mit Exit-Code 1.
// Aufruf: npm run kontrast
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(wurzel, "css", "theme.css"), "utf8");

const token = {};
for (const [, name, wert] of css.matchAll(/(--color-[\w-]+):\s*(#[0-9a-fA-F]{6})/g)) {
  token[name.replace("--color-", "")] = wert;
}
token["weiss"] = "#ffffff";

function luminanz(hex) {
  const kanal = (i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * kanal(1) + 0.7152 * kanal(3) + 0.0722 * kanal(5);
}

function kontrast(a, b) {
  const [l1, l2] = [luminanz(token[a]), luminanz(token[b])].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

// [Vordergrund, Grund, Mindestwert, wo das Paar vorkommt]
// 4.5 = normaler Text, 3.0 = große Schrift und UI-Grafik.
const paare = [
  ["ink", "cream", 4.5, "Fließtext auf dem Grund"],
  ["ink-soft", "cream", 4.5, "gedämpfter Text, Beschreibungen"],
  ["ink-muted", "cream", 4.5, "Nebentext, Quellenangaben"],
  ["ink", "cream-dark", 4.5, "Text auf getönten Flächen"],
  ["ink-soft", "cream-dark", 4.5, "gedämpfter Text auf getönten Flächen"],
  ["ink-soft", "gold-100", 4.5, "Text auf Pergamentgrund (amtliche Statistik)"],
  ["red-500", "cream", 4.5, "rote Textakzente, Links"],
  ["weiss", "red-500", 4.5, "Badges und Buttons in Markenrot"],
  ["weiss", "gold-700", 4.5, "Badges in Gold"],
  ["gold-700", "cream", 4.5, "goldener Text auf dem Grund, auch Kicker (.eyebrow)"],
  ["gold-600", "cream", 3.0, "Gold nur für große Schrift und Grafik"],
  ["cream", "red-900", 4.5, "Fußzeilen-Text auf Tiefrot"],
  ["gold-200", "red-900", 4.5, "Fußzeilen-Überschriften auf Tiefrot"],
  ["ink-line", "cream", 1.2, "Haarlinien, rein dekorativ"],

  // Zweifarbige Tuschezeichnungen: Die Linienebene trägt das Bild und muss
  // für sich lesbar sein, die Farbebene schmückt. Auf dunklem Grund liegt sie
  // bewusst Ton in Ton und damit unter 3,0.
  ["gold-200", "red-900", 3.0, "Zeichnungslinien auf dunkler Fläche"],
  ["gold-700", "gold-100", 3.0, "Zeichnungslinien auf Pergament"],
  ["ink", "cream", 3.0, "Zeichnungslinien auf hellem Grund"],
  ["red-500", "gold-100", 3.0, "Zeichnungsflächen auf Pergament"],
  ["red-500", "cream", 3.0, "Zeichnungsflächen auf hellem Grund"],
  ["red-500", "red-900", 1.2, "Zeichnungsflächen auf dunkler Fläche, Ton in Ton"],
];

let fehler = 0;
for (const [vg, grund, min, wo] of paare) {
  const wert = kontrast(vg, grund);
  const ok = wert >= min;
  if (!ok) fehler++;
  console.log(
    `${ok ? "ok  " : "FEHLT"} ${vg} auf ${grund}: ${wert.toFixed(2)}:1` +
      ` (min ${min}) ${wo}`
  );
}

// Bekannte Grenzfälle, nur zur Auskunft. gold-500 ist als Textfarbe nirgends
// freigegeben; auf getöntem Grund bleibt ink-soft die Empfehlung, auch wenn
// ink-muted dort inzwischen knapp besteht.
for (const [vg, grund] of [["gold-500", "cream"], ["weiss", "gold-500"], ["ink-muted", "gold-100"]]) {
  console.log(`info  ${vg} auf ${grund}: ${kontrast(vg, grund).toFixed(2)}:1 (Grenzfall, siehe Kommentar)`);
}

process.exit(fehler ? 1 : 0);
