"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { categoryById, childCategories, visibleCategories } from "@/lib/content";

function chipClass(active: boolean) {
  return `rounded-full px-4 py-2 text-sm transition ${
    active ? "bg-gold text-bg" : "border border-gold/20 text-muted hover:text-ink"
  }`;
}

export function CategorySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { t, l } = useLocale();
  const selected = categoryById(value);
  const crystalOpenDefault = value === "crystals" || selected?.parent === "crystals";
  const [crystalOpen, setCrystalOpen] = useState(crystalOpenDefault);
  const parents = visibleCategories();
  const crystalChildren = childCategories("crystals");

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => onChange("")} className={chipClass(value === "")}>
          {t("products.all")}
        </button>
        {parents.map((category) => {
          const hasChildren = category.id === "crystals";
          const active = value === category.id || selected?.parent === category.id;
          return (
            <div key={category.id} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  onChange(category.id);
                  if (hasChildren) setCrystalOpen(true);
                }}
                className={chipClass(active)}
              >
                {l(category.name)}
              </button>
              {hasChildren ? (
                <button
                  type="button"
                  className="px-1 text-xs text-gold"
                  aria-expanded={crystalOpen}
                  onClick={() => setCrystalOpen((open) => !open)}
                >
                  {crystalOpen ? "–" : "+"}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
      {crystalOpen ? (
        <div className="flex flex-wrap gap-2 border-l border-gold/20 pl-4">
          {crystalChildren.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={chipClass(value === category.id)}
            >
              {l(category.name)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
