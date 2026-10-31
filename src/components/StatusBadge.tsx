"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { ProductStatus } from "@/lib/types";

export function StatusBadge({ status }: { status: ProductStatus }) {
  const { t } = useLocale();
  if (status !== "sold") return null;
  return (
    <span className="rounded-full border border-gold/40 px-2.5 py-1 text-[11px] tracking-[0.18em] text-gold uppercase">
      {t("status.sold")}
    </span>
  );
}
