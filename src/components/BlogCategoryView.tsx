"use client";

import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { articleBySlug, articlesByCategory, blogCategoryById } from "@/lib/content";

export function BlogCategoryView({ categoryId }: { categoryId: string }) {
  const { t, l } = useLocale();
  const category = blogCategoryById(categoryId);
  if (!category) return null;

  const indexArticle = articleBySlug(categoryId, "index");
  const posts = articlesByCategory(categoryId).filter((article) => article.slug !== "index");

  return (
    <Container>
      <Section>
        <PageHeader title={l(category.name)} kicker={t("blog.title")} />
        <p className="mb-8 max-w-2xl text-muted">{l(category.intro)}</p>
        {indexArticle ? (
          <div className="mb-10 rounded-3xl border border-gold/15 bg-bg-elev p-8">
            <ArticleBody text={l(indexArticle.body)} />
          </div>
        ) : null}
        {posts.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : null}
        {!indexArticle && !posts.length ? <EmptyState title={t("blog.empty")} /> : null}
      </Section>
    </Container>
  );
}
