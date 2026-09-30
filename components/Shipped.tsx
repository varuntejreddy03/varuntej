'use client';

// Shipped: searchable, filterable index of every production website, plus the POS product.
import Icon from '@/components/Icon';
import { useMemo, useState } from 'react';
import { industryCounts, shippedSites, shippedSoftware, type Industry } from '@/lib/shipped';

const INITIAL_VISIBLE = 20;

function displayHost(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
}

export default function Shipped() {
  const [activeIndustry, setActiveIndustry] = useState<Industry | 'All'>('All');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return shippedSites
      .map((site, index) => ({ ...site, number: index + 1 }))
      .filter((site) => activeIndustry === 'All' || site.industry === activeIndustry)
      .filter(
        (site) =>
          !needle ||
          site.name.toLowerCase().includes(needle) ||
          site.summary.toLowerCase().includes(needle) ||
          site.industry.toLowerCase().includes(needle) ||
          (site.location?.toLowerCase().includes(needle) ?? false),
      );
  }, [activeIndustry, query]);

  const isFiltering = activeIndustry !== 'All' || query.trim().length > 0;
  const visible = isFiltering || expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  const chips: { label: Industry | 'All'; count: number }[] = [
    { label: 'All', count: shippedSites.length },
    ...industryCounts.map((entry) => ({ label: entry.industry, count: entry.count })),
  ];

  return (
    <section id="shipped" className="grain relative bg-night py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[#8FA0FF]">Shipped</p>
            <h2 className="font-heading text-[44px] font-semibold leading-[1] tracking-[-0.04em] text-paper sm:text-[72px]">
              {shippedSites.length} websites.{' '}
              <span className="font-serif font-normal italic text-[#8FA0FF]">All real clients.</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-white/60">
              Every site here was designed, built and launched for a paying business, from spice makers in
              Telangana to a pizzeria in Tasmania. Filter by industry or search for one.
            </p>
          </div>

          <label className="relative block w-full lg:w-[300px]">
            <span className="sr-only">Search websites</span>
            <Icon name="search" className="h-5 w-5 pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, city, industry"
              className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-12 pr-4 text-[15px] text-paper outline-none transition-colors placeholder:text-white/35 focus:border-[#8FA0FF] focus:bg-white/10"
            />
          </label>
        </div>

        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="group" aria-label="Filter by industry">
            {chips.map((chip) => {
              const active = activeIndustry === chip.label;
              return (
                <button
                  key={chip.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveIndustry(chip.label)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? 'border-paper bg-paper text-ink'
                      : 'border-white/15 text-white/70 hover:border-white/40 hover:text-paper'
                  }`}
                >
                  {chip.label}
                  <span className={`ml-2 tabular-nums ${active ? 'text-ink/50' : 'text-white/35'}`}>{chip.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-8 grid border-t border-white/15 lg:grid-cols-2 lg:gap-x-10">
          {visible.map((site) => {
            const body = (
              <>
                <span className="w-8 shrink-0 pt-0.5 font-heading text-[13px] tabular-nums text-white/35">
                  {String(site.number).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-[17px] font-medium leading-snug text-paper transition-colors group-hover:text-[#8FA0FF]">
                    {site.name}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-snug text-white/50">
                    {site.summary}
                    {site.location ? <span className="text-white/35"> · {site.location}</span> : null}
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px]">
                    <span className="text-white/40">{site.industry}</span>
                    {site.url ? <span className="truncate text-[#8FA0FF]/80">{displayHost(site.url)}</span> : null}
                  </span>
                </span>
                {site.url ? (
                  <Icon name="arrow-up-right" className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8FA0FF]" />
                ) : null}
              </>
            );

            return (
              <li key={site.name} className="border-b border-white/10">
                {site.url ? (
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 py-5"
                    aria-label={`${site.name} — visit ${displayHost(site.url)}`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex items-start gap-4 py-5">{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-white/50">
            No sites match &ldquo;{query}&rdquo;.{' '}
            <button
              type="button"
              className="text-[#8FA0FF] underline underline-offset-4"
              onClick={() => {
                setQuery('');
                setActiveIndustry('All');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : null}

        {hiddenCount > 0 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Show all {filtered.length} sites
              <Icon name="chevron-down" className="h-[18px] w-[18px]" />
            </button>
          </div>
        ) : null}

        <div className="mt-16 grid gap-8 rounded-3xl border border-white/15 bg-white/[0.04] p-7 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#8FA0FF]">Plus software</p>
            <h3 className="mt-3 font-heading text-[32px] font-semibold tracking-[-0.03em] text-paper sm:text-[40px]">
              {shippedSoftware.name}
            </h3>
          </div>
          <div>
            <p className="text-[15px] leading-[1.7] text-white/60">{shippedSoftware.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {shippedSoftware.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-[12px] text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
