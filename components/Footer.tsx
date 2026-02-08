import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-12 lg:mt-16 border-t border-slate-200 dark:border-white/5 pt-16 lg:pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                V
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                Varuntej <span className="text-primary italic">Reddy</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-medium">
              Bridging the gap between high-performance engineering and tailored web solutions for businesses. Building the future, one pixel at a time.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/varuntejreddy03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="GitHub"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 opacity-70 dark:invert" />
              </a>
              <a
                href="https://linkedin.com/in/nvaruntej"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="LinkedIn"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="mailto:varuntejreddy03@gmail.com"
                className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors w-fit flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                About Me
              </a>
              <a href="#projects" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors w-fit flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Projects
              </a>
              <a href="#experience" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors w-fit flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Experience
              </a>
              <a href="#skills" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors w-fit flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                Skills
              </a>
              <a
                href="/resume"
                className="text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit flex items-center gap-2 mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/resume');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                View Resume
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </nav>
          </div>

          {/* System Column */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">System Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">All Systems Operational</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Version</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">v2.5.0 (Stable)</span>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="w-full mt-2 group flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300"
              >
                Back to top
                <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Varuntej Reddy N. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;