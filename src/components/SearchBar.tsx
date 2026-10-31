"use client";

import { useLocale } from "@/components/LocaleProvider";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { t } = useLocale();

  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={t("products.search")}
      className="w-full rounded-full border border-gold/20 bg-bg-elev px-5 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-gold"
    />
  );
}
