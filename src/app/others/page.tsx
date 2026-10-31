"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PartnerCard } from "@/components/PartnerCard";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { partners } from "@/lib/content";

export default function OthersPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("others.title")} />
        <div className="grid gap-5 md:grid-cols-2">
          {partners.map((partner) => (
            <PartnerCard key={partner.slug} partner={partner} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
