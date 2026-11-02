"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LocaleProvider";
import { effectGroups, effectPath } from "@/lib/content";

export default function EffectsPage() {
  const { t, l } = useLocale();

  return (
    <Container>
      <Section>
        <PageHeader title={t("nav.effects")} />
        <p className="mb-4 max-w-2xl text-muted">{t("effects.lead")}</p>
        <p className="mb-10 max-w-2xl text-sm text-muted">{t("effects.note")}</p>
        <div className="flex flex-col gap-3">
          {effectGroups.map((effect, index) => (
            <Link
              key={effect.id}
              href={effectPath(effect)}
              className="flex items-center gap-4 rounded-2xl border border-gold/15 bg-bg-elev px-5 py-4 transition hover:border-gold/40"
            >
              <p className="shrink-0 text-xs tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="whitespace-nowrap font-display text-xl text-ink">{l(effect.name)}</h2>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
