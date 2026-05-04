'use client';

import { owner } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#E5E7EB] pt-12">
      <div className="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-heading text-[18px] font-bold text-[#111827]">
            {owner.name} <span className="text-primary">/ {owner.role}</span>
          </p>
          <p className="mt-2 max-w-md text-sm leading-[1.7] text-[muted-foreground]">
            Full stack delivery, AI systems, production sites, and a portfolio grounded in real shipped work.
          </p>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[muted-foreground]">Connect</p>
          <div className="space-y-2 text-sm " style={{ color: '#64748B' }}>
            <a href={owner.github} target="_blank" rel="noreferrer" className="block hover:text-primary">GitHub</a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" className="block hover:text-primary">LinkedIn</a>
            <a href={`mailto:${owner.email}`} className="block hover:text-primary">{owner.email}</a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[muted-foreground]">Info</p>
          <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFBFC] p-3">
            <p className="text-[11px] text-[muted-foreground]">Version</p>
            <p className="mt-0.5 text-sm font-semibold text-[#111827]">v3.0 (Production)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-[#E5E7EB] py-5 text-xs text-[muted-foreground] md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
        <p>{owner.location} · {owner.portfolio.replace('https://','')}</p>
      </div>
    </footer>
  );
}
