"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { TopNavMobile } from "@/components/TopNav";

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
      <TopNavMobile onPick={onClose} />
      <div className="mt-12">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
