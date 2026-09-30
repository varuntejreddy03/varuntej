'use client';

// Contact: big invitation + direct details on the left, the enquiry form on the right.
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import { owner } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const channels = [
    { label: 'Email', value: owner.email, href: `mailto:${owner.email}` },
    { label: 'Phone', value: owner.phone, href: `tel:${owner.phone}` },
    { label: 'LinkedIn', value: 'in/nvaruntej', href: owner.linkedin },
    { label: 'GitHub', value: owner.githubUsername, href: owner.github },
  ];

  return (
    <section id="contact" className="border-t border-line py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 section-fade ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">Contact</p>
          <h2 className="font-heading text-[44px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[64px]">
            Have a business that needs a <span className="font-serif font-normal italic text-primary">website?</span>
          </h2>
          <p className="mt-6 max-w-[440px] text-[16px] leading-[1.7] text-muted-foreground">
            Or a team that needs an engineer. Tell me what you&apos;re building and I&apos;ll reply within a day.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {channels.map((channel) => (
              <div key={channel.label} className="grid grid-cols-[90px_1fr] items-center gap-4 py-4">
                <dt className="text-[13px] text-muted-foreground">{channel.label}</dt>
                <dd>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group inline-flex items-center gap-1.5 break-all text-[15px] font-medium text-ink transition-colors hover:text-primary"
                  >
                    {channel.value}
                    <Icon name="arrow-up-right" className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
