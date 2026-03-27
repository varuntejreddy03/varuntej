'use client';

// Experience replaces the old placeholder timeline with the real internship, freelance, and education story.
import ResumeButton from '@/components/ResumeButton';
import { experienceTimeline } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Career Path</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Professional trajectory.
            </h2>
          </div>
          <ResumeButton
            label="View Resume"
            className="bg-white/5 px-6 py-4 text-[10px] text-slate-100"
          />
        </div>

        <div className="relative pl-5 sm:pl-8">
          <div className="timeline-line" />
          <div className="space-y-10">
            {experienceTimeline.map((item) => (
              <div key={`${item.role}-${item.period}`} className="relative">
                <div className="exp-dot" />
                <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div className="pt-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">{item.period}</p>
                    <span
                      className={`mt-3 inline-flex rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.24em] ${
                        item.type === 'engineering'
                          ? 'bg-primary/10 text-primary'
                          : item.type === 'client'
                            ? 'bg-emerald-500/10 text-emerald-300'
                            : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="exp-card rounded-[2rem] p-6 lg:p-8">
                    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-white lg:text-2xl">{item.role}</h3>
                        <p className="mt-2 text-sm font-bold text-primary">
                          {item.company} • {item.meta}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-xl border border-white/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
