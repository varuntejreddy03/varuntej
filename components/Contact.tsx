'use client';

// Contact: accent-coloured block — invitation and direct channels on the left, enquiry form on the right.
import ContactForm from '@/components/ContactForm';
import { owner } from '@/lib/content';

export default function Contact() {
  const channels = [
    { label: 'Email', value: owner.email, href: `mailto:${owner.email}` },
    { label: 'Phone / WhatsApp', value: '+91 83749 67870', href: `tel:${owner.phone.replace(/-/g, '')}` },
    { label: 'LinkedIn', value: 'in/nvaruntej', href: owner.linkedin },
  ];

  return (
    <section id="contact" className="p-4 lg:px-[60px] lg:py-10">
      <div className="mx-auto grid max-w-[1320px] gap-6 rounded-[28px] bg-primary px-5 pb-5 pt-9 text-white sm:p-10 lg:grid-cols-[minmax(0,1fr)_540px] lg:items-start lg:gap-16 lg:rounded-[36px] lg:px-[60px] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 lg:text-[13px]">Let&apos;s work together</p>
          <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.04em] text-white lg:mt-4 lg:text-[64px] lg:leading-[1.02]">
            Have a business that needs a{' '}
            <span className="font-serif font-normal italic tracking-[-0.01em]">website or software?</span>
          </h2>
          <p className="mt-3.5 max-w-[460px] text-base leading-[1.6] text-white/90 lg:mt-6 lg:text-lg">
            Tell me about it. I reply within a day with next steps and a quote.
          </p>
          <dl className="mt-6 border-t border-white/25 lg:mt-10">
            {channels.map((channel) => (
              <div key={channel.label} className="border-b border-white/25 py-3 sm:grid sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4 sm:py-4">
                <dt className="text-[13px] text-white/80 sm:text-base">{channel.label}</dt>
                <dd className="mt-1 sm:mt-0">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="break-all text-base font-semibold text-white underline-offset-4 hover:underline"
                  >
                    {channel.value}
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
