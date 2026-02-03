import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../hero.css';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-0">
      <div ref={ref} className="flex flex-col gap-6 sm:gap-8 items-start max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Production-Ready Developer
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-slate-900 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Eager to learn,
          <br className="hidden sm:block" />
          ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">build great</span>
          <br />
          web applications
        </h1>

        {/* Description */}
        <p className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          CS Student actively seeking internship opportunities. Skilled in React, JavaScript, Python, and Web Development with a passion for clean code and user-centric design. Open to remote and on-site opportunities.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#projects" className="px-6 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl font-bold shadow-lg sm:shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all text-center flex-1 sm:flex-none text-sm sm:text-base">
            View Projects
          </a>
          <a href="#contact" className="px-6 sm:px-10 py-3 sm:py-4 glass-card dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-xl sm:rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-all text-center flex-1 sm:flex-none text-sm sm:text-base">
            Contact Me
          </a>
          <a href="/resume/" className="px-6 sm:px-10 py-3 sm:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl sm:rounded-2xl font-bold hover:opacity-90 hover:scale-105 transition-all text-center flex-1 sm:flex-none text-sm sm:text-base">
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;