"use client";

import { useLocale } from "@/components/LocaleProvider";
import { whatsappHref } from "@/lib/whatsapp";
import type { Localized } from "@/lib/types";

type Props = {
  label?: string;
  message?: Localized | string;
  floating?: boolean;
  className?: string;
};

export function WhatsAppButton({ label, message, floating, className = "" }: Props) {
  const { t, locale } = useLocale();

  return (
    <a
      href={whatsappHref(message, locale)}
      target="_blank"
      rel="noreferrer"
      className={
        floating
          ? `fixed right-5 bottom-5 z-40 rounded-full bg-gold px-4 py-3 text-sm font-medium text-bg shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-gold-dim ${className}`
          : `inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm tracking-wide text-bg transition hover:bg-gold-dim ${className}`
      }
    >
      {label || t("product.enquire")}
    </a>
  );
}
