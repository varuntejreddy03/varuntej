'use client';

// Jobs24x-exact navbar: icon+name left, links center, blue CTA right. White bg, thin border on scroll.
import { memo, useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { navLinks, owner } from '@/lib/content';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] bg-white transition-all duration-200 ${
          scrolled ? 'border-b border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : ''
        }`}
      >
        <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
          {/* Left — logo + name (Jobs24x style) */}
          <a href="#home" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-heading text-[17px] font-bold tracking-tight text-[#111827]">
              Varun Tej<span className="text-primary"> Reddy</span>
            </span>
          </a>

          {/* Center — nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium  transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]" style={{ color: '#64748B' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] sm:inline-flex"
            >
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Let&apos;s Talk
            </a>

            <button
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB]  transition-all hover:bg-[#F3F4F6] lg:hidden" style={{ color: '#64748B' }}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`absolute left-4 right-4 top-full mt-2 origin-top transition-all duration-200 lg:hidden ${
            mobileMenuOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
          }`}
        >
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#374151] transition-colors hover:bg-[#F3F4F6]"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-1 p-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-3 text-sm font-semibold text-white"
              >
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-[90] bg-black/10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </>
  );
}

export default memo(Header);
