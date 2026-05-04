'use client';

// Testimonials — Jobs24x clean quote cards.
import { testimonials } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Testimonials</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            What clients are saying.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all hover:shadow-card">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
                <span className="material-symbols-outlined text-[18px]">format_quote</span>
              </div>
              <p className="text-sm leading-[1.7] " style={{ color: '#64748B' }}>&quot;{item.quote}&quot;</p>
              <div className="mt-5 border-t border-[#F3F4F6] pt-4">
                <p className="text-sm font-semibold text-[#111827]">{item.author}</p>
                <p className="mt-0.5 text-xs text-[muted-foreground]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
