"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductBrowser } from "@/components/ProductBrowser";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { categoryById } from "@/lib/content";

export function CategoryPageView({ categoryId }: { categoryId: string }) {
  const { t, l } = useLocale();
  const category = categoryById(categoryId);
  if (!category) return null;

  return (
    <Container>
      <Section>
        <PageHeader
          title={l(category.name)}
          kicker={category.theme ? l(category.theme) : t("products.title")}
        />
        {category.intro ? <p className="mb-8 max-w-2xl text-muted">{l(category.intro)}</p> : null}
        <ProductBrowser initialCategory={categoryId} />
      </Section>
    </Container>
  );
}
