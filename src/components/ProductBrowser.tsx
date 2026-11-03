"use client";

import { useMemo } from "react";
import { EmptyState } from "@/components/EmptyState";
import { useLocale } from "@/components/LocaleProvider";
import { ProductGrid } from "@/components/ProductGrid";
import { useProductSearch } from "@/components/ProductSearch";
import { productMatchesCategory, publishedProducts } from "@/lib/content";
import type { Product } from "@/lib/types";

function matchesQuery(product: Product, query: string, localeName: string) {
  const haystack = `${product.sku} ${product.id} ${localeName} ${product.name["zh-Hant"]}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function ProductBrowser({
  initialCategory = "",
}: {
  initialCategory?: string;
}) {
  const { t, l } = useLocale();
  const { query, setQuery } = useProductSearch();

  const results = useMemo(() => {
    return publishedProducts().filter((product) => {
      return (
        productMatchesCategory(product, initialCategory) &&
        matchesQuery(product, query.trim(), l(product.name))
      );
    });
  }, [initialCategory, l, query]);

  return (
    <div className="space-y-8">
      {results.length ? (
        <ProductGrid products={results} />
      ) : (
        <EmptyState
          title={t("products.empty")}
          action={
            <button type="button" className="text-sm text-gold" onClick={() => setQuery("")}>
              {t("products.clear")}
            </button>
          }
        />
      )}
    </div>
  );
}
