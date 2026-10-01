'use client';

// Process: four steps from first call to launch.
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    title: 'Discovery call',
    body: 'We talk about your business, your customers and what the site or software needs to do. You get a clear scope and quote.',
  },
  {
    title: 'Design direction',
    body: 'You see the layout and look before I build, so you approve how it feels on phones and laptops first.',
  },
  {
    title: 'Build & review',
    body: "I build it, you review it on a live preview link, and we refine it together until it's right.",
  },
  {
    title: 'Launch & support',
    body: 'Domain, hosting and go-live handled. After launch I stay available for changes and updates.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-[72px] lg:py-[110px]">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-5 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:text-[13px]">How it works</p>
        <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] lg:mt-4 lg:text-[56px] lg:leading-[1.04]">
          From first call to <span className="font-serif font-normal italic tracking-[-0.01em]">launch day.</span>
        </h2>
        <ol className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pb-2 pt-5 lg:pt-7">
              <p className="font-heading text-sm font-semibold text-primary lg:text-[15px]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-heading text-[22px] font-semibold tracking-[-0.02em] lg:mt-3.5 lg:text-2xl">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground lg:mt-3 lg:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
