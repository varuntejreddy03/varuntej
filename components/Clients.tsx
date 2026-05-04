'use client';

// Clients — Jobs24x trusted-company section.
import { clients } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="py-20 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Client Network</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            Trusted by clients and shipped brands
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.7] text-[muted-foreground]">
            19 named clients across restaurants, interiors, agencies, wellness, forensics, SaaS, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="text-sm font-semibold text-[#374151]">{client}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#10B981]">verified</span>
            <span className="font-medium " style={{ color: '#64748B' }}>0 Critical Bugs</span>
          </div>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
            <span className="font-medium " style={{ color: '#64748B' }}>100% On-Time</span>
          </div>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#F59E0B]">star</span>
            <span className="font-medium " style={{ color: '#64748B' }}>Repeat Business</span>
          </div>
        </div>
      </div>
    </section>
  );
}
