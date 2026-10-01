'use client';

// About: illustrated portrait on the left, short bio, facts and profile links on the right.
import Image from 'next/image';
import Icon from '@/components/Icon';
import { owner, sitesShipped } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const facts = [
  { label: 'Currently', value: 'Full Stack Developer Intern, StaffArc' },
  { label: 'Also', value: 'Freelance full stack developer since 2025' },
  { label: 'Studying', value: 'B.Tech CSE, KMCE Hyderabad · 2027' },
  { label: 'Stack', value: 'React, Next.js, Node, FastAPI, Postgres, AWS' },
];

const links = [
  { label: 'GitHub', href: owner.github },
  { label: 'LinkedIn', href: owner.linkedin },
  { label: 'Resume', href: '/resume' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="border-t border-line bg-surface py-[72px] lg:py-[110px]">
      <div
        ref={ref}
        className={`mx-auto grid max-w-[1200px] gap-6 px-5 sm:px-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-[88px] section-fade ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-line bg-muted lg:h-[500px] lg:w-full lg:rounded-[28px] lg:border-0 lg:bg-[#EDEAE3]">
            <Image
              src="/criclelogo.png"
              alt={`Illustrated portrait of ${owner.name}`}
              width={300}
              height={300}
              className="h-[118px] w-[118px] rounded-full bg-white lg:h-[300px] lg:w-[300px]"
            />
          </div>
          <p className="hidden text-sm text-muted-foreground lg:block">{owner.name} · Hyderabad, India</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:text-[13px]">About me</p>
          <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] lg:mt-4 lg:text-[52px] lg:leading-[1.04]">
            Hi, I&apos;m Varun. <span className="font-serif font-normal italic tracking-[-0.01em]">I build, then I ship.</span>
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-ink-soft lg:mt-6 lg:text-lg">
            Most of what I know came from launching things. {sitesShipped} client websites taught me how to take a rough
            brief and turn it into a site a business owner is proud to share.
          </p>
          <p className="mt-4 hidden text-lg leading-[1.65] text-muted-foreground sm:block">
            The other half of my work is systems: ordering platforms, reporting tools, payments, realtime data and AI over
            documents. I like the projects where a website stops being a brochure and starts running part of the business.
          </p>

          <dl className="mt-6 border-t border-line lg:mt-9">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-3.5 sm:grid sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6 sm:py-4">
                <dt className="text-[13px] text-muted-foreground sm:text-base">{fact.label}</dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink sm:mt-0 sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2.5 lg:mt-8 lg:gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#CFCAC0] px-5 text-[15px] font-semibold text-ink transition-colors hover:border-ink lg:h-[46px]"
              >
                {link.label}
                <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
