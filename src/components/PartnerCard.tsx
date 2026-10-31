"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import type { Partner } from "@/lib/types";

export function PartnerCard({ partner }: { partner: Partner }) {
  const { l } = useLocale();

  return (
    <Link
      href={`/others/${partner.slug}/`}
      className="rounded-3xl border border-gold/15 bg-bg-elev p-6 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <h3 className="font-display text-2xl text-ink">{l(partner.name)}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{l(partner.summary)}</p>
    </Link>
  );
}
