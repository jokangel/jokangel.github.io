"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  const { l, t } = useLocale();
  const href =
    article.slug === "index"
      ? `/blog/${article.category}/`
      : `/blog/${article.category}/${article.slug}/`;

  return (
    <Link
      href={href}
      className="rounded-3xl border border-gold/15 bg-bg-elev p-6 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <h3 className="font-display text-2xl text-ink">{l(article.title)}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{l(article.summary)}</p>
      <p className="mt-5 text-xs tracking-[0.18em] text-gold uppercase">{t("blog.read")}</p>
    </Link>
  );
}
