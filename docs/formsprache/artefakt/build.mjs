// Baut die Vorschlagsseite aus template.html zu einer einzelnen HTML-Datei.
// Aufruf im Ordner docs/formsprache/artefakt: node build.mjs
import fs from "node:fs";

const icons = JSON.parse(fs.readFileSync("icons.json", "utf8"));
const roseSrc = fs.readFileSync("assets/rose.svg", "utf8");
const rosePaths = [...roseSrc.matchAll(/<path[^>]*d="([^"]+)"/g)].map((m) => `<path d="${m[1]}"/>`).join("");
const rose = `<svg class="rose" viewBox="0 0 14.17 14.17" aria-hidden="true">${rosePaths}</svg>`;
const mime = { otf: "font/otf", ttf: "font/ttf", woff: "font/woff", woff2: "font/woff2" };

let html = fs
  .readFileSync("template.html", "utf8")
  .replace(/\{\{IMG:([\w-]+)\}\}/g, (_, n) => "data:image/jpeg;base64," + fs.readFileSync(`crops/${n}.jpg`).toString("base64"))
  .replace(/\{\{FONT:([\w.-]+)\}\}/g, (_, n) => {
    const pfad = `fonts/${n}`;
    // Schriften mit unklarer Lizenz liegen nicht im Repo; ohne Datei greift die Ersatzschrift.
    if (!fs.existsSync(pfad)) {
      console.warn(`Schrift fehlt, Ersatzschrift greift: ${pfad}`);
      return "data:,";
    }
    return `data:${mime[n.split(".").pop()]};base64,` + fs.readFileSync(pfad).toString("base64");
  })
  .replace(/\{\{SVG64:([\w-]+)\}\}/g, (_, n) => '"data:image/svg+xml;base64,' + fs.readFileSync(`assets/${n}.svg`).toString("base64") + '"')
  .replace(/\{\{ICON:(\w+)(?::(\w+))?\}\}/g, (_, n, cls) => {
    if (!icons[n]) throw new Error("Icon fehlt in icons.json: " + n);
    return `<svg class="ic${cls ? " " + cls : ""}" viewBox="0 0 256 256" aria-hidden="true">${icons[n].map((d) => `<path d="${d}"/>`).join("")}</svg>`;
  })
  .replaceAll("{{ROSE}}", rose);

if (/\{\{/.test(html)) throw new Error("Platzhalter übrig: " + html.match(/\{\{[^}]+\}\}/)[0]);
fs.writeFileSync("moosburg-formsprache.html", html);
console.log(`moosburg-formsprache.html geschrieben, ${(html.length / 1024).toFixed(0)} KB`);
