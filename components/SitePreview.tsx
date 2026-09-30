'use client';

// Browser-framed website preview: live screenshot when a URL exists, designed cover underneath as fallback.
import { useEffect, useState } from 'react';
import { displayHost, industryTone, initials, screenshotUrl } from '@/lib/preview';
import type { Industry } from '@/lib/shipped';

type SitePreviewProps = {
  name: string;
  industry: Industry;
  url?: string;
  image?: string;
  width?: number;
  eager?: boolean;
  className?: string;
};

export default function SitePreview({ name, industry, url, image, width = 800, eager = false, className = '' }: SitePreviewProps) {
  const [state, setState] = useState<'loading' | 'pending' | 'loaded' | 'failed'>('loading');
  const [attempt, setAttempt] = useState(0);
  const tone = industryTone[industry];
  const base = image ?? (url ? screenshotUrl(url, width) : undefined);
  const src = base && attempt > 0 ? `${base}&retry=${attempt}` : base;

  // A freshly requested screenshot takes a few seconds to render server-side; retry a couple of times.
  useEffect(() => {
    if (state !== 'pending') return;
    if (attempt >= 3) {
      setState('failed');
      return;
    }
    const timer = window.setTimeout(() => {
      setAttempt((current) => current + 1);
      setState('loading');
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [state, attempt]);

  function settle(img: HTMLImageElement) {
    if (image || img.naturalWidth >= width - 1) setState('loaded');
    else setState('pending');
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.18)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F4F3EF] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-2 py-0.5 text-center text-[10px] text-black/45">
          {url ? displayHost(url) : name.toLowerCase().replace(/[^a-z0-9]+/g, '')}
        </span>
      </div>

      <div className="relative aspect-[16/10]" style={{ backgroundColor: tone.bg }}>
        <div className="absolute inset-0 flex flex-col justify-between p-[7%]" style={{ color: tone.ink }}>
          <span className="font-heading text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">{industry}</span>
          <div>
            <span className="block font-serif text-[clamp(28px,5vw,56px)] italic leading-none opacity-25">{initials(name)}</span>
            <span className="mt-2 block font-heading text-[clamp(15px,1.6vw,22px)] font-semibold leading-tight tracking-[-0.02em]">
              {name}
            </span>
          </div>
        </div>

        {src && (state === 'loading' || state === 'loaded') ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote screenshot service, sizes vary
          <img
            key={src}
            src={src}
            alt={`Screenshot of ${name} website`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            // Cached images can finish before hydration attaches onLoad, so also check on mount.
            ref={(img) => {
              if (img?.complete && img.naturalWidth > 0 && state === 'loading') settle(img);
            }}
            // mShots returns a small "generating" placeholder on first request; keep the cover until the real shot exists.
            onLoad={(event) => settle(event.currentTarget)}
            onError={() => setState('failed')}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
              state === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}
      </div>
    </div>
  );
}
