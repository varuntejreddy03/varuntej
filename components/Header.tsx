'use client';

// Sticky navbar: avatar + name left, section links center, "Start a project" right. Blurs on scroll.
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
        className={`fixed left-0 right-0 top-0 z-[100] border-b transition-colors duration-300 ${
          scrolled ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-line bg-paper'
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[88px]">
          <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
            <Logo />
            <span className="font-heading text-[18px] font-semibold tracking-[-0.02em] text-ink lg:text-[19px]">Varun Tej</span>
            <span className="hidden text-sm text-muted-foreground xl:inline">Websites &amp; software</span>
          </a>

          <div className="hidden items-center gap-9 text-[15px] font-medium lg:flex">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-ink-soft transition-colors hover:text-primary">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden h-[46px] items-center gap-2 rounded-full bg-ink px-[22px] text-[15px] font-semibold text-white transition-colors hover:bg-primary sm:inline-flex"
            >
              Start a project
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                className="flex items-center rounded-xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-muted"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="m-1 mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-semibold text-white"
            >
              Start a project
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? <div className="fixed inset-0 z-[90] bg-ink/10 lg:hidden" onClick={() => setMobileMenuOpen(false)} /> : null}
    </>
  );
}

export default memo(Header);
