"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { categoryPath, childCategories, visibleCategories } from "@/lib/content";

export function ShopNav({ onPick }: { onPick?: () => void }) {
  const { t, l } = useLocale();
  const [open, setOpen] = useState(false);
  const [crystalOpen, setCrystalOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const parents = visibleCategories();
  const crystals = parents.find((item) => item.id === "crystals");
  const siblings = parents.filter((item) => item.id !== "crystals");
  const crystalChildren = childCategories("crystals");

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setCrystalOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setCrystalOpen(false);
    onPick?.();
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setCrystalOpen(false);
      }}
    >
      <div className="inline-flex items-center gap-1">
        <Link href="/products/" onClick={closeAll} className="transition hover:text-gold">
          {t("nav.products")}
        </Link>
        <button
          type="button"
          className={`text-[10px] transition hover:text-gold ${open ? "rotate-180" : ""}`}
          aria-expanded={open}
          aria-label={t("nav.products")}
          onClick={() => {
            if (window.matchMedia("(hover: none)").matches) {
              setOpen((value) => !value);
            } else {
              setOpen(true);
            }
          }}
        >
          ▾
        </button>
      </div>
      {open ? (
        <div className="absolute top-full left-0 z-50 pt-2">
          <div className="min-w-[16rem] rounded-2xl border border-gold/20 bg-bg-elev p-2 shadow-2xl shadow-black/40">
            {crystals ? (
              <div>
                <div className="flex items-center justify-between rounded-xl hover:bg-surface">
                  <Link
                    href={categoryPath(crystals)}
                    onClick={closeAll}
                    className="flex-1 px-3 py-2 text-sm text-ink"
                  >
                    {l(crystals.name)}
                  </Link>
                  <button
                    type="button"
                    className="px-3 py-2 text-xs text-gold"
                    aria-expanded={crystalOpen}
                    onClick={() => setCrystalOpen((value) => !value)}
                  >
                    {crystalOpen ? "–" : "+"}
                  </button>
                </div>
                {crystalOpen ? (
                  <div className="mt-1 mb-2 grid grid-cols-2 gap-1 border-l border-gold/20 pl-2">
                    {crystalChildren.map((item) => (
                      <Link
                        key={item.id}
                        href={categoryPath(item)}
                        onClick={closeAll}
                        className="rounded-xl px-3 py-2 hover:bg-surface"
                      >
                        <span className="block text-sm text-ink">{l(item.name)}</span>
                        {item.theme ? (
                          <span className="mt-0.5 block text-[11px] text-gold">{l(item.theme)}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
            {siblings.map((item) => (
              <Link
                key={item.id}
                href={categoryPath(item)}
                onClick={closeAll}
                className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface"
              >
                {l(item.name)}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ShopNavMobile({ onPick }: { onPick?: () => void }) {
  const { t, l } = useLocale();
  const [open, setOpen] = useState(false);
  const [crystalOpen, setCrystalOpen] = useState(false);
  const parents = visibleCategories();
  const crystals = parents.find((item) => item.id === "crystals");
  const siblings = parents.filter((item) => item.id !== "crystals");
  const crystalChildren = childCategories("crystals");

  return (
    <div className="text-xl">
      <div className="flex items-center justify-between">
        <Link href="/products/" onClick={onPick} className="text-ink">
          {t("nav.products")}
        </Link>
        <button
          type="button"
          className="px-2 text-gold"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "–" : "+"}
        </button>
      </div>
      {open ? (
        <div className="mt-4 space-y-4 border-l border-gold/20 pl-4 text-base">
          {crystals ? (
            <div>
              <div className="flex items-center justify-between">
                <Link href={categoryPath(crystals)} onClick={onPick} className="text-ink">
                  {l(crystals.name)}
                </Link>
                <button
                  type="button"
                  className="px-2 text-gold"
                  aria-expanded={crystalOpen}
                  onClick={() => setCrystalOpen((value) => !value)}
                >
                  {crystalOpen ? "–" : "+"}
                </button>
              </div>
              {crystalOpen ? (
                <div className="mt-3 space-y-3 border-l border-gold/20 pl-4 text-sm text-muted">
                  {crystalChildren.map((item) => (
                    <Link key={item.id} href={categoryPath(item)} onClick={onPick} className="block">
                      {l(item.name)}
                      {item.theme ? <span className="ml-2 text-xs text-gold">{l(item.theme)}</span> : null}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          {siblings.map((item) => (
            <Link key={item.id} href={categoryPath(item)} onClick={onPick} className="block text-ink">
              {l(item.name)}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
