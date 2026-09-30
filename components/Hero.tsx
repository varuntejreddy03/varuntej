'use client';

// Hero: availability pill → editorial headline → CTAs → live-derived stats → client ticker.
import Icon from '@/components/Icon';
import type { RefObject } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { owner, sitesShipped } from '@/lib/content';
import { industryCounts, shippedCountries, shippedSites } from '@/lib/shipped';

export default function Hero() {
  const primaryBtnRef = useMagnetic() as RefObject<HTMLAnchorElement>;

  const stats = [
    { value: String(sitesShipped), label: 'Websites live in production' },
    { value: String(industryCounts.length), label: 'Industries served' },
    { value: String(shippedCountries.length), label: 'Countries: IN, UK, US, AU' },
    { value: '1', label: 'POS software product' },
  ];

  const tickerNames = shippedSites.map((site) => site.name);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for freelance &amp; 2027 graduate roles
        </div>

        <h1 className="mt-8 max-w-[980px] font-heading text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[68px] lg:text-[88px]">
          I build websites businesses{' '}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-primary">run on</span>, and AI that
          actually works.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-[560px] text-[17px] leading-[1.65] text-muted-foreground">
            I&apos;m {owner.name}, a full stack developer and AI engineer in Hyderabad. I&apos;ve shipped{' '}
            <span className="font-semibold text-ink">{sitesShipped} production websites</span> for restaurants,
            clinics, interiors studios, logistics firms and tech companies, alongside RAG pipelines and full
            stack apps.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              ref={primaryBtnRef}
              href="#shipped"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-primary"
            >
              See all {sitesShipped} sites
              <Icon name="arrow-right" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-full border border-ink/15 bg-surface px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              Selected work
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-paper py-6 pr-4 md:py-8 [&:not(:first-child)]:md:pl-6 [&:nth-child(even)]:pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-[40px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[52px]">
                {stat.value}
              </dd>
              <p aria-hidden="true" className="mt-2 text-[13px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>

      <div className="marquee relative mt-4 border-y border-line bg-surface py-4" aria-hidden="true">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...tickerNames, ...tickerNames].map((name, index) => (
            <span key={`${name}-${index}`} className="flex items-center gap-8 font-heading text-[15px] font-medium text-ink-soft">
              {name}
              <span className="h-1 w-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
