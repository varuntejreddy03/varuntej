import React, { memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../benchmarks.css';

const Benchmarks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Production: Data extracted to stable object
  const metrics = [
    {
      title: 'Freelance Portfolio',
      category: 'Bespoke Solutions',
      impact: '100/100',
      label: 'Lighthouse Perf.',
      stats: [
        { name: 'SEO', val: '100' },
        { name: 'Best Prac.', val: '100' },
        { name: 'Access.', val: '98' }
      ],
      desc: 'Delivering production-grade websites like Jharoka & The Grind Cafe with zero-bloat architecture.'
    },
    {
      title: 'KMCE Cricket',
      category: 'College Project',
      impact: '500+',
      label: 'Active Users',
      stats: [
        { name: 'Latency', val: '<200ms' },
        { name: 'Uptime', val: '99.9%' },
        { name: 'Scale', val: 'High' }
      ],
      desc: 'A real-time tournament management platform serving over 500 students and players annually.'
    },
    {
      title: 'MedRAG',
      category: 'Research Project',
      impact: '0.8s',
      label: 'Retrieval Speed',
      stats: [
        { name: 'Accuracy', val: '94%' },
        { name: 'Embedding', val: 'FAISS' },
        { name: 'AI Model', val: 'Gemini' }
      ],
      desc: 'Architected a sub-second RAG pipeline for medical data retrieval, bridging academics and AI engineering.'
    }
  ];

  return (
    <section id="benchmarks" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-4">
              Evidence of Excellence
              <span className="h-px w-12 bg-primary/30" />
            </h3>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
              Performance <span className="text-primary italic">Benchmarks.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="bench-header-badge animate-pulse">Live Audit</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Verified Technical Proof</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((item, i) => (
            <div
              key={item.title}
              className={`benchmark-card rounded-[3rem] p-10 lg:p-14 relative overflow-hidden transition-all duration-1000 delay-${i * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="scanline-effect" />

              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{item.category}</span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              </div>

              <div className="mb-12">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">{item.title}</h4>
                <div className="flex items-end gap-4">
                  <span className="impact-number">{item.impact}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                {item.stats.map(s => (
                  <div key={s.name} className="flex items-center justify-between group/stat">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover/stat:text-slate-900 dark:group-hover/stat:text-white transition-colors">{s.name}</span>
                    <div className="flex-1 mx-4 h-px bg-slate-200 dark:bg-white/5" />
                    <span className="text-[10px] font-black text-primary font-mono">{s.val}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic border-l-2 border-primary/20 pl-6">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>

        {/* Audit Disclaimer */}
        <div className="mt-16 flex justify-center opacity-30">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] text-center">
            * Metrics gathered using Chrome DevTools Lighthouse & custom performance monitors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Benchmarks);
