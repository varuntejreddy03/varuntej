'use client';

// About — Jobs24x-style clean two-column with white info card.
import { aboutStats, facts, owner } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-24">
      <div
        ref={ref}
        className={`grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14 ${isVisible ? 'section-fade is-visible' : 'section-fade'}`}
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">About Me</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            {owner.name}, building code like shipped software matters.
          </h2>
          <p className="mt-5 text-sm leading-[1.7] " style={{ color: '#64748B' }}>
            I work with an engineering-first mindset: real launches, measurable performance, clean delivery, and AI systems grounded in production constraints instead of demo logic.
          </p>
          <p className="mt-3 text-sm leading-[1.7] " style={{ color: '#64748B' }}>
            Current role: <span className="font-semibold text-[#111827]">Frontend Developer Intern at StaffArc</span>. Independent work: <span className="font-semibold text-primary">4 end-to-end freelance builds</span> with 0 critical post-launch defects.
          </p>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#F3F4F6] bg-[#FAFBFC] p-4">
                <p className="font-heading text-[28px] font-bold tracking-tight text-[#111827]">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[muted-foreground]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick facts card */}
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-7">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-[muted-foreground]">Quick Facts</p>
          <div className="space-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                  <span className="material-symbols-outlined text-[20px]">{fact.icon}</span>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[muted-foreground]">{fact.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#111827]">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8]"
          >
            Get In Touch
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
