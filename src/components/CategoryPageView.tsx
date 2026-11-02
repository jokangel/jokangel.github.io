"use client";

import { CategoryHowto } from "@/components/CategoryHowto";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductBrowser } from "@/components/ProductBrowser";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { categoryById } from "@/lib/content";

export function CategoryPageView({ categoryId }: { categoryId: string }) {
  const { t, l } = useLocale();
  const category = categoryById(categoryId);
  if (!category) return null;

  if (categoryId === "amethyst-geode") {
    return (
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/backgrounds/amethyst-geode-cave-bg.jpg)",
            filter: "brightness(1.35) saturate(0.75) contrast(0.92)",
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-bg/40" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/35 to-bg/75"
        />
        <Container className="relative max-w-7xl">
          <section className="pt-5 pb-16 md:pt-6 md:pb-20">
            <h1 className="font-display text-4xl text-ink md:text-5xl">{l(category.name)}</h1>
            <div className="gold-line mt-3 mb-5 h-px w-24" />
            {category.intro ? (
              <p className="mb-5 overflow-x-auto whitespace-nowrap text-sm leading-7 text-muted md:text-base">
                {l(category.intro)}
              </p>
            ) : null}
            {category.howto ? (
              <CategoryHowto
                howto={category.howto}
                className="mb-8 border-gold/20 bg-bg-elev/70 backdrop-blur-sm"
              />
            ) : null}
            <ProductBrowser initialCategory={categoryId} />
          </section>
        </Container>
      </div>
    );
  }

  return (
    <Container>
      <Section>
        <PageHeader
          title={l(category.name)}
          kicker={category.theme ? l(category.theme) : t("products.title")}
        />
        {category.intro ? <p className="mb-8 max-w-2xl text-muted">{l(category.intro)}</p> : null}
        {category.howto ? <CategoryHowto howto={category.howto} /> : null}
        <ProductBrowser initialCategory={categoryId} />
      </Section>
    </Container>
  );
}
