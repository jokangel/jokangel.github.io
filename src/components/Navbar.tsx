"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { MobileNav } from "@/components/MobileNav";
import { ShopNav } from "@/components/ShopNav";

const extraLinks = [
  { href: "/blog/story/", key: "nav.story" },
  { href: "/blog/cases/", key: "nav.cases" },
  { href: "/cleansing/", key: "nav.cleansing" },
  { href: "/appraisal/", key: "nav.appraisal" },
  { href: "/others/", key: "nav.others" },
  { href: "/contact/", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useLocale();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition ${
        solid ? "border-gold/15 bg-bg/90 backdrop-blur" : "border-transparent bg-bg/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img src="/images/brand/wordmark.jpg" alt="JOKAngel Crystal" className="h-14 w-auto" />
        </Link>
        <nav className="hidden items-center gap-4 text-sm tracking-wide text-muted lg:flex">
          <ShopNav />
          {extraLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
        <button
          type="button"
          className="text-sm text-gold lg:hidden"
          onClick={() => setOpen(true)}
        >
          {t("nav.menu")}
        </button>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
