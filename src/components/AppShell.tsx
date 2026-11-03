"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { ProductSearchProvider } from "@/components/ProductSearch";
import { ScrollCraft } from "@/components/ScrollCraft";
import { SiteNotice } from "@/components/SiteNotice";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-bg">
      <div data-sc-progress />
      <div className="sc-grain" aria-hidden="true" />
      <ScrollCraft />
      <Navbar />
      <SiteNotice />
      <main>{children}</main>
      <Footer />
      {pathname !== "/contact/" && pathname !== "/contact" ? (
        <WhatsAppButton floating label={t("nav.contact")} />
      ) : null}
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ProductSearchProvider>
        <Shell>{children}</Shell>
      </ProductSearchProvider>
    </LocaleProvider>
  );
}
