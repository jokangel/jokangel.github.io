import site from "@/content/site.json";
import { pickLocalized } from "@/lib/locale";
import type { Locale, Localized } from "@/lib/types";

export function whatsappHref(message?: Localized | string, locale: Locale = "zh-Hant") {
  const text =
    typeof message === "string" ? message : message ? pickLocalized(message, locale) : "";
  const url = `https://wa.me/${site.whatsapp}`;
  return text ? `${url}?text=${encodeURIComponent(text)}` : url;
}
