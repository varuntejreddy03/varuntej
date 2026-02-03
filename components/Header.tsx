import React, { useState, useEffect, memo } from 'react';
import Logo from './Logo';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Production: Throttled scroll handling
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' }, // Added Experience link
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-6 ${scrolled ? 'py-3' : 'py-6 sm:py-8'}`}>
        <nav
          className={`mx-auto max-w-7xl transition-all duration-500 flex items-center justify-between rounded-2xl sm:rounded-[2rem] px-4 sm:px-8 py-3 
            ${scrolled || mobileMenuOpen
              ? 'bg-white/80 dark:bg-[#0a0f1e]/90 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]'
              : 'bg-transparent border-transparent'}`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <Logo />
            <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase cursor-default">
              Varuntej <span className="hidden xs:inline text-primary italic">Reddy</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-all relative group/link"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-90"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 active:scale-90 transition-all font-bold"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden absolute top-full left-4 right-4 mt-4 transition-all duration-500 ease-out origin-top
            ${mobileMenuOpen
              ? 'opacity-100 scale-y-100 translate-y-0 visible'
              : 'opacity-0 scale-y-95 -translate-y-4 invisible pointer-events-none'}`}
        >
          <div className="bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-3xl rounded-3xl border border-white/10 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-5 rounded-2xl hover:bg-primary/10 transition-all group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay to close menu when clicking outside */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default memo(Header);