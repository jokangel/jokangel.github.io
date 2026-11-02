"use client";

import { useLocale } from "@/components/LocaleProvider";

const repeat = 8;

export function SiteNotice() {
  const { t } = useLocale();
  const line = t("notice.banner");
  const half = Array.from({ length: repeat }, (_, index) => index);

  return (
    <div className="notice-marquee" role="status" aria-label={line}>
      <div className="notice-track" aria-hidden="true">
        {half.map((index) => (
          <span key={`a-${index}`}>{line}</span>
        ))}
        {half.map((index) => (
          <span key={`b-${index}`}>{line}</span>
        ))}
      </div>
    </div>
  );
}
