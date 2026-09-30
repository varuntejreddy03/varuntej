'use client';

// Minimal sticky navbar: name left, links center, availability + CTA right. Blurs on scroll.
import { memo, useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import { navLinks } from '@/lib/content';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-paper/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
            <Logo />
            <span className="font-heading text-[16px] font-semibold tracking-tight text-ink">
              Varun Tej
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink/5 sm:inline-flex"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-primary sm:inline-flex"
            >
              Let&apos;s talk
            </a>

            <button
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-muted lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </nav>

        <div
          className={`absolute left-4 right-4 top-full mt-2 origin-top transition-all duration-200 lg:hidden ${
            mobileMenuOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-ink/5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-muted"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-1 grid grid-cols-2 gap-2 p-1">
              <a
                href="/resume"
                className="flex items-center justify-center rounded-full border border-line py-3 text-sm font-medium text-ink"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-full bg-ink py-3 text-sm font-medium text-paper"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[90] bg-ink/10 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      ) : null}
    </>
  );
}

export default memo(Header);
