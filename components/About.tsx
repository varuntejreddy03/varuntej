import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { label: 'Client Projects', value: '02+', delay: '200ms' },
    { label: 'Core Frameworks', value: '05+', delay: '400ms' },
    { label: 'Perf Metrics', value: '98%', delay: '600ms' }
  ];

  const facts = [
    { label: 'Current Base', value: 'Hyderabad, India', icon: 'location_on' },
    { label: 'Academic Path', value: 'B.Tech CS Engineering', icon: 'school' },
    { label: 'Key Philosophy', value: 'Performance over Bloat', icon: 'terminal' },
    { label: 'Open To', value: 'Internships / Remote', icon: 'calendar_today' }
  ];

  return (
    <section id="about" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left: Bio Content */}
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 lg:mb-12 flex items-center gap-4">
              The Persona
              <span className="h-px w-20 bg-primary/30" />
            </h3>

            <div className="space-y-6 lg:space-y-8">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                I'm <span className="text-primary italic">Varuntej Reddy N</span>, a CS engineer who treats code as a craft.
              </p>

              <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-2xl">
                I operate at the intersection of <span className="text-slate-900 dark:text-white border-b-2 border-primary/20">Academic Engineering</span> and <span className="text-slate-900 dark:text-white border-b-2 border-primary/20">Bespoke Client Solutions</span>. I build high-performance websites that aren't just pretty—they're engineered for conversions and speed.
              </p>

              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                Currently, I'm looking to bring my system-level thinking to an <span className="font-bold text-primary">Engineering Internship</span> while continuing to help businesses scale their digital presence through tailored web architectures.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 animate-fade-in-up" style={{ animationDelay: stat.delay }}>
                <span className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter hover:text-primary transition-colors cursor-default">
                  {stat.value}
                </span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Personal Meta Index Card */}
        <div className="relative group perspective-1000">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-white/60 dark:bg-[#0a0f1e]/80 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 lg:p-14 shadow-3xl transform transition-all duration-700 group-hover:translate-y-[-10px] group-hover:rotate-x-2">

            <div className="flex justify-between items-center mb-12">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Quick Facts</h4>
              <div className="h-px w-12 bg-white/10" />
            </div>

            <div className="space-y-10">
              {facts.map((fact, idx) => (
                <div key={idx} className="flex items-center gap-6 group/fact">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-primary shadow-sm group-hover/fact:scale-110 group-hover/fact:bg-primary group-hover/fact:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl">{fact.icon}</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1.5">{fact.label}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-none">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Initiate Contact Button */}
            <a
              href="#contact"
              className="mt-16 w-full flex items-center justify-between p-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 group/link overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover/link:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] ml-2 group-hover/link:text-white transition-colors">Initiate Contact</span>
              <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 dark:bg-slate-900/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-xl group-hover/link:translate-x-1 group-hover/link:text-white transition-all">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;