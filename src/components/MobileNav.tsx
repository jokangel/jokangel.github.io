"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { ShopNavMobile } from "@/components/ShopNav";

const extraLinks = [
  { href: "/blog/story/", key: "nav.story" },
  { href: "/blog/cases/", key: "nav.cases" },
  { href: "/cleansing/", key: "nav.cleansing" },
  { href: "/appraisal/", key: "nav.appraisal" },
  { href: "/others/", key: "nav.others" },
  { href: "/contact/", key: "nav.contact" },
];

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLocale();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-bg/95 px-6 py-8 backdrop-blur lg:hidden">
      <div className="mb-10 flex items-center justify-between">
        <p className="font-display text-xl text-gold">JOKAngel</p>
        <button type="button" onClick={onClose} className="text-sm text-muted">
          {t("nav.close")}
        </button>
      </div>
      <nav className="space-y-8">
        <ShopNavMobile onPick={onClose} />
        <div className="flex flex-col gap-5 border-t border-gold/15 pt-8 text-xl">
          {extraLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="text-ink">
              {t(link.key)}
            </Link>
          ))}
        </div>
      </nav>
      <div className="mt-12">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
