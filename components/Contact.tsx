'use client';

// Contact — Jobs24x CTA style.
import ContactForm from '@/components/ContactForm';
import { owner } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { name: 'GitHub', icon: 'code', url: owner.github },
    { name: 'LinkedIn', icon: 'public', url: owner.linkedin },
    { name: 'Email', icon: 'mail', url: `mailto:${owner.email}` },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div
        ref={ref}
        className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 ${isVisible ? 'section-fade is-visible' : 'section-fade'}`}
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">Get In Touch</p>
          <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[36px]">
            Build something that ships clean.
          </h2>
          <p className="mt-4 text-sm leading-[1.7] " style={{ color: '#64748B' }}>
            Available for websites, AI systems, full stack apps, and selective collaboration with teams that care about production quality.
          </p>

          <div className="mt-6 space-y-2.5">
            <p className="flex items-center gap-2.5 text-sm text-[#374151]">
              <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
              {owner.location}
            </p>
            <p className="flex items-center gap-2.5 text-sm text-[#374151]">
              <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
              <a href={`mailto:${owner.email}`} className="transition-colors hover:text-primary">
                {owner.email}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-[#374151]">
              <span className="material-symbols-outlined text-[18px] text-primary">call</span>
              <a href={`tel:${owner.phone}`} className="transition-colors hover:text-primary">
                {owner.phone}
              </a>
            </p>
          </div>

          <div className="mt-6 flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB]  transition-all hover:border-primary hover:bg-primary hover:text-white" style={{ color: '#64748B' }}
                title={link.name}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-4">
            <p className="text-[11px] font-medium uppercase tracking-wider text-[muted-foreground]">Response Pattern</p>
            <div className="mt-2 flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((bar) => (
                  <span
                    key={bar}
                    className={`h-4 w-1 rounded-full ${bar < 4 ? 'bg-primary' : 'bg-[#E5E7EB]'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#374151]">Usually within 24h</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
