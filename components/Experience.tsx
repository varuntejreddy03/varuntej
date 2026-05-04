'use client';

// Experience — Jobs24x clean vertical timeline.
import ResumeButton from '@/components/ResumeButton';
import { experienceTimeline } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Career Path</p>
            <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
              Professional trajectory.
            </h2>
          </div>
          <ResumeButton
            label="View Resume"
            className="border-[#E5E7EB] bg-white px-5 py-2.5 text-sm text-[#374151]"
            showCount={false}
          />
        </div>

        <div className="relative pl-6">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#E5E7EB]" />

          <div className="space-y-6">
            {experienceTimeline.map((item) => (
              <div key={`${item.role}-${item.period}`} className="relative">
                {/* Dot */}
                <div className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-primary bg-white" style={{ transform: 'translateX(-50%)' }} />

                <div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:gap-6">
                  <div>
                    <p className="text-xs font-medium text-[muted-foreground]">{item.period}</p>
                    <span className={`mt-1.5 inline-flex rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                      item.type === 'engineering' ? 'bg-[#EEF2FF] text-primary' :
                      item.type === 'client' ? 'bg-[#ECFDF5] text-[#059669]' :
                      'bg-[#F3F4F6] text-gray-500'
                    }`}>
                      {item.type}
                    </span>
                  </div>

                  <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-card">
                    <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="font-heading text-[16px] font-bold text-[#111827]">{item.role}</h3>
                        <p className="mt-0.5 text-sm font-semibold text-primary">
                          {item.company} · {item.meta}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-[#F3F4F6] bg-[#FAFBFC] px-2 py-0.5 text-[11px] font-medium text-[muted-foreground]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm leading-[1.6] " style={{ color: '#64748B' }}>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
