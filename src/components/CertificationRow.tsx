"use client";

import { useLocale } from "@/components/LocaleProvider";

const certs = [
  { src: "/images/certs/gemmology.jpg", alt: "Hong Kong Institute of Gemmology" },
  { src: "/images/certs/gemmology-mail.jpg", alt: "Hong Kong Institute of Gemmology letter" },
];

export function CertificationRow() {
  const { t } = useLocale();

  return (
    <div>
      <p className="mb-4 text-xs tracking-[0.24em] text-gold uppercase">{t("about.certs")}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((cert) => (
          <a key={cert.src} href={cert.src} target="_blank" rel="noreferrer" className="block">
            <img
              src={cert.src}
              alt={cert.alt}
              className="h-48 w-full rounded-2xl border border-gold/15 object-cover object-top"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
