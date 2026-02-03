import React, { memo } from 'react';
import { SkillCategory } from './types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../skills.css';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const { ref, isVisible } = useScrollAnimation();

  // Production: Calculate marquee skills once
  const marqueeSkills = React.useMemo(() => {
    const all = skillCategories.flatMap(cat => cat.skills);
    return [...all, ...all, ...all, ...all];
  }, [skillCategories]);

  return (
    <section id="skills" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-4">
              The Specialization
              <span className="h-px w-12 bg-primary/30" />
            </h3>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
              Core <span className="text-primary italic">Capabilities.</span>
            </h2>
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest max-w-[280px]">
            Engineering foundations meets market-ready full-cycle development.
          </p>
        </div>

        {/* Dynamic Tech Marquee */}
        <div className="marquee-container mb-24 py-6 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="marquee-content flex gap-12 items-center">
            {marqueeSkills.map((skill, i) => (
              <span key={i} className="text-3xl lg:text-5xl font-black text-slate-200 dark:text-slate-800/50 hover:text-primary transition-all duration-500 cursor-default uppercase tracking-tighter whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Specialized Logic Blocks */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.name}
              className={`group relative skill-card rounded-[2.5rem] p-10 flex flex-col transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="line-accent" />

              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Category 0{index + 1}</span>
                  <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform duration-500">architecture</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{cat.name}</h4>
              </div>

              <div className="flex-grow">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic mb-8 border-l border-primary/20 pl-4">
                  "{cat.description}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-badge px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                <span className="text-[8px] font-black uppercase tracking-widest">Production Ready</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <div className="w-1 h-1 rounded-full bg-primary/50" />
                  <div className="w-1 h-1 rounded-full bg-primary/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);