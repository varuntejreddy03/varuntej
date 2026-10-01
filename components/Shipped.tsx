'use client';

// Portfolio: every shipped website as a preview card, filterable by industry.
import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';
import SitePreview from '@/components/SitePreview';
import { displayHost } from '@/lib/preview';
import { industryCounts, shippedSites, type Industry } from '@/lib/shipped';

const INITIAL_VISIBLE = 8;

// Shown first under "All" — strongest, most recognisable work.
const featured = [
  'Brent Street Pizza',
  'Almacura',
  'TelicomLink',
  'Aikya Spaces',
  'Zionledusa',
  'The Market Titans',
  'Joyous Food Factory',
  'Prime Boda Services Limited',
];

const orderedSites = [
  ...featured.map((name) => shippedSites.find((site) => site.name === name)).filter((site) => site !== undefined),
  ...shippedSites.filter((site) => !featured.includes(site.name)),
];

export default function Shipped() {
  const [activeIndustry, setActiveIndustry] = useState<Industry | 'All'>('All');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () => orderedSites.filter((site) => activeIndustry === 'All' || site.industry === activeIndustry),
    [activeIndustry],
  );
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  const chips: { label: Industry | 'All'; count: number }[] = [
    { label: 'All', count: shippedSites.length },
    ...industryCounts.map((entry) => ({ label: entry.industry, count: entry.count })),
  ];

  return (
    <section id="shipped" className="bg-night py-[72px] text-white lg:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-light lg:text-[13px]">Portfolio</p>
            <h2 className="mt-3 font-heading text-[44px] font-semibold leading-none tracking-[-0.04em] text-white lg:mt-4 lg:text-[68px]">
              {shippedSites.length} websites,{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent-light">all live.</span>
            </h2>
          </div>
          <p className="text-base leading-[1.6] text-white/65 lg:text-[17px]">
            Every one designed, built and launched for a paying business, from spice makers in Telangana to a pizzeria in
            Tasmania.
          </p>
        </div>

        <div className="-mx-5 mt-7 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:mt-11">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:gap-2.5" role="group" aria-label="Filter by industry">
            {chips.map((chip) => {
              const active = activeIndustry === chip.label;
              return (
                <button
                  key={chip.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setActiveIndustry(chip.label);
                    setExpanded(false);
                  }}
                  className={`inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm transition-colors lg:h-10 ${
                    active
                      ? 'border-white bg-white font-semibold text-ink'
                      : 'border-white/20 font-medium text-white/80 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {chip.label}
                  <span className={`tabular-nums ${active ? 'text-[#6B685F]' : 'text-white/45'}`}>{chip.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 lg:mt-10 lg:grid-cols-4 lg:gap-y-8">
          {visible.map((site) => (
            <li key={site.name} className="flex flex-col gap-2.5 lg:gap-3.5">
              {site.url ? (
                <a href={site.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Visit ${site.name}`}>
                  <SitePreview
                    name={site.name}
                    industry={site.industry}
                    url={site.url}
                    image={site.image}
                    width={600}
                    className="border-white/10 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </a>
              ) : (
                <SitePreview name={site.name} industry={site.industry} image={site.image} width={600} className="border-white/10" />
              )}
              <div>
                <p className="text-sm font-semibold leading-snug text-white lg:text-base">{site.name}</p>
                <p className="mt-1 text-[13px] leading-[1.45] text-white/65 lg:text-sm">
                  {site.summary}
                  {site.location ? <span className="text-white/45"> · {site.location}</span> : null}
                </p>
                {site.url ? (
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex max-w-full items-center gap-1 text-xs font-semibold text-accent-light hover:text-white lg:text-[13px]"
                  >
                    <span className="truncate">{displayHost(site.url)}</span>
                    <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="mt-2 text-xs text-white/50 lg:text-[13px]">Delivered · link on request</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p className="text-[15px] text-white/60">
            Showing {visible.length} of {filtered.length} · {activeIndustry === 'All' ? 'all industries' : activeIndustry}
          </p>
          {filtered.length > visible.length ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              {activeIndustry === 'All' ? `View all ${filtered.length} websites` : `View all ${filtered.length}`}
              <Icon name="chevron-down" className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
