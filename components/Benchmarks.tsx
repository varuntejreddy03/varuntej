'use client';

// Benchmarks combines the real proof metrics with the live GitHub stats widget.
import GitHubStats from '@/components/GitHubStats';
import { benchmarkCards } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Benchmarks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benchmarks" className="border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Evidence of Work</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Numbers tied to real delivery.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <span className="bench-header-badge">Live Audit</span>
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">
              Keep the Lighthouse claim honest
            </span>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {benchmarkCards.map((item) => (
              <div key={item.title} className="benchmark-card relative overflow-hidden rounded-[2.4rem] p-7">
                <div className="scanline-effect" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                      {item.category}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                  <div className="mt-5 flex items-end gap-3">
                    <span className="impact-number">{item.impact}</span>
                    <span className="pb-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <div className="mt-7 space-y-4">
                    {item.stats.map((stat) => (
                      <div key={stat.name} className="flex items-center justify-between gap-4 text-xs">
                        <span className="font-bold uppercase tracking-[0.18em] text-slate-500">{stat.name}</span>
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="font-mono font-bold text-primary">{stat.val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 border-l border-primary/20 pl-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <GitHubStats />
        </div>
      </div>
    </section>
  );
}
