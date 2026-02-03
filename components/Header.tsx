import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto max-w-5xl glass-card rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5 dark:shadow-none bg-white/70 dark:bg-slate-900/40">
        <div className="flex items-center gap-1 sm:gap-2">
          <img src="/criclelogo.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white" />
          <span className="text-lg sm:text-2xl font-bold tracking-tighter text-primary">VARUNTEJ REDDY</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="hidden sm:flex gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;