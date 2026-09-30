'use client';

// About + experience: short bio and facts on the left, career timeline on the right.
import Icon from '@/components/Icon';
import { experienceTimeline, owner, sitesShipped } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const facts = [
  { label: 'Based in', value: owner.location },
  { label: 'Studying', value: `${owner.education}, ${owner.educationMeta}` },
  { label: 'Open to', value: 'Graduate roles 2027, freelance builds' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-[1200px] gap-16 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 section-fade ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">About</p>
          <h2 className="font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[48px]">
            Engineer first, <span className="font-serif font-normal italic">shipper always.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-muted-foreground">
            <p>
              Most of what I know came from launching things. {sitesShipped} client websites taught me how to take a
              vague brief to a fast, responsive site a business owner is proud to share, usually within days.
            </p>
            <p>
              The other half of my work is systems: retrieval pipelines, auth, realtime data and payments. I like
              the problems where a site stops being a brochure and starts running part of the business.
            </p>
          </div>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[110px_1fr] gap-4 py-4 text-[14px]">
                <dt className="text-muted-foreground">{fact.label}</dt>
                <dd className="font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="experience">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Experience</p>
            <a
              href="/resume"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink"
            >
              Full resume
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </div>

          <ol className="border-t border-ink">
            {experienceTimeline.map((item) => (
              <li key={`${item.role}-${item.period}`} className="border-b border-line py-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-heading text-[20px] font-semibold tracking-[-0.02em]">{item.role}</h3>
                  <p className="shrink-0 text-[13px] tabular-nums text-muted-foreground">{item.period}</p>
                </div>
                <p className="mt-1 text-[14px] font-medium text-primary">
                  {item.company} <span className="text-muted-foreground">· {item.meta}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-[1.6] text-muted-foreground">
                      <span className="mt-[10px] h-px w-3 shrink-0 bg-ink/30" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
