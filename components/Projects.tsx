'use client';

// Projects — Jobs24x job-listing-style 3-column card grid.
import Image from 'next/image';
import { projectItems } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const categoryStyle: Record<string, { text: string; color: string }> = {
    ai: { text: 'AI', color: 'bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]' },
    'client-work': { text: 'Client Work', color: 'bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]' },
    'web-app': { text: 'Featured', color: 'bg-[#EEF2FF] text-primary border-[#E0E7FF]' },
  };

  return (
    <section id="projects" className="border-t border-[#F3F4F6] bg-[#FAFBFC] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Selected Works</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            Shipped systems, not placeholder cards.
          </h2>
          <p className="mt-3 text-sm leading-[1.7] text-[muted-foreground]">
            MedRAG, KMCE Cricket Portal, and the StaffArc client delivery pipeline anchor the current portfolio.
          </p>
        </div>

        <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectItems.map((project) => {
              const badge = categoryStyle[project.category] ?? categoryStyle['web-app'];
              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {/* Image */}
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute left-3 top-3 rounded-md border px-2.5 py-1 text-[11px] font-semibold ${badge.color}`}>
                      {badge.text}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-[17px] font-bold text-[#111827]">{project.title}</h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {project.tagline}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm leading-[1.6] text-[muted-foreground]">{project.description}</p>

                    {/* Features */}
                    <div className="mt-3 space-y-1.5">
                      {project.features.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex items-start gap-1.5 text-xs " style={{ color: '#64748B' }}>
                          <span className="material-symbols-outlined mt-0.5 text-sm text-primary">check_circle</span>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[#F3F4F6] bg-[#FAFBFC] px-2 py-0.5 text-[11px] font-medium text-[muted-foreground]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 ? (
                        <span className="rounded-md border border-[#F3F4F6] bg-[#FAFBFC] px-2 py-0.5 text-[11px] font-medium text-[#D1D5DB]">
                          +{project.tags.length - 4}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex-1" />

                    {/* Actions */}
                    <div className="mt-4 flex gap-2 border-t border-[#F3F4F6] pt-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#1D4ED8]"
                        >
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                          Live Demo
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#E5E7EB] py-2.5 text-xs font-semibold  transition-all hover:border-primary hover:text-primary" style={{ color: '#64748B' }}
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          Source Code
                        </a>
                      ) : null}
                      {!project.liveUrl && !project.repoUrl ? (
                        <span className="flex flex-1 items-center justify-center rounded-lg bg-[#FAFBFC] py-2.5 text-xs font-medium text-[#D1D5DB]">
                          Private Project
                        </span>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
