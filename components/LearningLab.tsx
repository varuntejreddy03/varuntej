'use client';

// LearningLab refreshes the section with the exact active learning topics from the brief.
import { learningTopics } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function LearningLab() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="learning" className="border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={isVisible ? 'section-fade is-visible' : 'section-fade'}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Learning Lab</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Current learning loop.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <span className="material-symbols-outlined text-primary">menu_book</span>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Continuous systems upgrade
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {learningTopics.map((item) => (
            <div key={item.topic} className="learning-box relative rounded-[2rem] p-6">
              <div className="growth-glow" />
              <div className="progress-orbit relative z-10 mb-6">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">{item.status}</p>
                <h3 className="mt-3 text-xl font-black text-white">{item.topic}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
