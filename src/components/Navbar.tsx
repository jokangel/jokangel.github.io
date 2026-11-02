"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { MobileNav } from "@/components/MobileNav";
import { TopNav } from "@/components/TopNav";

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
    <>
      <header
        className={`sticky top-0 z-40 border-b transition ${
          solid ? "border-gold/15 bg-bg/90 backdrop-blur" : "border-transparent bg-bg/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-3">
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/" className="flex shrink-0 items-center">
              <img src="/images/brand/wordmark.jpg" alt="JOKAngel Crystal" className="h-14 w-auto" />
            </Link>
            <button
              type="button"
              className="text-sm text-gold"
              onClick={() => setOpen(true)}
            >
              {t("nav.menu")}
            </button>
          </div>
          <div className="hidden items-start lg:grid lg:grid-cols-[12rem_minmax(0,1fr)_12rem] lg:gap-x-4">
            <Link href="/" className="justify-self-start">
              <img src="/images/brand/wordmark.jpg" alt="JOKAngel Crystal" className="h-14 w-auto" />
            </Link>
            <TopNav className="flex min-w-0 flex-col justify-center gap-y-1.5 text-[13px] leading-6 text-muted" />
            <div className="justify-self-end pt-1">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
