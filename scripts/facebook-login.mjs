import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const userDataDir = join(root, ".playwright-fb");
const profile =
  "https://www.facebook.com/profile.php?id=100091913137498";

mkdirSync(userDataDir, { recursive: true });

const context = await chromium.launchPersistentContext(userDataDir, {
  headless: false,
  viewport: { width: 1400, height: 900 },
  locale: "zh-Hant",
  args: ["--disable-blink-features=AutomationControlled"],
});

const page = context.pages()[0] ?? (await context.newPage());
await page.goto(profile, { waitUntil: "domcontentloaded" });

console.log("A Chromium window is open on the Jokangel Crystal Facebook profile.");
console.log("Log in there yourself. I will not type your password.");
console.log("When you can see your posts or photos, tell me in chat.");
console.log("Leave this window open.");

await new Promise((resolve) => {
  context.on("close", resolve);
});
