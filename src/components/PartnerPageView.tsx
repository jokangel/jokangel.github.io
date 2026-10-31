"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { partnerBySlug } from "@/lib/content";

export function PartnerPageView({ slug }: { slug: string }) {
  const { t, l } = useLocale();
  const partner = partnerBySlug(slug);
  if (!partner) return null;

  return (
    <Container>
      <Section>
        <PageHeader title={l(partner.name)} kicker={t("others.title")} />
        <p className="mb-6 max-w-2xl leading-7 text-muted">{l(partner.description)}</p>
        <p className="mb-8 text-gold">{l(partner.contactNote)}</p>
        <WhatsAppButton message={partner.contactNote} />
      </Section>
    </Container>
  );
}
