'use client';

// DevActivityHeatmap — Jobs24x dashboard card.
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function DevActivityHeatmap() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="activity-graph" className="py-20 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Developer Activity</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            GitHub activity and shipped work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.7] text-[muted-foreground]">
            Embedded GitHub activity graph to keep the portfolio tied to actual shipping behavior.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
          <div className="flex items-center justify-between border-b border-[#F3F4F6] px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                <span className="material-symbols-outlined text-[16px]">monitoring</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827]">Contribution Graph</p>
                <p className="text-[11px] text-[muted-foreground]">Last 12 months</p>
              </div>
            </div>
            <a
              href="https://github.com/varuntejreddy03"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-xs font-medium  transition-all hover:text-primary" style={{ color: '#64748B' }}
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              GitHub
            </a>
          </div>
          <div className="p-4 sm:p-5">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=varuntejreddy03&bg_color=ffffff&color=111827&line=2563eb&point=60a5fa&area=true&hide_border=true"
              alt="GitHub contribution graph for Varun Tej Reddy N"
              loading="lazy"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
