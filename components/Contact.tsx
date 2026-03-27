'use client';

// Contact keeps the terminal-style layout and swaps in the Brevo-backed form component.
import ContactForm from '@/components/ContactForm';
import { owner } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { name: 'GitHub', icon: 'terminal', url: owner.github },
    { name: 'LinkedIn', icon: 'public', url: owner.linkedin },
    { name: 'Email', icon: 'mail', url: `mailto:${owner.email}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]" />

      <div
        ref={ref}
        className={`relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20 ${isVisible ? 'section-fade is-visible' : 'section-fade'}`}
      >
        <div>
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Get In Touch</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build something that ships clean.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            Available for websites, AI systems, full stack apps, and selective collaboration with teams that care about actual production quality.
          </p>

          <div className="mt-10 space-y-4 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              {owner.location}
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a href={`mailto:${owner.email}`} className="hover:text-white">
                {owner.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <a href={`tel:${owner.phone}`} className="hover:text-white">
                {owner.phone}
              </a>
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                className="social-link-item group/link"
                title={link.name}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Response Pattern</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((bar) => (
                  <span
                    key={bar}
                    className={`h-6 w-1 rounded-full ${bar < 4 ? 'bg-primary' : 'bg-primary/20'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-200">Usually within 24h</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
