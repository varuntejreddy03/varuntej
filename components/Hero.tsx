'use client';

// Hero: availability pill → headline → intro + CTAs → moving wall of live site previews → stats.
import type { RefObject } from 'react';
import Icon from '@/components/Icon';
import SitePreview from '@/components/SitePreview';
import { useMagnetic } from '@/hooks/useMagnetic';
import { sitesShipped } from '@/lib/content';
import { industryCounts, shippedCountries, shippedSites } from '@/lib/shipped';

const wallSites = shippedSites.filter((site) => site.url || site.image);

export default function Hero() {
  const primaryBtnRef = useMagnetic() as RefObject<HTMLAnchorElement>;

  const stats = [
    { value: String(sitesShipped), label: 'Websites live in production' },
    { value: String(industryCounts.length), label: 'Industries served' },
    { value: String(shippedCountries.length), label: 'Countries: IN, UK, US, AU' },
    { value: '1', label: 'POS software product' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,75,255,0.10),transparent)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for freelance &amp; 2027 graduate roles
        </div>

        <h1 className="mt-7 max-w-[1000px] font-heading text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[64px] lg:text-[80px]">
          {sitesShipped} websites shipped.{' '}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-primary">Real businesses,</span> real
          traffic.
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-[580px] text-[17px] leading-[1.65] text-muted-foreground">
            I&apos;m Varun Tej, a full stack developer and AI engineer in Hyderabad. I design, build and launch
            websites for restaurants, clinics, interiors studios and logistics firms, and I build the systems behind
            them: ordering platforms, POS software and RAG pipelines.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              ref={primaryBtnRef}
              href="#shipped"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper shadow-lg shadow-ink/10 transition-colors hover:bg-primary"
            >
              Browse all {sitesShipped} sites
              <Icon name="arrow-right" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-ink/15 bg-surface px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>

      <div className="marquee relative mt-14 sm:mt-16" aria-label="Previews of shipped websites">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent sm:w-32" />
        <ul className="marquee-track flex w-max gap-5 py-4">
          {[...wallSites, ...wallSites].map((site, index) => (
            <li key={`${site.name}-${index}`} className="w-[260px] shrink-0 sm:w-[340px]" aria-hidden={index >= wallSites.length}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={index >= wallSites.length ? -1 : undefined}
                className="group block"
              >
                <SitePreview
                  name={site.name}
                  industry={site.industry}
                  url={site.url}
                  image={site.image}
                  width={680}
                  eager={index < 6}
                  className="transition-transform duration-300 group-hover:-translate-y-1.5"
                />
                <p className="mt-3 flex items-center justify-between px-1 text-[13px]">
                  <span className="font-medium text-ink">{site.name}</span>
                  <span className="text-muted-foreground">{site.industry.split(/[ ,]/)[0]}</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <dl className="mt-10 grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-paper py-6 pr-4 md:py-8 [&:not(:first-child)]:md:pl-6 [&:nth-child(even)]:pl-4">
              <dt className="mt-2 text-[13px] text-muted-foreground">{stat.label}</dt>
              <dd className="font-heading text-[40px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[52px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
