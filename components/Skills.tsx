'use client';

// Skills: four columns of plain lists; hover a skill to see where it was used.
import { skillCategories, skillTooltips } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="border-t border-line bg-surface py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-4 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-14 max-w-[640px]">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">Toolkit</p>
          <h2 className="font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[48px]">
            The stack behind <span className="font-serif font-normal italic">the launches.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-surface p-7">
              <h3 className="font-heading text-[18px] font-semibold tracking-[-0.02em]">{category.name}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-muted-foreground">{category.description}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    title={skillTooltips[skill]}
                    className="cursor-default rounded-full bg-muted px-3 py-1 text-[12.5px] font-medium text-ink-soft transition-colors hover:bg-ink hover:text-paper"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
