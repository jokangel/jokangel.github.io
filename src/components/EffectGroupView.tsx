"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { categoriesForEffect, categoryPath, effectById } from "@/lib/content";

export function EffectGroupView({ effectId }: { effectId: string }) {
  const { t, l } = useLocale();
  const effect = effectById(effectId);
  if (!effect) return null;
  const items = categoriesForEffect(effect);

  return (
    <Container>
      <Section>
        <PageHeader title={l(effect.name)} kicker={t("nav.effects")} />
        <p className="mb-8 max-w-2xl text-muted">{l(effect.intro)}</p>
        <p className="mb-8 max-w-2xl text-sm text-muted">{t("effects.note")}</p>
        {items.length ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <Link
                key={item.id}
                href={categoryPath(item)}
                className="rounded-2xl border border-gold/15 bg-bg-elev px-5 py-4 transition hover:border-gold/40"
              >
                <p className="text-ink">{l(item.name)}</p>
                <p className="mt-1 text-sm text-muted">{l(item.intro)}</p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState title={t("blog.empty")} />
        )}
      </Section>
    </Container>
  );
}
