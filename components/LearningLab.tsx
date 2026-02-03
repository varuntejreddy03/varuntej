import React, { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../learning.css';

const LearningLab: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Production: Stable data structure
  const currentFocus = [
    {
      topic: 'AI Engineering',
      icon: 'psychology',
      status: '85%',
      desc: 'Advancing from RAG implementations in MedRAG to autonomous agent workflows using Gemini & OpenAI.'
    },
    {
      topic: 'Real-time Systems',
      icon: 'settings_input_antenna',
      status: '60%',
      desc: 'Integrating real-time protocols for low-latency synchronization in collaborative dashboards.'
    },
    {
      topic: 'System Architecture',
      icon: 'hub',
      status: '75%',
      desc: 'Applying architectural patterns from high-traffic client sites like Jharoka to scalable software systems.'
    },
    {
      topic: 'Cloud Scalability',
      icon: 'cloud_sync',
      status: '45%',
      desc: 'Exploring high-availability patterns and load-balancing for next-gen bespoke web solutions.'
    }
  ];

  return (
    <section id="learning" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-4">
              The Growth Mindset
              <span className="h-px w-12 bg-primary/30" />
            </h3>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none mb-8">
              Learning <span className="text-primary italic">Lab.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              As a student in the <span className="text-slate-900 dark:text-white font-bold underline decoration-primary/30 underline-offset-4 text-xs">Class of 2027</span>, my biggest edge is the speed of my evolution. Here's what I'm currently deep-diving into.
            </p>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <span className="material-symbols-outlined text-primary animate-pulse">menu_book</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Continuous Integration of Knowledge</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentFocus.map((item, i) => (
            <div
              key={item.topic}
              className={`learning-box rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all duration-1000 delay-${i * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="growth-glow" />

              <div className="progress-orbit mb-8 relative z-10">
                <span className="material-symbols-outlined text-2xl text-primary">{item.icon}</span>
              </div>

              <div className="relative z-10">
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">{item.topic}</h4>
                <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-6">{item.status} Mastery</p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Footer Detail */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 py-8 border-y border-slate-100 dark:border-white/5">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-slate-900 dark:text-white">12h/week</span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">R&D Commitment</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-slate-900 dark:text-white">50+ Projects</span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Total Delivered</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-slate-900 dark:text-white">Freshman+</span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Industry mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LearningLab);
