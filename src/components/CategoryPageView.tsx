"use client";

import { CategoryHowto } from "@/components/CategoryHowto";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductBrowser } from "@/components/ProductBrowser";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { categoryById, categoryHowtos } from "@/lib/content";

const featureBackground: Record<string, string> = {
  "amethyst-geode": "/images/backgrounds/amethyst-geode-cave-bg.jpg",
  sugilite: "/images/backgrounds/sugilite-bg.jpg",
};

export function CategoryPageView({ categoryId }: { categoryId: string }) {
  const { t, l } = useLocale();
  const category = categoryById(categoryId);
  if (!category) return null;

  const background = featureBackground[categoryId];
  if (background) {
    return (
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
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
              <p
                className={`mb-5 text-sm leading-7 text-muted md:text-base ${
                  categoryId === "sugilite"
                    ? "max-w-3xl"
                    : "overflow-x-auto whitespace-nowrap"
                }`}
              >
                {l(category.intro)}
              </p>
            ) : null}
            {categoryHowtos(category).map((howto) => (
              <CategoryHowto
                key={howto.title["zh-Hant"]}
                howto={howto}
                className="mb-8 border-gold/20 bg-bg-elev/70 backdrop-blur-sm"
              />
            ))}
            <ProductBrowser initialCategory={categoryId} />
            {categoryId === "sugilite" ? (
              <p className="mt-8 text-[11px] leading-5 text-muted/80">
                <a
                  href="https://commons.wikimedia.org/wiki/File:Sugilite_1.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-gold/30 underline-offset-2 hover:text-gold"
                >
                  Géry Parent / Wikimedia Commons
                </a>
                {" · "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-gold/30 underline-offset-2 hover:text-gold"
                >
                  CC BY-SA 4.0
                </a>
              </p>
            ) : null}
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
        {categoryHowtos(category).map((howto) => (
          <CategoryHowto key={howto.title["zh-Hant"]} howto={howto} />
        ))}
        <ProductBrowser initialCategory={categoryId} />
      </Section>
    </Container>
  );
}
