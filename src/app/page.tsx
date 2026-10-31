"use client";

import Link from "next/link";
import { CertificationRow } from "@/components/CertificationRow";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { useLocale } from "@/components/LocaleProvider";
import { ProductGrid } from "@/components/ProductGrid";
import { Section } from "@/components/Section";
import { featuredProducts, site } from "@/lib/content";

export default function HomePage() {
  const { t, l } = useLocale();

  return (
    <>
      <Hero />
      <Container>
        <FadeIn>
          <Section>
            <h2 className="font-display text-3xl text-ink">{t("about.title")}</h2>
            <div className="gold-line mt-5 mb-6 h-px w-20" />
            <p className="max-w-2xl leading-8 text-muted">{l(site.about)}</p>
            <div className="mt-10">
              <CertificationRow />
            </div>
          </Section>
        </FadeIn>
        <FadeIn>
          <Section>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl text-ink">{t("featured.title")}</h2>
              <Link href="/products/" className="text-sm text-gold">
                {t("hero.ctaProducts")}
              </Link>
            </div>
            <ProductGrid products={featuredProducts()} />
          </Section>
        </FadeIn>
        <FadeIn>
          <Section>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/blog/story/" className="rounded-3xl border border-gold/15 bg-bg-elev p-8 hover:border-gold/40">
                <h3 className="font-display text-2xl">{t("story.teaser")}</h3>
              </Link>
              <Link href="/blog/cases/" className="rounded-3xl border border-gold/15 bg-bg-elev p-8 hover:border-gold/40">
                <h3 className="font-display text-2xl">{t("cases.teaser")}</h3>
              </Link>
              <Link href="/others/" className="rounded-3xl border border-gold/15 bg-bg-elev p-8 hover:border-gold/40">
                <h3 className="font-display text-2xl">{t("others.teaser")}</h3>
              </Link>
            </div>
          </Section>
        </FadeIn>
      </Container>
    </>
  );
}
