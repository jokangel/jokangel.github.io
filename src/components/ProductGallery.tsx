"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { imageSrc, videoSrc } from "@/lib/content";

type Media = { kind: "image"; src: string } | { kind: "video"; src: string };

export function ProductGallery({
  images,
  videos = [],
  alt,
}: {
  images: string[];
  videos?: string[];
  alt: string;
}) {
  const { t } = useLocale();
  const shown: Media[] = [
    ...images.map((src) => ({ kind: "image" as const, src })),
    ...videos.map((src) => ({ kind: "video" as const, src })),
  ].slice(0, 18);
  const [active, setActive] = useState(0);
  const current = shown[active] || shown[0];

  if (!current) return null;

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] border border-gold/15 bg-surface" data-sc-tilt="7" data-sc-spotlight>
        {current.kind === "video" ? (
          <video
            key={current.src}
            src={videoSrc(current.src)}
            poster={videoSrc(current.src).replace(/\.mp4$/i, ".jpg")}
            className="aspect-square w-full bg-black object-contain"
            controls
            playsInline
            muted
            autoPlay
          />
        ) : (
          <img src={imageSrc(current.src)} alt={alt} className="aspect-square w-full object-cover" />
        )}
      </div>
      {shown.length > 1 ? (
        <div className="mt-4 grid grid-cols-6 gap-2">
          {shown.map((item, index) => (
            <button
              key={`${item.kind}-${item.src}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={item.kind === "video" ? t("product.playVideo") : undefined}
              className={`relative aspect-square overflow-hidden rounded-xl border ${
                index === active ? "border-gold" : "border-gold/15"
              }`}
            >
              {item.kind === "video" ? (
                <>
                  <img
                    src={videoSrc(item.src).replace(/\.mp4$/i, ".jpg")}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[#1a1033]">
                      <svg viewBox="0 0 12 12" className="ml-0.5 h-3 w-3" aria-hidden="true">
                        <path d="M2 1.2v9.6L11 6 2 1.2z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                </>
              ) : (
                <img src={imageSrc(item.src)} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
