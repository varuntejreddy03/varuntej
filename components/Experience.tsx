import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../experience.css';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const history = [
    {
      role: 'Full Stack Web Development Intern',
      company: 'StaffArc (Early-Stage Startup)',
      period: 'Feb 2026 — Present',
      desc: 'Architecting production-ready frontend ecosystems for B2B clients. Reduced UI latency by 30% through optimized state management and asset delivery pipelines with React and Next.js.',
      tags: ['System Arch', 'Next.js', 'Performance'],
      type: 'engineering'
    },
    {
      role: 'Web Developer & Digital Marketing Analyst',
      company: 'Freelance Hyderabad',
      period: '2025 — Present',
      desc: 'Built 3+ business websites with Lighthouse scores above 90. Integrated GA4 and optimized technical SEO for local businesses.',
      tags: ['Client Work', 'SEO', 'GA4'],
      type: 'client'
    },
    {
      role: 'CS Engineering Student',
      company: 'KMCE, Hyderabad',
      period: '2023 — 2027',
      desc: 'B.Tech CSE student maintaining a strong academic foundation while building industry-relevant full-stack applications.',
      tags: ['Foundations', 'Algorithms'],
      type: 'academic'
    }
  ];

  return (
    <section id="experience" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-4">
              Career Path
              <span className="h-px w-12 bg-primary/30" />
            </h3>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
              Professional <span className="text-primary italic">Trajectory.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <a href="/resume.pdf" download className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Download CV</span>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-y-1 transition-all">download</span>
            </a>
          </div>
        </div>

        <div className="relative pl-4 sm:pl-8">
          <div className="timeline-line" />

          <div className="space-y-12 lg:space-y-20">
            {history.map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-1000 delay-${i * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <div className="exp-dot" />

                <div className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-12">
                  <div className="pt-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${item.type === 'client' ? 'bg-green-500/10 text-green-500' : item.type === 'engineering' ? 'bg-primary/10 text-primary' : 'bg-slate-500/10 text-slate-500'}`}>
                      {item.type} focused
                    </span>
                  </div>

                  <div className="exp-card rounded-[2rem] p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-2">{item.role}</h4>
                        <p className="text-sm font-bold text-primary italic opacity-80">{item.company}</p>
                      </div>
                      <div className="flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-lg opacity-60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
