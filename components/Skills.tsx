import React from 'react';
import { SkillCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-white/5">
      <div 
        ref={ref}
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12">The Specialization</h3>
        <div className="grid gap-12">
          {skillCategories.map((cat, index) => (
            <div 
              key={cat.name} 
              className={`flex flex-col md:flex-row gap-8 items-start transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="md:w-1/3">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.name}</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-primary/20 pl-6">
                  "{cat.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;