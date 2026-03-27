'use client';

// About replaces placeholder counts with the real production metrics and personal metadata.
import { aboutStats, facts, owner } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div
        ref={ref}
        className={`relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24 ${isVisible ? 'section-fade is-visible' : 'section-fade'}`}
      >
        <div>
          <p className="mb-6 text-[10px] font-black uppercase tracking-[0.42em] text-primary">The Persona</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {owner.name}, building code like shipped software matters.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I work with an engineering-first mindset: real launches, measurable performance, clean delivery, and AI systems grounded in production constraints instead of demo logic.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Current role: <span className="font-bold text-white">Frontend Developer Intern at StaffArc</span>. Independent work: <span className="font-bold text-primary">4 end-to-end freelance builds</span> with 0 critical post-launch defects.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-5">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.28em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-br from-primary/20 to-sky-400/10 blur-xl opacity-70" />
          <div className="relative rounded-[3rem] border border-white/10 bg-[#101723]/80 p-8 shadow-2xl backdrop-blur-3xl lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-slate-500">Quick Facts</p>
              <span className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-7">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <span className="material-symbols-outlined">{fact.icon}</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-500">{fact.label}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-100">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 flex items-center justify-between rounded-[1.8rem] bg-white px-5 py-4 text-slate-900 transition-transform hover:scale-[1.01]"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.34em]">Initiate Contact</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
