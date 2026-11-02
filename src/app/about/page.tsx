"use client";

import { CertificationRow } from "@/components/CertificationRow";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLocale } from "@/components/LocaleProvider";
import { site } from "@/lib/content";

export default function AboutPage() {
  const { t, l } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("nav.about")} />
        <p className="max-w-2xl text-lg leading-8 text-muted">{l(site.about)}</p>
        <div className="mt-8 space-y-3 text-muted">
          <p>{t("about.beat1")}</p>
          <p>{t("about.beat2")}</p>
          <p>{t("about.beat3")}</p>
        </div>
        <div className="mt-10">
          <CertificationRow />
        </div>
        <div className="mt-10">
          <WhatsAppButton label={t("nav.contact")} />
        </div>
      </Section>
    </Container>
  );
}
