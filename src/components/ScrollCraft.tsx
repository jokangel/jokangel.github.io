"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

type CraftApi = { destroy: () => void };

type CraftWindow = Window & {
  ScrollCraft?: { mount: (root: HTMLElement) => CraftApi };
};

export function ScrollCraft() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const craft = (window as CraftWindow).ScrollCraft;
    if (!craft) return;
    const api = craft.mount(document.body);
    return () => api.destroy();
  }, [ready, pathname, locale]);

  return (
    <Script
      src="/vendor/scrollcraft.js"
      strategy="afterInteractive"
      onLoad={() => setReady(true)}
    />
  );
}
