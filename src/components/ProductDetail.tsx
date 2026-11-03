"use client";

import Link from "next/link";
import { CategoryHowto } from "@/components/CategoryHowto";
import { ProductGallery } from "@/components/ProductGallery";
import { StatusBadge } from "@/components/StatusBadge";
import { useLocale } from "@/components/LocaleProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { categoryById, categoryHowtos } from "@/lib/content";
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
        {product.points?.length ? (
          <ul className="mt-6 list-none space-y-2 pl-0">
            {product.points.map((point) => (
              <li key={point["zh-Hant"]} className="leading-7 text-ink">
                {l(point)}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-5 leading-7 text-muted">{l(product.description)}</p>
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
        {category && categoryHowtos(category).length ? (
          <div className="mt-8">
            {categoryHowtos(category).map((howto) => (
              <CategoryHowto key={howto.title["zh-Hant"]} howto={howto} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
