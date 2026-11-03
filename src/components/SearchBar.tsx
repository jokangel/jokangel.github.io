"use client";

import { useLocale } from "@/components/LocaleProvider";

export function SearchBar({
  value,
  onChange,
  compact = false,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  compact?: boolean;
  className?: string;
}) {
  const { t } = useLocale();

  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={t("products.search")}
      aria-label={t("products.search")}
      className={`w-full rounded-full border border-gold/20 bg-bg-elev text-ink outline-none placeholder:text-muted focus:border-gold ${
        compact ? "px-3 py-1.5 text-xs" : "px-5 py-3 text-sm"
      } ${className}`}
    />
  );
}
