"use client";

import Link from "next/link";
import { CategoryHowto } from "@/components/CategoryHowto";
import { ProductGallery } from "@/components/ProductGallery";
import { StatusBadge } from "@/components/StatusBadge";
import { useLocale } from "@/components/LocaleProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { categoryById } from "@/lib/content";
import type { Product } from "@/lib/types";

export function ProductDetail({ product }: { product: Product }) {
  const { t, l } = useLocale();
  const category = categoryById(product.category);

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <ProductGallery images={product.images} alt={l(product.name)} />
      <div>
        <p className="text-xs tracking-[0.24em] text-gold uppercase">
          {t("product.sku")} {product.sku}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <h1 className="font-display text-4xl text-ink">{l(product.name)}</h1>
          <StatusBadge status={product.status} />
        </div>
        <p className="mt-5 text-muted">{t("product.unique")}</p>
        <p className="mt-4 leading-7 text-muted">{l(product.description)}</p>
        {category?.howto ? (
          <div className="mt-8">
            <CategoryHowto howto={category.howto} />
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton
            message={product.whatsappPrefill}
            label={product.status === "sold" ? t("product.soldCta") : t("product.enquire")}
          />
          {category ? (
            <Link
              href={`/products/${product.category}/`}
              className="rounded-full border border-gold/30 px-5 py-2.5 text-sm text-gold"
            >
              {t("product.back")}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
