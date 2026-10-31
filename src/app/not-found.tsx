"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";

export default function NotFoundPage() {
  const { t } = useLocale();

  return (
    <Container>
      <Section className="text-center">
        <p className="font-display text-6xl text-gold">404</p>
        <h1 className="mt-4 font-display text-4xl">{t("notFound.title")}</h1>
        <p className="mt-4 text-muted">{t("notFound.body")}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="rounded-full bg-gold px-5 py-2.5 text-sm text-bg">
            {t("notFound.home")}
          </Link>
          <Link href="/products/" className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold">
            {t("nav.products")}
          </Link>
          <Link href="/contact/" className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold">
            {t("nav.contact")}
          </Link>
        </div>
      </Section>
    </Container>
  );
}
