"use client";

import { useMemo, useState } from "react";
import { CategorySelect } from "@/components/CategorySelect";
import { EmptyState } from "@/components/EmptyState";
import { useLocale } from "@/components/LocaleProvider";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchBar } from "@/components/SearchBar";
import { productMatchesCategory, publishedProducts } from "@/lib/content";
import type { Product } from "@/lib/types";

function matchesQuery(product: Product, query: string, localeName: string) {
  const haystack = `${product.sku} ${product.id} ${localeName} ${product.name["zh-Hant"]}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function ProductBrowser({
  initialCategory = "",
  initialQuery = "",
}: {
  initialCategory?: string;
  initialQuery?: string;
}) {
  const { t, l } = useLocale();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const results = useMemo(() => {
    return publishedProducts().filter((product) => {
      return productMatchesCategory(product, category) && matchesQuery(product, query.trim(), l(product.name));
    });
  }, [category, l, query]);

  return (
    <div className="space-y-8">
      <SearchBar value={query} onChange={setQuery} />
      <CategorySelect value={category} onChange={setCategory} />
      {results.length ? (
        <ProductGrid products={results} />
      ) : (
        <EmptyState
          title={t("products.empty")}
          action={
            <button
              type="button"
              className="text-sm text-gold"
              onClick={() => {
                setQuery("");
                setCategory("");
              }}
            >
              {t("products.clear")}
            </button>
          }
        />
      )}
    </div>
  );
}
