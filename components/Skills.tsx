'use client';

// Skills organizes the full stack into the requested four groups and adds hover tooltips.
import { skillCategories, skillTooltips } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const marqueeSkills = skillCategories.flatMap((group) => group.skills);

  return (
    <section id="skills" className="relative overflow-hidden border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Capability Map</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Core capabilities.</h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Exact stack grouped into frontend, backend + AI, cloud delivery, and the current learning track.
          </p>
        </div>

        <div className="marquee-container mb-12 rounded-[2rem] border border-white/5 bg-white/[0.03] py-5">
          <div className="marquee-content flex gap-10">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="whitespace-nowrap text-2xl font-black uppercase tracking-tight text-slate-700 sm:text-4xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-card rounded-[2rem] p-6">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">{category.name}</p>
                <span className="material-symbols-outlined text-primary">architecture</span>
              </div>
              <p className="mb-6 text-sm leading-7 text-slate-400">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="group relative">
                    <span className="skill-badge inline-flex rounded-xl px-3 py-2 text-[10px] uppercase tracking-[0.22em]">
                      {skill}
                    </span>
                    <span className="skill-tooltip absolute left-1/2 top-full z-10 hidden w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-[10px] normal-case tracking-normal text-slate-300 shadow-2xl group-hover:block">
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
