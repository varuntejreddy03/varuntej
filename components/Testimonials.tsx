'use client';

// Testimonials: real client quotes as cards.
import { testimonials } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-[72px] lg:py-[110px]">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-5 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:text-[13px]">Kind words</p>
        <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] lg:mt-4 lg:text-[56px] lg:leading-[1.04]">
          What clients say <span className="font-serif font-normal italic tracking-[-0.01em]">after launch.</span>
        </h2>

        <div className="mt-7 grid gap-3 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <figure key={item.author} className="flex flex-col rounded-[20px] border border-line bg-surface p-6 lg:rounded-3xl lg:p-9">
              <span aria-hidden="true" className="block h-7 font-serif text-[56px] leading-[0.6] text-primary lg:h-9 lg:text-[72px]">
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-base leading-[1.6] text-ink-soft lg:mt-4 lg:text-lg">{item.quote}</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 lg:mt-7 lg:pt-5">
                <p className="font-heading text-[15px] font-semibold text-ink lg:text-base">{item.author}</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground lg:text-sm">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
