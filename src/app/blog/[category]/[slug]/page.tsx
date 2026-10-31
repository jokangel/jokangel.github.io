import { notFound } from "next/navigation";
import { ArticlePageView } from "@/components/ArticlePageView";
import { articleBySlug, articles } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles
    .filter((article) => article.slug !== "index")
    .map((article) => ({ category: article.category, slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (slug === "index" || !articleBySlug(category, slug)) notFound();
  return <ArticlePageView categoryId={category} slug={slug} />;
}
