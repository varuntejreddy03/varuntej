'use client';

// Clients renders the named StaffArc client list as compact engineering-style pills.
import { clients } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Client Network</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Teams already shipped.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            10 named clients represented here, with 14 sites shipped at StaffArc across 5+ industries.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {clients.map((client) => (
            <span
              key={client}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-slate-200 transition-colors hover:border-primary/30 hover:bg-primary/10"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
