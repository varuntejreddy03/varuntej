'use client';

// Projects keeps the marquee showcase but swaps in the real project and client-delivery data.
import Image from 'next/image';
import { projectItems } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const displayProjects = [...projectItems, ...projectItems];

  return (
    <section id="projects" className="overflow-hidden border-t border-white/5 py-14 lg:py-24">
      <div className="mb-10 flex flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between lg:px-0">
        <div>
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Selected Works</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Shipped systems, not placeholder cards.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          MedRAG, KMCE Cricket Portal, and the StaffArc client delivery pipeline anchor the current portfolio.
        </p>
      </div>

      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="projects-marquee-container">
          <div className="projects-marquee-content py-6">
            {displayProjects.map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="group project-card-premium project-glow-card relative flex w-[88vw] max-w-[560px] flex-none flex-col overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#101723]/85 shadow-2xl backdrop-blur-3xl"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 88vw, 560px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/15 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[9px] font-black uppercase tracking-[0.28em] text-white backdrop-blur-xl">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white">{project.title}</h3>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                      {project.tagline}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-slate-400">{project.description}</p>

                    <div className="mt-6 space-y-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-xs leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white"
                        >
                          Live
                          <span className="material-symbols-outlined text-base">open_in_new</span>
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-slate-200"
                        >
                          Code
                          <span className="material-symbols-outlined text-base">code</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
