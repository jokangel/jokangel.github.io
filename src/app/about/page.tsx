"use client";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLocale } from "@/components/LocaleProvider";
import { site } from "@/lib/content";

export default function AboutPage() {
  const { t, l } = useLocale();

  return (
    <Container>
      <section className="pt-4 pb-16 md:pt-6 md:pb-20">
        <PageHeader title={t("about.title")} />
        <p className="max-w-2xl whitespace-pre-line text-lg leading-8 text-ink">{l(site.about)}</p>
        <div className="mt-10">
          <WhatsAppButton label={t("nav.contact")} />
        </div>
      </section>
    </Container>
  );
}
