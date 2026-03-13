import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const requiredPages = [
  { route: "/", files: ["index.html"] },
  { route: "/services", files: ["services/index.html", "services.html"] },
  { route: "/about", files: ["about/index.html", "about.html"] },
  { route: "/faq", files: ["faq/index.html", "faq.html"] }
];

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

if (!fs.existsSync(outDir)) {
  fail("Static output directory 'out' not found. Run npm run build first.");
  process.exit(1);
}

for (const page of requiredPages) {
  const resolvedPath = page.files
    .map((file) => path.join(outDir, file))
    .find((candidate) => fs.existsSync(candidate));

  if (!resolvedPath) {
    fail(`Missing page output for route ${page.route}`);
    continue;
  }

  const html = fs.readFileSync(resolvedPath, "utf8");
  if (!html.includes("<html")) {
    fail(`${page.route}: missing <html> element`);
  }
  if (!/<title>.+<\/title>/s.test(html)) {
    fail(`${page.route}: missing title tag`);
  }
  if (!/meta name=\"description\"/i.test(html)) {
    fail(`${page.route}: missing meta description`);
  }
  if (!/rel=\"canonical\"/i.test(html)) {
    fail(`${page.route}: missing canonical link`);
  }
}

const robotsPath = path.join(outDir, "robots.txt");
const sitemapPath = path.join(outDir, "sitemap.xml");
if (!fs.existsSync(robotsPath)) fail("Missing robots.txt in static output");
if (!fs.existsSync(sitemapPath)) fail("Missing sitemap.xml in static output");

const cssPath = path.join(outDir, "_next", "static");
if (!fs.existsSync(cssPath)) {
  fail("Missing generated static CSS assets");
}

if (process.exitCode !== 1) {
  console.log("PASS: HTML/CSS presence, metadata coverage, robots/sitemap checks completed.");
}
