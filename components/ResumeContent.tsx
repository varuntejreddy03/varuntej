import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const ResumeContent: React.FC = () => {
  const backBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;
  const downloadBtnRef = useMagnetic() as React.RefObject<HTMLAnchorElement>;

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-8 relative z-10">
        <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl border border-slate-200/50 dark:border-white/5 rounded-[3rem] shadow-2xl shadow-primary/5 p-8 sm:p-14">

          {/* Navigation & Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
            <button
              ref={backBtnRef}
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="group px-8 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all flex items-center gap-3 cursor-none"
            >
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
              Back to Portfolio
            </button>
            <a
              ref={downloadBtnRef}
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all flex items-center gap-3 cursor-none"
            >
              <span className="material-symbols-outlined">download</span>
              Download PDF
            </a>
          </div>

          {/* Intro Header */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4">
                  VARUNTEJ <span className="text-primary italic">REDDY</span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-medium">
                  Frontend & Full-Stack Developer
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                <a href="mailto:varuntejreddy03@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">mail</span> Email
                </a>
                <a href="https://linkedin.com/in/nvaruntej" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">link</span> LinkedIn
                </a>
                <a href="https://github.com/varuntejreddy03" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">code</span> GitHub
                </a>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-primary/50 via-primary/5 to-transparent" />
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            {/* Sidebar Data */}
            <aside className="space-y-12">
              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Expertise</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(s => (
                        <span key={s} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Backend & AI</h3>
                    <div className="flex flex-wrap gap-2">
                      {['FastAPI', 'Node.js', 'Gemini AI', 'RAG'].map(s => (
                        <span key={s} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">B.Tech in CSE</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">KMCE, Hyderabad</p>
                    <p className="text-[10px] text-primary font-bold uppercase mt-1">Class of 2027</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Contact</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">+91-8374967870</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Hyderabad, India</p>
              </section>
            </aside>

            {/* Main Content */}
            <main className="space-y-16">
              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Professional Summary</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
                  Developer with a drive to build production-grade web applications. Proven experience in delivering
                  performance-optimized frontend solutions and AI-integrated backends for real-world businesses.
                </p>
              </section>

              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10">Selected Experience</h2>
                <div className="space-y-10">
                  <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-slate-50 dark:ring-slate-950" />
                    <header className="mb-4">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Freelance Web Developer</h3>
                        <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-widest">Ongoing</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Digital Marketing & Full-Stack Development</p>
                    </header>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">
                          <span className="material-symbols-outlined text-sm">bolt</span>
                        </span>
                        <span>Built high-conversion landing pages for **The Grind Cafe** & **Jharoka.in**.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1">
                          <span className="material-symbols-outlined text-sm">speed</span>
                        </span>
                        <span>Achieved **90+ Lighthouse scores** on mobile by optimizing Core Web Vitals.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-slate-50 dark:ring-slate-950" />
                    <header className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">MedRAG</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">AI Healthcare Diagnosis Platform</p>
                    </header>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Engineered a RAG system using **FAISS** vector search and **Gemini API** on AWS,
                      providing rapid, grounded medical insights from massive clinical datasets.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Public Projects</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: 'KMCE Cricket', desc: 'Real-time tournament management portal.', link: 'kmcecricket.netlify.app' },
                    { name: 'PartCart', desc: 'Modern event catering inquiry system.', link: 'partycart.in' }
                  ].map(p => (
                    <div key={p.name} className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-transparent hover:border-primary/20 transition-all flex justify-between items-center group">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{p.desc}</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">north_east</span>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;