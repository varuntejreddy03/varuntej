'use client';

import { learningTopics } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function LearningLab() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="learning" className="py-20 lg:py-24">
      <div ref={ref} className={isVisible?'section-fade is-visible':'section-fade'}>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Learning Lab</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">Current learning loop.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {learningTopics.map(item=>(
            <div key={item.topic} className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{item.status}</p>
              <h3 className="mt-1 font-heading text-[16px] font-bold text-[#111827]">{item.topic}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-[muted-foreground]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
