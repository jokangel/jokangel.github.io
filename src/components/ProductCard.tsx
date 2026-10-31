"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { imageSrc, productPath } from "@/lib/content";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { l, t } = useLocale();

  return (
    <Link
      href={productPath(product)}
      className="group overflow-hidden rounded-3xl border border-gold/10 bg-bg-elev transition hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="aspect-[4/5] overflow-hidden bg-surface">
        {product.images[0] ? (
          <img
            src={imageSrc(product.images[0])}
            alt={l(product.name)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-[0.2em] text-gold">{product.sku}</p>
          <StatusBadge status={product.status} />
        </div>
        <h3 className="font-display text-xl text-ink">{l(product.name)}</h3>
        <p className="text-sm text-muted">{l(product.summary)}</p>
        <p className="text-xs tracking-[0.18em] text-gold uppercase">{t("featured.view")}</p>
      </div>
    </Link>
  );
}
