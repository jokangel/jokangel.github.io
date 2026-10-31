"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
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
      <Shell>{children}</Shell>
    </LocaleProvider>
  );
}
