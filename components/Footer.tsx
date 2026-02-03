import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-12 lg:mt-16 border-t border-slate-200 dark:border-white/5 pt-8 lg:pt-12 pb-12 overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl">
                V
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase transition-colors">
                Varuntej <span className="text-primary italic">Reddy</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm font-medium">
              Bridging the gap between high-performance engineering and tailored web solutions for businesses.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: 'code', url: 'https://github.com/varuntejreddy03' },
                { name: 'LinkedIn', icon: 'person', url: 'https://linkedin.com/in/varuntej-reddy-n-b484a0249' },
                { name: 'Twitter', icon: 'share', url: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`}
                  className="text-sm font-bold text-slate-600 dark:text-slate-500 hover:text-primary dark:hover:text-white transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* System Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">System Info</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Uptime: 99.9%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#2563eb]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">V-Stack: React/Next</span>
              </div>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-primary-hover transition-colors"
              >
                Back to top
                <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">north</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-center md:text-left">
            © 2024 VARUNTEJ REDDY N. <span className="text-primary mx-3 inline-block animate-pulse">|</span> ENGINEERED FOR SPEED.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Build v2.4.0</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Stable Release</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;