'use client';

import { owner } from '@/lib/content';

export default function Footer({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  const linkClass = `transition-colors ${dark ? 'hover:text-white' : 'hover:text-ink'}`;

  return (
    <footer className={`border-t ${dark ? 'border-white/10' : 'border-line'}`}>
      <div
        className={`mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:py-10 lg:text-sm ${
          dark ? 'text-white/50' : 'text-muted-foreground'
        }`}
      >
        <p>
          © {new Date().getFullYear()} {owner.name} · Websites &amp; custom software, Hyderabad
        </p>
        <div className="flex gap-5">
          <a href={owner.github} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={owner.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href="/resume" className={linkClass}>
            Resume
          </a>
          <a href={dark ? '/' : '#home'} className={linkClass}>
            {dark ? 'Portfolio' : 'Back to top'}
          </a>
        </div>
      </div>
    </footer>
  );
}
