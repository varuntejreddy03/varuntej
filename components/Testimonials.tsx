'use client';

// Testimonials: large serif pull quotes from clients.
import { testimonials } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-4 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">Kind words</p>
        <h2 className="max-w-[640px] font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[48px]">
          What clients say <span className="font-serif font-normal italic">after launch.</span>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="flex flex-col rounded-3xl border border-line bg-surface p-8">
              <span aria-hidden="true" className="font-serif text-[64px] leading-[0.6] text-primary">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[16px] leading-[1.7] text-ink-soft">{item.quote}</blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="font-heading text-[15px] font-semibold text-ink">{item.author}</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
