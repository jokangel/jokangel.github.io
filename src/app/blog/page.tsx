"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { articles, blogCategories } from "@/lib/content";
import Link from "next/link";

export default function BlogPage() {
  const { t, l } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("blog.title")} />
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          {blogCategories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/${category.id}/`}
              className="rounded-3xl border border-gold/15 bg-bg-elev p-6 hover:border-gold/40"
            >
              <h2 className="font-display text-2xl">{l(category.name)}</h2>
              <p className="mt-2 text-sm text-muted">{l(category.intro)}</p>
            </Link>
          ))}
        </div>
        {articles.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState title={t("blog.empty")} />
        )}
      </Section>
    </Container>
  );
}
