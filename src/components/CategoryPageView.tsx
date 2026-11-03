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
};

function howtoByTitle(categoryId: string, title: string) {
  const category = categoryById(categoryId);
  if (!category) return undefined;
  return categoryHowtos(category).find((howto) => howto.title["zh-Hant"] === title);
}

export function CategoryPageView({ categoryId }: { categoryId: string }) {
  const { t, l } = useLocale();
  const category = categoryById(categoryId);
  if (!category) return null;

  if (categoryId === "sugilite") {
    const profile = howtoByTitle(categoryId, "基本礦物資料");
    const grades = howtoByTitle(categoryId, "常見等級與品種");
    const colours = howtoByTitle(categoryId, "特殊共生色");
    const cardClass = "border-gold/20";

    return (
      <Container className="max-w-7xl">
        <section className="pt-5 pb-16 md:pt-6 md:pb-20">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h1 className="font-display text-4xl text-ink md:text-5xl">{l(category.name)}</h1>
                {category.theme ? (
                  <p className="font-display text-2xl text-gold md:text-3xl">{l(category.theme)}</p>
                ) : null}
              </div>
              <div className="gold-line mt-3 mb-5 h-px w-24" />
              {category.intro ? (
                <p className="text-sm leading-7 text-muted md:text-base">{l(category.intro)}</p>
              ) : null}
              {category.note ? (
                <p className="mt-5 text-sm leading-7 text-muted md:text-base">{l(category.note)}</p>
              ) : null}
            </div>
            {profile ? <CategoryHowto howto={profile} fill className={cardClass} /> : null}
          </div>
          <div className="mt-12">
            <ProductBrowser initialCategory={categoryId} />
          </div>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            {grades ? <CategoryHowto howto={grades} fill className={cardClass} /> : null}
            {colours ? <CategoryHowto howto={colours} fill className={cardClass} /> : null}
          </div>
        </section>
      </Container>
    );
  }

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
              <p className="mb-5 overflow-x-auto whitespace-nowrap text-sm leading-7 text-muted md:text-base">
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
