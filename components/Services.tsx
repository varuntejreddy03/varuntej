'use client';

// Services: the two offers — business websites (light card) and custom software (dark card).
import Icon from '@/components/Icon';
import { sitesShipped } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Set a starting price (e.g. '₹15,000') to show it on the card; leave null to show "Custom quote".
const services = [
  {
    title: 'Business websites',
    icon: 'globe' as const,
    dark: false,
    summary: 'A fast, mobile-first site that explains what you do and turns visitors into calls, WhatsApp messages and enquiries.',
    includes: [
      'Design, build and launch, handled end to end',
      'Looks right on every phone and laptop',
      'Enquiry forms, WhatsApp and Google Maps',
      'SEO basics, analytics and fast loading',
      'Domain, hosting and handover',
    ],
    bestFor: ['Restaurants', 'Clinics', 'Interiors', 'Logistics', 'Agencies'],
    startingAt: null as string | null,
    cta: { label: `See ${sitesShipped} examples`, href: '#shipped' },
  },
  {
    title: 'Custom software',
    icon: 'code' as const,
    dark: true,
    summary: 'Web apps built around how your business actually works: online ordering, reporting, dashboards and AI assistants.',
    includes: [
      'Online ordering with Razorpay payments',
      'Admin dashboards and staff logins',
      'POS, stock and daily sales reporting',
      'Realtime updates and notifications',
      'AI assistants over your own documents',
    ],
    bestFor: ['Restaurants', 'Retail', 'Operations teams', 'Startups'],
    startingAt: null as string | null,
    cta: { label: 'See case studies', href: '#work' },
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-[72px] lg:py-[110px]">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-5 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:text-[13px]">What I build</p>
            <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] lg:mt-4 lg:text-[56px] lg:leading-[1.04]">
              Two ways I can help <span className="font-serif font-normal italic tracking-[-0.01em]">your business.</span>
            </h2>
          </div>
          <p className="text-base leading-[1.6] text-muted-foreground lg:text-[17px]">
            Whether you need to be found online or need software that runs part of your day, you work directly with me
            from the first call to launch.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {services.map((service) => {
            const dark = service.dark;
            return (
              <article
                key={service.title}
                className={`flex flex-col rounded-3xl p-6 sm:p-10 lg:rounded-[28px] ${
                  dark ? 'bg-night text-white' : 'border border-line bg-surface'
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl lg:h-[52px] lg:w-[52px] ${
                    dark ? 'bg-white/10 text-white' : 'bg-muted text-ink'
                  }`}
                >
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className={`mt-5 font-heading text-[28px] font-semibold tracking-[-0.03em] lg:mt-6 lg:text-[34px] ${dark ? 'text-white' : ''}`}>
                  {service.title}
                </h3>
                <p className={`mt-3 text-base leading-[1.6] lg:text-[17px] ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {service.summary}
                </p>
                <ul className={`mt-6 flex flex-col gap-3 text-[15px] lg:mt-7 lg:gap-3.5 lg:text-base ${dark ? 'text-white/90' : 'text-ink-soft'}`}>
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="check" className={`mt-0.5 h-[18px] w-[18px] ${dark ? 'text-[#7FD8A6]' : 'text-[#1A9E5A]'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2 lg:mt-7" aria-label="Best for">
                  {service.bestFor.map((tag) => (
                    <li
                      key={tag}
                      className={`inline-flex h-8 items-center rounded-full px-3.5 text-[13px] font-medium ${
                        dark ? 'bg-white/10 text-white/90' : 'bg-muted text-ink-soft'
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <div
                  className={`mt-7 flex flex-wrap items-end justify-between gap-4 border-t pt-6 lg:mt-8 ${
                    dark ? 'border-white/15' : 'border-line'
                  }`}
                >
                  <div>
                    <p className={`text-[13px] ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {service.startingAt ? 'Starting at' : 'Pricing'}
                    </p>
                    <p className="mt-1 font-heading text-[26px] font-semibold tracking-[-0.02em] lg:text-[30px]">
                      {service.startingAt ?? 'Custom quote'}
                    </p>
                  </div>
                  <a
                    href={service.cta.href}
                    className={`inline-flex items-center gap-1.5 text-[15px] font-semibold ${dark ? 'text-white hover:text-accent-light' : 'text-ink hover:text-primary'}`}
                  >
                    {service.cta.label}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
