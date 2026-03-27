'use client';

// Header preserves the existing glass navigation and theme toggle while aligning links with App Router.
import { memo, useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import ResumeButton from '@/components/ResumeButton';
import { navLinks, owner } from '@/lib/content';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 18);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-[100] px-4 sm:px-6 ${scrolled ? 'py-3' : 'py-5 sm:py-7'}`}>
        <nav
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-[2rem] border px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled || mobileMenuOpen
              ? 'border-slate-200/70 bg-white/88 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#0f1523]/88 dark:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)]'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white sm:text-base">
                Varun Tej <span className="text-primary italic">Reddy N</span>
              </p>
              <p className="hidden text-[9px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500 sm:block">
                {owner.role}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden xl:block">
              <ResumeButton
                label="View Resume"
                className="bg-slate-900/5 px-4 py-3 text-[9px] text-slate-800 dark:bg-white/5 dark:text-slate-200"
                showCount={false}
              />
            </div>

            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        <div
          className={`absolute left-4 right-4 top-full mt-3 origin-top transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-4 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-[#0f1523]/95">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-700 dark:text-slate-300">{item.name}</span>
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </a>
              ))}
              <div className="px-2 pt-2">
                <ResumeButton
                  label="View Resume"
                  className="w-full justify-center bg-primary px-5 py-4 text-[10px] text-white"
                  showCount={false}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </>
  );
}

export default memo(Header);
