"use client";

import { Container } from "@/components/Container";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";

export default function CleansingPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("nav.cleansing")} />
        <EmptyState title={t("blog.empty")} />
      </Section>
    </Container>
  );
}
