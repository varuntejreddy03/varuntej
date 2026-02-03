import React from 'react';
import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-white/5">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12">Project Deep-Dives</h3>
      <div 
        ref={ref}
        className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col h-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 hover:shadow-2xl transition-all">
            <div className="relative h-[200px] w-full rounded-2xl overflow-hidden mb-6">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                src={project.image} 
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-blue-300 text-sm font-medium line-clamp-2">{project.tagline}</p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Challenge</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">{project.challenge}</p>
                </div>
                
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Key Features</h5>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-lg font-bold text-xs text-center hover:opacity-90 transition-opacity"
                >
                  Live
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white py-3 rounded-lg font-bold text-xs text-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;