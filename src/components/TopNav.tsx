"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { categoryPath, childCategories, effectGroups, effectPath } from "@/lib/content";
import { topNav, topNavRow1, topNavRow2, type NavLink } from "@/lib/nav";

function useMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return { open, setOpen, wrapRef };
}

function CrystalMenu({ onPick }: { onPick?: () => void }) {
  const { l } = useLocale();
  return (
    <div className="min-w-[16rem] space-y-0.5 rounded-2xl border border-gold/20 bg-bg-elev p-2 shadow-2xl shadow-black/40">
      {childCategories("crystals").map((child) => (
        <Link
          key={child.id}
          href={categoryPath(child)}
          onClick={onPick}
          className="flex items-center whitespace-nowrap rounded-xl px-3 py-2 hover:bg-surface"
        >
          <span className="text-sm text-ink">{l(child.name)}</span>
        </Link>
      ))}
    </div>
  );
}

function EffectMenu({ onPick }: { onPick?: () => void }) {
  const { l } = useLocale();
  return (
    <div className="min-w-[16rem] space-y-0.5 rounded-2xl border border-gold/20 bg-bg-elev p-2 shadow-2xl shadow-black/40">
      {effectGroups.map((effect, index) => (
        <Link
          key={effect.id}
          href={effectPath(effect)}
          onClick={onPick}
          className="flex items-center whitespace-nowrap rounded-xl px-3 py-2 hover:bg-surface"
        >
          <span className="mr-2 text-[11px] text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-sm text-ink">{l(effect.name)}</span>
        </Link>
      ))}
    </div>
  );
}

function DesktopItem({ item, onPick }: { item: NavLink; onPick?: () => void }) {
  const { t } = useLocale();
  const menu = useMenu();
  if (!item.menu) {
    return (
      <Link href={item.href} onClick={onPick} className="shrink-0 whitespace-nowrap transition hover:text-gold">
        {t(item.key)}
      </Link>
    );
  }

  return (
    <div
      ref={menu.wrapRef}
      className="relative"
      onMouseEnter={() => menu.setOpen(true)}
      onMouseLeave={() => menu.setOpen(false)}
    >
      <Link href={item.href} onClick={onPick} className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap transition hover:text-gold">
        {t(item.key)}
        <span className={`text-[10px] ${menu.open ? "rotate-180" : ""}`}>▾</span>
      </Link>
      {menu.open ? (
        <div className="absolute top-full left-0 z-50 pt-2">
          {item.menu === "crystals" ? (
            <CrystalMenu onPick={() => { menu.setOpen(false); onPick?.(); }} />
          ) : (
            <EffectMenu onPick={() => { menu.setOpen(false); onPick?.(); }} />
          )}
        </div>
      ) : null}
    </div>
  );
}

export function TopNav({
  onPick,
  className = "",
}: {
  onPick?: () => void;
  className?: string;
}) {
  return (
    <nav className={className}>
      <div className="flex w-full flex-nowrap items-center justify-between gap-x-2">
        {topNavRow1.map((item) => (
          <DesktopItem key={item.href} item={item} onPick={onPick} />
        ))}
      </div>
      <div className="flex w-full flex-nowrap items-center justify-between gap-x-2">
        {topNavRow2.map((item) => (
          <DesktopItem key={item.href} item={item} onPick={onPick} />
        ))}
      </div>
    </nav>
  );
}

export function TopNavMobile({ onPick }: { onPick?: () => void }) {
  const { t, l } = useLocale();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="flex flex-col gap-5 text-xl">
      {topNav.map((item) => {
        if (!item.menu) {
          return (
            <Link key={item.href} href={item.href} onClick={onPick} className="text-ink">
              {t(item.key)}
            </Link>
          );
        }

        const expanded = openMenu === item.menu;
        return (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link href={item.href} onClick={onPick} className="text-ink">
                {t(item.key)}
              </Link>
              <button
                type="button"
                className="px-2 text-gold"
                aria-expanded={expanded}
                onClick={() => setOpenMenu(expanded ? null : item.menu!)}
              >
                {expanded ? "–" : "+"}
              </button>
            </div>
            {expanded && item.menu === "crystals" ? (
              <div className="mt-3 space-y-3 border-l border-gold/20 pl-4 text-base text-muted">
                {childCategories("crystals").map((child) => (
                  <Link key={child.id} href={categoryPath(child)} onClick={onPick} className="block">
                    {l(child.name)}
                  </Link>
                ))}
              </div>
            ) : null}
            {expanded && item.menu === "effects" ? (
              <div className="mt-3 space-y-3 border-l border-gold/20 pl-4 text-base text-muted">
                {effectGroups.map((effect) => (
                  <Link key={effect.id} href={effectPath(effect)} onClick={onPick} className="block">
                    {l(effect.name)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
