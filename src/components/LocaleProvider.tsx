"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate } from "@/lib/i18n";
import {
  DEFAULT_LOCALE,
  isLocale,
  pickLocalized,
  readStoredLocale,
  writeStoredLocale,
} from "@/lib/locale";
import type { Locale, Localized } from "@/lib/types";

type LocaleContextValue = {
  locale: Locale;
  ready: boolean;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  l: (value: Localized) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (isLocale(query)) {
      writeStoredLocale(query);
      setLocaleState(query);
      const url = new URL(window.location.href);
      url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } else {
      setLocaleState(readStoredLocale());
    }
    setReady(true);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      ready,
      setLocale: (next) => {
        setLocaleState(next);
        writeStoredLocale(next);
      },
      t: (key) => translate(locale, key),
      l: (item) => pickLocalized(item, locale),
    }),
    [locale, ready],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
