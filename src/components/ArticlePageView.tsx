"use client";

import { ArticleBody } from "@/components/ArticleBody";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { articleBySlug } from "@/lib/content";

export function ArticlePageView({ categoryId, slug }: { categoryId: string; slug: string }) {
  const { l } = useLocale();
  const article = articleBySlug(categoryId, slug);
  if (!article) return null;

  return (
    <Container>
      <Section>
        <PageHeader title={l(article.title)} />
        <ArticleBody text={l(article.body)} />
      </Section>
    </Container>
  );
}
