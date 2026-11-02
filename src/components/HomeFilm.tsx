"use client";

import Link from "next/link";
import { CertificationRow } from "@/components/CertificationRow";
import { useLocale } from "@/components/LocaleProvider";
import { featuredProducts, imageSrc, productPath, site } from "@/lib/content";

export function HomeFilm() {
  const { t, l } = useLocale();
  const pieces = featuredProducts();

  return (
    <div className="home-film">
      <section className="hero-act" data-sc-act="flow" data-sc-drift="#120a24">
        <div className="hero-stage">
          <div className="hero-atmo" data-sc-parallax="-1.3" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-kicker">Hong Kong</p>
            <h1 className="hero-title font-display">
              JOKAngel
              <span>Crystal</span>
            </h1>
            <p className="hero-lead">{l(site.heroLine)}</p>
            <div className="hero-actions">
              <Link
                href="/products/"
                className="rounded-full bg-gold px-5 py-2.5 text-sm text-bg transition hover:bg-gold-dim"
              >
                {t("hero.ctaProducts")}
              </Link>
              <Link
                href="/contact/"
                className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition hover:border-gold"
              >
                {t("hero.ctaContact")}
              </Link>
            </div>
          </div>
          <div className="hero-subject" data-sc-parallax="-0.45">
            <div className="hero-stone" data-sc-tilt="8" data-sc-spotlight>
              <img src="/images/brand/emblem.jpg" alt="JOKAngel Crystal" />
              <svg className="facet-ring" viewBox="0 0 100 140" aria-hidden="true">
                <path pathLength={1} d="M50 4 L82 36 L74 96 L50 136 L26 96 L18 36 Z" />
              </svg>
            </div>
          </div>
          <div className="hero-fore" data-sc-parallax="0.85" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
      </section>

      <section data-sc-act="pin" data-sc-span="2.4" data-sc-drift="#1a1033">
        <div className="about-stage" data-sc-stage>
          <div>
            <h2 className="about-kicker font-display">{t("about.title")}</h2>
            <div className="about-beats">
              <p className="font-display" data-sc-cue="0 0.46 0">
                {t("about.beat1")}
              </p>
              <p className="font-display" data-sc-cue="0.28 0.7" data-sc-kinetic="words">
                {t("about.beat2")}
              </p>
              <p className="font-display" data-sc-cue="0.58 1">
                {t("about.beat3")}
              </p>
            </div>
          </div>
          <div className="about-certs">
            <CertificationRow />
          </div>
        </div>
      </section>

      <section data-sc-act="pan" data-sc-span="3.6" data-sc-drift="#221445">
        <div className="rail-stage" data-sc-stage>
          <div className="piece-rail" data-sc-pan="0.06">
            <div className="rail-note">
              <h2 className="font-display">{t("featured.title")}</h2>
            </div>
            {pieces.map((product) => (
              <Link key={product.id} href={productPath(product)} className="rail-card" data-sc-tilt="6" data-sc-spotlight>
                <img src={imageSrc(product.images[0])} alt={l(product.name)} />
                <div>
                  <p className="text-xs tracking-[0.2em] text-gold">{product.sku}</p>
                  <h3 className="mt-2 font-display text-2xl">{l(product.name)}</h3>
                  <p>{l(product.summary)}</p>
                </div>
              </Link>
            ))}
            <Link href="/products/" className="rail-note rail-end font-display">
              {t("hero.ctaProducts")}
            </Link>
          </div>
        </div>
      </section>

      <section className="paths" data-sc-act="flow" data-sc-drift="#1a1033">
        <div className="paths-grid">
          <Link
            href="/blog/story/"
            className="path-lead"
            data-sc-reveal="iris"
            data-sc-reveal-at="0.12 0.62"
          >
            <h2 className="font-display">{t("story.teaser")}</h2>
          </Link>
          <div className="path-side">
            <Link href="/blog/cases/">
              <h3 className="font-display">{t("cases.teaser")}</h3>
            </Link>
            <Link href="/others/">
              <h3 className="font-display">{t("others.teaser")}</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
