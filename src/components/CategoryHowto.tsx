"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { CategoryHowto as HowTo } from "@/lib/types";

export function CategoryHowto({ howto, className = "" }: { howto: HowTo; className?: string }) {
  const { l } = useLocale();

  return (
    <div className={`mb-10 max-w-2xl rounded-2xl border border-gold/15 bg-bg-elev px-5 py-6 ${className}`}>
      <h2 className="font-display text-2xl text-ink">{l(howto.title)}</h2>
      <p className="mt-3 leading-7 text-muted">{l(howto.lead)}</p>
      <ol className="mt-5 space-y-4">
        {howto.steps.map((step, index) => (
          <li key={step.title["zh-Hant"]} className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-xs tracking-[0.2em] text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-ink">{l(step.title)}</p>
              <p className="mt-1 leading-7 text-muted">{l(step.text)}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
