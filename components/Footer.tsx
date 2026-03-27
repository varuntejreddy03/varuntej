'use client';

// Footer closes the portfolio with updated contact links and the requested production version label.
import { owner } from '@/lib/content';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative mt-8 border-t border-white/5 pt-14 sm:mt-12 lg:pt-20">
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-2xl font-black tracking-tight text-white">
            {owner.name} <span className="text-primary italic">/ {owner.role}</span>
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
            Full stack delivery, AI systems, production sites, and a portfolio that stays grounded in real shipped work.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Connect</p>
          <div className="space-y-3 text-sm text-slate-300">
            <a href={owner.github} target="_blank" rel="noreferrer" className="block hover:text-white">
              GitHub
            </a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${owner.email}`} className="block hover:text-white">
              {owner.email}
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">System Status</p>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[9px] font-black uppercase tracking-[0.24em] text-slate-500">Version</p>
              <p className="mt-2 text-sm font-bold text-white">v3.0 (Production)</p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-slate-200 transition-colors hover:border-primary/30"
            >
              Back to top
              <span className="material-symbols-outlined text-base">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/5 py-6 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
        <p>{owner.location} • {owner.portfolio.replace('https://', '')}</p>
      </div>
    </footer>
  );
}
