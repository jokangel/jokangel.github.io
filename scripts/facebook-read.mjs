import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const userDataDir = join(root, ".playwright-fb");
const outDir = join(root, ".playwright-fb", "export");
const profile = "https://www.facebook.com/profile.php?id=100091913137498";
const photos = `${profile}&sk=photos`;

const PRICE =
  /(?:hk\s*\$|hkd|ikd|usd|\$|￥|¥)\s*[\d,]+(?:\.\d+)?|\b\d{2,6}(?:\.\d+)?\s*(?:hkd|港幣|元)?\b|\b\d{1,3}(?:,\d{3})+(?:\.\d+)?\b/gi;

function redact(text) {
  return String(text || "")
    .replace(PRICE, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

mkdirSync(outDir, { recursive: true });

const context = await chromium.launchPersistentContext(userDataDir, {
  headless: false,
  viewport: { width: 1400, height: 900 },
  locale: "zh-Hant",
  args: ["--disable-blink-features=AutomationControlled"],
});

const page = context.pages()[0] ?? (await context.newPage());
page.setDefaultTimeout(20000);

await page.goto(photos, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(4000);

for (let i = 0; i < 8; i += 1) {
  await page.mouse.wheel(0, 1800);
  await page.waitForTimeout(800);
}

const raw = await page.evaluate(() => {
  const posts = [...document.querySelectorAll('[data-ad-preview="message"], [data-ad-comet-preview="message"], div[dir="auto"]')]
    .map((node) => node.innerText)
    .filter((text) => text && text.length > 4 && text.length < 400);

  const images = [...document.querySelectorAll("img")]
    .map((img) => ({
      alt: img.alt || "",
      src: img.src || "",
    }))
    .filter((img) => img.src.includes("scontent") || img.src.includes("fbcdn"));

  return {
    title: document.title,
    url: location.href,
    posts,
    images,
  };
});

const items = [];
const seen = new Set();

for (const text of raw.posts) {
  const clean = redact(text);
  if (!clean || seen.has(clean)) continue;
  if (/log in|email or phone|forgotten|create new account/i.test(clean)) continue;
  seen.add(clean);
  items.push({ type: "text", text: clean });
}

for (const image of raw.images) {
  const alt = redact(image.alt);
  const key = alt || image.src;
  if (seen.has(key)) continue;
  seen.add(key);
  items.push({
    type: "image",
    alt,
    src: image.src.split("&")[0],
  });
}

const exportPath = join(outDir, "catalog.json");
writeFileSync(
  exportPath,
  JSON.stringify(
    {
      source: raw.url,
      title: raw.title,
      scrapedAt: new Date().toISOString(),
      note: "Prices were redacted and never stored.",
      items,
    },
    null,
    2,
  ),
);

await page.screenshot({ path: join(outDir, "photos.png"), fullPage: false });

console.log(JSON.stringify({ count: items.length, exportPath }, null, 2));
await context.close();
