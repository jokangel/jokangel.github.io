"use client";

import { useState } from "react";
import { imageSrc } from "@/lib/content";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] || images[0];

  if (!current) return null;

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] border border-gold/15 bg-surface">
        <img src={imageSrc(current)} alt={alt} className="aspect-square w-full object-cover" />
      </div>
      {images.length > 1 ? (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border ${
                index === active ? "border-gold" : "border-gold/15"
              }`}
            >
              <img src={imageSrc(image)} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
