"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductBrowser } from "@/components/ProductBrowser";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";

export default function ProductsPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("products.title")} />
        <ProductBrowser />
      </Section>
    </Container>
  );
}
