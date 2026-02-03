import React, { memo } from 'react';
import { Project } from './types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { ref, isVisible } = useScrollAnimation();

  // Production: Stable memoized project list for infinite scroll
  const displayProjects = React.useMemo(() => [...projects, ...projects, ...projects], [projects]);

  return (
    <section id="projects" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="px-4 lg:px-0 mb-12 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-4">
            Selected Works
            <span className="h-px w-12 bg-primary/30" />
          </h3>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
            Digital <span className="text-primary italic">Showcase.</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Auto-Scrolling active</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div
        ref={ref}
        className={`projects-marquee-container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="projects-marquee-content py-10">
          {displayProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="project-card-premium flex-none w-[85vw] sm:w-[500px]"
            >
              <div className="group h-full flex flex-col bg-white/70 dark:bg-[#0a0f1e]/60 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-700">
                {/* Project Image Hub */}
                <div className="relative h-[280px] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    src={project.image}
                    alt={project.title}
                    loading="lazy" // Production optimized attribute
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  <div className="absolute bottom-6 left-8">
                    <span className="px-5 py-2 bg-primary text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-8 right-8 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl text-white rounded-2xl border border-white/20 hover:bg-primary transition-all hover:scale-110"
                      aria-label={`View live site for ${project.title}`}
                    >
                      <span className="material-symbols-outlined text-xl">open_in_new</span>
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl shadow-xl hover:bg-black transition-all hover:scale-110"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <span className="material-symbols-outlined text-xl">code</span>
                    </a>
                  </div>
                </div>

                {/* Content Hub */}
                <div className="p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-6">
                      <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-2 uppercase">{project.title}</h4>
                      <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{project.tagline}</p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interaction Guide */}
      <div className="mt-12 flex flex-col items-center gap-4 opacity-40">
        <div className="flex gap-2">
          <div className="w-8 h-1 bg-primary rounded-full" />
          <div className="w-2 h-1 bg-slate-300 dark:bg-white/20 rounded-full" />
          <div className="w-2 h-1 bg-slate-300 dark:bg-white/20 rounded-full" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500">Hover to pause & inspect</span>
      </div>
    </section>
  );
};

export default memo(Projects);