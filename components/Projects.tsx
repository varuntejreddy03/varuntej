'use client';

// Selected work: editorial case-study rows — index, story, stack on the left; key metrics on the right.
import Icon from '@/components/Icon';
import { projectItems } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">Selected work</p>
            <h2 className="max-w-[640px] font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[52px]">
              Systems with real users, <span className="font-serif font-normal italic">not demos.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-[15px] leading-[1.65] text-muted-foreground">
            AI, full stack and business software. The marketing sites come after, and there are a lot of them.
          </p>
        </div>

        <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
          <div className="border-t border-ink">
            {projectItems.map((project, index) => (
              <article
                key={project.id}
                className="group grid gap-8 border-b border-line py-10 lg:grid-cols-[80px_1fr_380px] lg:gap-10 lg:py-14"
              >
                <p className="font-heading text-[15px] font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <div>
                  <p className="text-[13px] font-medium text-primary">{project.kind}</p>
                  <h3 className="mt-2 font-heading text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[38px]">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-serif text-[22px] italic leading-snug text-ink-soft">{project.tagline}</p>
                  <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary"
                      >
                        Visit live site
                        <Icon name="arrow-up-right" className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink"
                      >
                        Source code
                        <Icon name="arrow-up-right" className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <dl className="grid grid-cols-3 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-1">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col-reverse bg-surface p-4 sm:p-5">
                      <dt className="mt-1 text-[12px] text-muted-foreground">{metric.label}</dt>
                      <dd className="font-heading text-[20px] font-semibold tracking-[-0.02em] text-ink sm:text-[26px]">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
