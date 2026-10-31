import type { Locale, Localized } from "@/lib/types";

export const LOCALES: Locale[] = ["zh-Hant", "zh-Hans", "en"];
export const DEFAULT_LOCALE: Locale = "zh-Hant";
export const LOCALE_COOKIE = "jokangel_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "zh-Hant" || value === "zh-Hans" || value === "en";
}

export function pickLocalized(value: Localized, locale: Locale): string {
  return value[locale] || value["zh-Hant"] || "";
}

export function readStoredLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;
  const match = document.cookie.match(/(?:^|; )jokangel_locale=([^;]+)/);
  if (match && isLocale(decodeURIComponent(match[1]))) {
    return decodeURIComponent(match[1]) as Locale;
  }
  try {
    const stored = localStorage.getItem(LOCALE_COOKIE);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function writeStoredLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=34560000; SameSite=Lax`;
  try {
    localStorage.setItem(LOCALE_COOKIE, locale);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
}

export const localeBootScript = `(function(){
  var k='jokangel_locale';
  var l='zh-Hant';
  try {
    var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]+)'));
    if(m) l=decodeURIComponent(m[1]);
    else l=localStorage.getItem(k)||l;
  } catch (e) {}
  if(!/^(zh-Hant|zh-Hans|en)$/.test(l)) l='zh-Hant';
  document.documentElement.lang=l;
  document.documentElement.setAttribute('data-locale', l);
})();`;
