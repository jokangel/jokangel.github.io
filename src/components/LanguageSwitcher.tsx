"use client";

import { useLocale } from "@/components/LocaleProvider";
import { LOCALES } from "@/lib/locale";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className={`flex items-center gap-1 text-xs tracking-[0.2em] ${className}`}>
      {LOCALES.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 ? <span className="text-gold-dim/50">|</span> : null}
          <button
            type="button"
            onClick={() => setLocale(item)}
            className={`px-1.5 py-1 transition ${
              locale === item ? "text-gold" : "text-muted hover:text-ink"
            }`}
            aria-pressed={locale === item}
          >
            {t(`lang.${item}`)}
          </button>
        </span>
      ))}
    </div>
  );
}
