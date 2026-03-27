'use client';

// DevActivityHeatmap embeds a GitHub contribution graph styled to fit the dark portfolio palette.
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function DevActivityHeatmap() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="activity-graph" className="border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Dev Activity Heatmap</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Contribution density, not filler.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Embedded GitHub activity graph to keep the portfolio tied to actual shipping behavior.
          </p>
        </div>

        <div className="heatmap-shell terminal-panel overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=varuntejreddy03&bg_color=0d0f14&color=93c5fd&line=2563eb&point=60a5fa&area=true&hide_border=true"
            alt="GitHub contribution graph for Varun Tej Reddy N"
            loading="lazy"
            className="h-auto w-full rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
