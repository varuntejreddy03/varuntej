import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMagnetic } from '../hooks/useMagnetic';
import '../hero.css';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projectBtnRef = useMagnetic() as React.RefObject<HTMLAnchorElement>;
  const resumeBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  // Typing Animation States
  const [text1, setText1] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [text3, setText3] = useState('');

  const full1 = "Building ";
  const full3 = "Web Solutions.";

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const interval1 = setInterval(() => {
        if (i <= full1.length) {
          setText1(full1.substring(0, i));
          i++;
        } else {
          clearInterval(interval1);
          setShowAdvanced(true);
          setTimeout(() => {
            let j = 0;
            const interval3 = setInterval(() => {
              if (j <= full3.length) {
                setText3(full3.substring(0, j));
                j++;
              } else {
                clearInterval(interval3);
              }
            }, 40);
          }, 300);
        }
      }, 50);
    }
  }, [isVisible]);

  const focusAreas = [
    { title: 'Frontend Architecture', icon: 'auto_awesome_motion', desc: 'Crafting pixel-perfect, liquid interfaces.' },
    { title: 'Intelligence Systems', icon: 'cognition', desc: 'Integrating RAG & Agentic AI workflows.' },
    { title: 'System Performance', icon: 'speed', desc: 'Lighthouse 95+ score optimization.' }
  ];

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-0 overflow-hidden min-h-[90vh] lg:min-h-[95vh] flex items-center">
      {/* Cinematic Background Layer */}
      <div className="hero-grid-pattern opacity-50" />
      <div className="hero-ambient-orb orb-1 opacity-20" />
      <div className="hero-ambient-orb orb-2 opacity-10" />

      {/* Decorative Light Rays - Hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent rotate-12" />
      <div className="hidden lg:block absolute top-0 right-[35%] w-[1px] h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent rotate-12" />

      <div ref={ref} className={`relative z-10 w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>

        {/* Refined Content (Left side) */}
        <div className="flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 backdrop-blur-md text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em] text-primary mb-8 lg:mb-12 animate-fade-in-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Seeking 2025 Internships & Client Projects
          </div>

          {/* Typewriter Optimized Headline */}
          <div className="space-y-3 sm:space-y-4 mb-8 lg:mb-10 min-h-[140px] sm:min-h-[180px] lg:min-h-[220px]">
            <h2 className="text-primary text-base sm:text-xl font-bold italic tracking-tight opacity-80 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Hello, I'm Varuntej Reddy —
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] sm:leading-[1.05]">
              {text1}
              <span className={`px-2 sm:px-4 inline-block transform -rotate-1 bg-primary text-white mx-1 sm:mx-2 rounded-lg skew-x-[-10deg] transition-all duration-500 ${showAdvanced ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-md'}`}>
                Advanced
              </span>
              <br />
              {text3}
              {isVisible && (text3.length < full3.length || !showAdvanced) && <span className="inline-block w-1 h-8 sm:w-1.5 sm:h-12 bg-primary ml-1 sm:ml-2 animate-pulse align-middle" />}
            </h1>
          </div>

          {/* Meta Details Row */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-slate-400 text-base sm:text-lg">school</span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300">CS Engineering</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-slate-400 text-base sm:text-lg">location_on</span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300">Hyderabad, IN</p>
            </div>
          </div>

          {/* Action Hub */}
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center mb-10 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <a
              ref={projectBtnRef}
              href="#projects"
              className="px-6 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Projects
            </a>
            <button
              ref={resumeBtnRef}
              onClick={() => {
                window.history.pushState({}, '', '/resume');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="px-6 sm:px-10 py-4 sm:py-5 glass-card border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-center"
            >
              CV
            </button>
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl mb-12 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            Bridging the gap between <span className="text-slate-900 dark:text-white font-bold border-b border-primary/30">academic engineering</span> and <span className="text-slate-900 dark:text-white font-bold border-b border-primary/30">digital results</span>. Currently seeking internship roles and building high-performance websites for clients.
          </p>
        </div>

        {/* Improved Intelligence Hub Card - Stacked on Mobile */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] sm:rounded-[4rem] blur-2xl opacity-50 block lg:block" />

          <div className="relative premium-glass rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-10 border border-slate-200 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl">
            <div className="flex justify-between items-center mb-8 sm:mb-10">
              <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Service Stack</h4>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            </div>

            <div className="space-y-6 sm:space-y-8">
              {focusAreas.map((area, i) => (
                <div key={i} className="group/item flex items-center gap-4 sm:gap-6 p-2 sm:p-4 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">{area.icon}</span>
                  </div>
                  <div>
                    <h5 className="text-[10px] sm:text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-tight mb-1">{area.title}</h5>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Footer Card */}
            <div className="mt-8 sm:mt-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center justify-between shadow-xl">
              <div>
                <p className="text-[7px] sm:text-[8px] font-black opacity-50 uppercase tracking-[0.2em] mb-1">Response Time</p>
                <p className="text-[10px] sm:text-xs font-bold font-mono">{'<'} 24 Hours</p>
              </div>
              <a href="#contact" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Tip - Hidden on mobile */}
      <div className="hidden lg:flex absolute left-0 bottom-8 items-center gap-4 opacity-30">
        <div className="w-px h-12 bg-primary animate-bounce-slow" />
        <span className="text-[8px] font-black uppercase tracking-[0.4em] vertical-text">Infinite Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
