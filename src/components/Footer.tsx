"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";

const links = [
  { href: "/products/", key: "nav.products" },
  { href: "/blog/story/", key: "nav.story" },
  { href: "/blog/cases/", key: "nav.cases" },
  { href: "/cleansing/", key: "nav.cleansing" },
  { href: "/appraisal/", key: "nav.appraisal" },
  { href: "/others/", key: "nav.others" },
  { href: "/contact/", key: "nav.contact" },
];

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gold/15 bg-bg-elev">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl text-gold">JOKAngel Crystal</p>
          <p className="mt-2 text-sm text-muted">{t("footer.tag")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold">
              {t(link.key)}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
      <div className="mx-auto max-w-3xl px-5 pt-2 pb-8 text-xs leading-6 text-muted">
        <p className="mb-2 tracking-[0.18em] text-gold uppercase">{t("notice.legalTitle")}</p>
        <p>{t("notice.legal")}</p>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-muted">
        © 2026 JOKAngel Crystal. {t("footer.rights")}
      </div>
    </footer>
  );
}
