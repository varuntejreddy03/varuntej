'use client';

// Hero: pitch + CTAs on the left, a collage of real work on the right; stats row and client names below.
import type { RefObject } from 'react';
import Icon from '@/components/Icon';
import SitePreview from '@/components/SitePreview';
import { useMagnetic } from '@/hooks/useMagnetic';
import { sitesShipped } from '@/lib/content';
import { industryCounts, shippedCountries } from '@/lib/shipped';

const trustedBy = [
  { name: 'Brent Street Pizza', serif: false },
  { name: 'Almacura', serif: true },
  { name: 'TelicomLink', serif: false },
  { name: 'Aikya Spaces', serif: true },
  { name: 'The Market Titans', serif: false },
  { name: 'Prime Boda', serif: false },
];

function PhoneMock() {
  const fields = ['Outlet', 'Cash collected', 'UPI collected', 'Closing stock'];
  return (
    <div className="h-full rounded-[28px] bg-ink p-1.5 shadow-[0_32px_64px_-24px_rgba(21,20,15,0.45)] sm:rounded-[34px] sm:p-2">
      <div className="flex h-full flex-col gap-2 rounded-[22px] bg-white px-3 py-4 sm:gap-2.5 sm:rounded-[27px] sm:px-4 sm:py-5">
        <div className="flex items-center justify-between">
          <span className="font-heading text-[10px] font-bold sm:text-xs">OptiFirst POS</span>
          <span className="hidden text-[10px] text-[#6B685F] sm:inline">Daily report</span>
        </div>
        <p className="font-heading text-sm font-semibold tracking-[-0.02em] sm:text-[17px]">Today&apos;s sales</p>
        {fields.map((field, index) => (
          <div key={field} className={`flex flex-col gap-1 ${index === 0 ? 'hidden sm:flex' : ''}`}>
            <span className="hidden text-[10px] font-semibold text-ink-soft sm:block">{field}</span>
            <span className="flex h-[26px] items-center rounded-lg border border-line px-2 text-[9px] text-[#6B685F] sm:h-[30px] sm:px-2.5 sm:text-[11px]">
              <span className="sm:hidden">{field}</span>
              <span className="hidden sm:inline">{index === 0 ? 'Select outlet' : index === 3 ? 'Enter count' : 'Enter amount'}</span>
            </span>
          </div>
        ))}
        <span className="mt-auto flex h-8 items-center justify-center rounded-[10px] bg-primary text-[10px] font-semibold text-white sm:h-9 sm:text-xs">
          Submit report
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const primaryBtnRef = useMagnetic() as RefObject<HTMLAnchorElement>;

  const stats = [
    { value: String(sitesShipped), label: 'Business websites live' },
    { value: String(industryCounts.length), label: 'Industries served' },
    { value: String(shippedCountries.length), label: 'Countries: India, UK, US, Australia' },
    { value: '1', label: 'POS software product shipped' },
  ];

  return (
    <>
      <section id="home" className="pt-[68px] lg:pt-[88px]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-14 lg:pt-16">
          <div className="flex flex-col items-start">
            <div className="inline-flex h-8 items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 text-[13px] font-medium text-ink-soft sm:h-9 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#1A9E5A]" />
              Available for new projects<span className="hidden sm:inline"> · Hyderabad, India</span>
            </div>

            <h1 className="mt-6 font-heading text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:mt-7 sm:text-[60px] lg:text-[76px] lg:leading-none">
              Websites and custom software for businesses{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-primary">ready to grow.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.6] text-muted-foreground sm:mt-7 lg:text-[19px]">
              I&apos;m Varun Tej, a full stack developer in Hyderabad. I&apos;ve designed, built and launched{' '}
              <strong className="font-semibold text-ink">{sitesShipped} websites</strong> for restaurants, clinics,
              interiors studios and logistics firms, plus the ordering platforms and POS software behind them.
            </p>

            <div className="mt-7 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:gap-3">
              <a
                ref={primaryBtnRef}
                href="#contact"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Start a project
                <Icon name="arrow-right" className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#shipped"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#CFCAC0] bg-surface px-7 text-base font-semibold text-ink transition-colors hover:border-ink"
              >
                See {sitesShipped} live sites
              </a>
            </div>

            <p className="mt-6 text-sm leading-[1.6] text-muted-foreground sm:mt-10">
              <span className="mr-2 font-semibold text-ink">Clients in</span>
              {shippedCountries.join(' · ')}
            </p>
          </div>

          <div className="relative mx-auto aspect-[520/660] w-full max-w-[520px]" aria-label="Examples of recent work">
            <div className="absolute right-0 top-0 w-[73%]">
              <SitePreview name="TelicomLink" industry="Technology" url="https://telicomlink.com" width={760} eager />
            </div>
            <div className="absolute left-0 top-[30%] w-[77%]">
              <SitePreview name="Brent Street Pizza" industry="Food & Hospitality" url="https://brentstreetpizza.com.au" width={800} eager />
            </div>
            <div className="absolute right-0 top-[36%] h-[64%] w-[41%]">
              <PhoneMock />
            </div>
            <div className="absolute left-[4.6%] top-[76%] flex w-[60%] items-center gap-3 rounded-2xl border border-line bg-white px-3.5 py-3 shadow-[0_20px_40px_-20px_rgba(21,20,15,0.30)] sm:w-[52%] sm:px-4 sm:py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-[#2439C9] sm:h-10 sm:w-10">
                <Icon name="bell" className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold text-ink sm:text-sm">New order received</span>
                <span className="mt-0.5 block truncate text-[11px] text-muted-foreground sm:text-xs">Palavu Centre · live admin</span>
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#1A9E5A]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[1200px] px-5 sm:px-8 lg:mt-6">
        <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse justify-center gap-1.5 py-7 lg:gap-2.5 lg:py-[52px] ${
                index % 2 === 1 ? 'border-l border-line pl-4 lg:pl-8' : 'pr-3'
              } ${index >= 2 ? 'border-t border-line lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l lg:pl-8' : ''}`}
            >
              <dt className="text-[13px] text-muted-foreground lg:text-[15px]">{stat.label}</dt>
              <dd className="font-heading text-[44px] font-semibold leading-none tracking-[-0.04em] text-ink lg:text-[64px]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8" aria-label="Clients">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Trusted by businesses like</p>
        <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-ink-soft lg:justify-between">
          {trustedBy.map((client) => (
            <li
              key={client.name}
              className={
                client.serif
                  ? 'font-serif text-[22px] italic lg:text-[26px]'
                  : 'font-heading text-[18px] font-semibold tracking-[-0.02em] lg:text-[22px]'
              }
            >
              {client.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
