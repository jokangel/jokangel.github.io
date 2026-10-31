"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/content";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("contact.title")} />
        <p className="max-w-xl leading-8 text-muted">{t("contact.lead")}</p>
        <p className="mt-8 text-sm tracking-[0.18em] text-gold uppercase">{t("contact.number")}</p>
        <p className="mt-2 font-display text-3xl">+852 6888 8464</p>
        <div className="mt-8">
          <WhatsAppButton label={t("contact.whatsapp")} />
        </div>
        <p className="mt-10 text-sm text-muted">{site.brand}</p>
      </Section>
    </Container>
  );
}
