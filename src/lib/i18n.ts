import en from "@/content/i18n/en.json";
import zhHans from "@/content/i18n/zh-Hans.json";
import zhHant from "@/content/i18n/zh-Hant.json";
import type { Locale } from "@/lib/types";

const dictionaries: Record<Locale, Record<string, string>> = {
  "zh-Hant": zhHant,
  "zh-Hans": zhHans,
  en,
};

export function translate(locale: Locale, key: string): string {
  return dictionaries[locale][key] || dictionaries["zh-Hant"][key] || key;
}
