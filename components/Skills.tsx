'use client';

// Skills — Jobs24x card style with tag chips.
import { skillCategories, skillTooltips } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Skills</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            Core capabilities.
          </h2>
          <p className="mt-3 text-sm leading-[1.7] text-[muted-foreground]">
            Exact stack grouped into frontend, backend + AI, cloud delivery, and the current learning track.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[muted-foreground]">{category.name}</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                  <span className="material-symbols-outlined text-[16px]">architecture</span>
                </div>
              </div>
              <p className="mb-4 text-sm leading-[1.6] text-[muted-foreground]">{category.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="group relative">
                    <span className="inline-flex rounded-md bg-[#EEF2FF] px-2.5 py-1 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-white">
                      {skill}
                    </span>
                    <span className="absolute left-1/2 top-full z-10 mt-2 hidden w-48 -translate-x-1/2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs  shadow-lg group-hover:block" style={{ color: '#64748B' }}>
                      {skillTooltips[skill] ?? 'Production experience in live delivery workflows.'}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
