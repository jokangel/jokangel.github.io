"use client";

import { CertificationRow } from "@/components/CertificationRow";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLocale } from "@/components/LocaleProvider";

export default function AppraisalPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("nav.appraisal")} />
        <p className="mb-8 max-w-2xl text-muted">{t("appraisal.lead")}</p>
        <CertificationRow />
        <div className="mt-10">
          <WhatsAppButton label={t("nav.contact")} />
        </div>
      </Section>
    </Container>
  );
}
