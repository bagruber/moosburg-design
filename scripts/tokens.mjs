// Erzeugt css/tokens.css aus css/theme.css: dieselben Custom Properties als
// flaches :root, für Projekte ohne Build-Step (Portalseite, council).
// Aufruf: npm run tokens
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = join(dirname(fileURLToPath(import.meta.url)), "..");
const quelle = readFileSync(join(wurzel, "css", "theme.css"), "utf8");

const block = quelle.match(/@theme\s*\{([\s\S]*?)\n\}/);
if (!block) {
  console.error("Kein @theme-Block in css/theme.css gefunden.");
  process.exit(1);
}

const zeilen = block[1]
  .split("\n")
  .map((z) => z.trim())
  .filter((z) => z.startsWith("--"));

const kopf = `/* GENERIERT aus css/theme.css durch scripts/tokens.mjs.
   Nicht von Hand ändern: Änderungen gehören in theme.css, danach
   \`npm run tokens\`. Diese Datei ist für Projekte ohne Build-Step. */

:root {
`;

writeFileSync(
  join(wurzel, "css", "tokens.css"),
  kopf + zeilen.map((z) => `  ${z}`).join("\n") + "\n}\n"
);

console.log(`css/tokens.css geschrieben, ${zeilen.length} Tokens.`);
