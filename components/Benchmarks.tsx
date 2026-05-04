'use client';

// Benchmarks — Jobs24x card style evidence-of-work.
import GitHubStats from '@/components/GitHubStats';
import { benchmarkCards } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Benchmarks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benchmarks" className="py-20 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Evidence of Work</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            Numbers tied to real delivery.
          </h2>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {benchmarkCards.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-card">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-primary">{item.category}</p>
                <h3 className="font-heading text-[17px] font-bold text-[#111827]">{item.title}</h3>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-heading text-[28px] font-bold tracking-tight text-[#111827]">{item.impact}</span>
                  <span className="pb-1 text-[11px] font-medium uppercase tracking-wider text-[muted-foreground]">{item.label}</span>
                </div>
                <div className="mt-4 space-y-2">
                  {item.stats.map((stat) => (
                    <div key={stat.name} className="flex items-center justify-between text-xs">
                      <span className="text-[muted-foreground]">{stat.name}</span>
                      <span className="font-semibold text-primary">{stat.val}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 border-l-2 border-[#E0E7FF] pl-3 text-sm leading-[1.6] text-[muted-foreground]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <GitHubStats />
        </div>
      </div>
    </section>
  );
}
