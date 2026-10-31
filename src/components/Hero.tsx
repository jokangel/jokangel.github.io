"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useLocale } from "@/components/LocaleProvider";
import { site } from "@/lib/content";

export function Hero() {
  const { t, l } = useLocale();

  return (
    <div className="relative overflow-hidden border-b border-gold/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,164,232,0.18),transparent_45%)]" />
      <Container className="relative grid items-center gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="mb-4 text-xs tracking-[0.32em] text-gold uppercase">Hong Kong</p>
          <h1 className="font-display text-5xl leading-tight text-ink md:text-6xl">
            JOKAngel
            <span className="mt-2 block text-2xl tracking-[0.35em] text-gold-dim uppercase">
              Crystal
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">{l(site.heroLine)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products/"
              className="rounded-full bg-gold px-5 py-2.5 text-sm text-bg transition hover:bg-gold-dim"
            >
              {t("hero.ctaProducts")}
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition hover:border-gold"
            >
              {t("hero.ctaContact")}
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <img
            src="/images/brand/wordmark.jpg"
            alt="JOKAngel Crystal"
            className="w-full max-w-md rounded-[2rem] border border-gold/15 shadow-2xl shadow-black/40"
          />
        </div>
      </Container>
    </div>
  );
}
