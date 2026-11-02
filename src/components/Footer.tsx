"use client";

import { useLocale } from "@/components/LocaleProvider";

const notices = [
  { title: "notice.legalTitle", body: "notice.legal" },
  { title: "notice.crystalTitle", body: "notice.crystal" },
  { title: "notice.colourTitle", body: "notice.colour" },
] as const;

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-gold/15 bg-bg-elev">
      <div className="mx-auto flex max-w-3xl flex-col gap-7 px-5 py-10 text-xs leading-6 text-muted">
        {notices.map((notice) => (
          <div key={notice.title}>
            <p className="mb-2 tracking-[0.18em] text-gold uppercase">{t(notice.title)}</p>
            <p>{t(notice.body)}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}
