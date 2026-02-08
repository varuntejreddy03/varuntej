import React, { useEffect, useState } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { PROJECTS } from '../components/constants';
import Footer from './Footer';

const ResumeContent: React.FC = () => {
  const backBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;
  const downloadBtnRef = useMagnetic() as React.RefObject<HTMLAnchorElement>;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-[#050a14] transition-colors duration-500 py-12 px-4 sm:px-8 relative overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      {/* Navigation Buttons (Floating) */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-12 relative z-50">
        <button
          ref={backBtnRef}
          onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="group px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-none"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1 text-lg">arrow_back</span>
          <span className="text-sm">Portfolio</span>
        </button>

        <a
          ref={downloadBtnRef}
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2 cursor-none"
        >
          <span className="text-sm">Download PDF</span>
          <span className="material-symbols-outlined text-lg">download</span>
        </a>
      </div>

      {/* Modern Digital Resume Paper */}
      <div
        className={`max-w-5xl mx-auto bg-white dark:bg-[#0b1121] relative z-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-1'
          }`}
        style={{ borderRadius: '2rem' }}
      >
        {/* Top Accent Line */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-primary to-blue-400" />

        <div className="grid md:grid-cols-[300px_1fr] min-h-[800px]">

          {/* Sidebar (Personal Info & Skills) */}
          <aside className="bg-slate-50 dark:bg-[#0f1629] p-8 md:p-12 border-r border-slate-100 dark:border-white/5 flex flex-col gap-10">

            {/* Contact Info */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Contact</h3>
              <div className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="mailto:varuntejreddy03@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">mail</span>
                  </span>
                  <span className="truncate">varuntejreddy03</span>
                </a>
                <a href="https://linkedin.com/in/nvaruntej" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">link</span>
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/varuntejreddy03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">code</span>
                  </span>
                  <span>GitHub</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-lg text-slate-400">location_on</span>
                  </span>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Education</h3>
              <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="mb-1 text-slate-900 dark:text-white font-bold">B.Tech in CSE</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">KMCE, Hyderabad</div>
                <div className="text-xs text-primary font-medium">2023 — 2027</div>
              </div>
            </div>

            {/* Skills */}
            <div className={`flex-grow transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Expertise</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3">Core & Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-md text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:border-primary/30 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3">Backend & AI</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'FastAPI', 'Python', 'RAG Systems', 'Gemini AI', 'Supabase'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-md text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:border-primary/30 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="p-8 md:p-12 md:pl-16">

            {/* Header */}
            <header className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[0.9]">
                VARUNTEJ <span className="text-primary italic">REDDY N</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-lg leading-relaxed">
                Full-Stack Architect & AI Engineer building scalable, production-grade systems with a focus on modern aesthetics and performance.
              </p>
            </header>

            {/* Experience */}
            <section className={`mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10 flex items-center gap-4">
                Selected Experience
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
              </h2>

              <div className="space-y-12">
                {/* Job 1 */}
                <div className="relative pl-8 group">
                  <div className="absolute left-[7px] top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:hidden" />
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-[#0b1121] bg-primary shadow-lg shadow-primary/30" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Freelance Web Architect</h3>
                    <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-full uppercase tracking-widest">Present</span>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Self-Employed • Global</div>

                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-4 marker:text-slate-300 dark:marker:text-slate-600">
                    <li>Engineered high-performance digital presence for clients like <strong>Jharoka.in</strong> & <strong>The Grind Cafe</strong>.</li>
                    <li>Achieved <strong>95+ Core Web Vitals</strong> scores through advanced caching strategies and asset optimization.</li>
                    <li>Designed conversion-focused UI/UX resulting in measurable engagement growth.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-[#0b1121] bg-slate-300 dark:bg-slate-700" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Developer</h3>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">2024</span>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">MedRAG (AI Healthcare)</div>

                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-4 marker:text-slate-300 dark:marker:text-slate-600">
                    <li>Architected a <strong>RAG (Retrieval-Augmented Generation)</strong> system using <strong>FAISS</strong> vector search.</li>
                    <li>Integrated <strong>Gemini 1.5 Pro</strong> for grounding medical insights with sub-second retrieval latency.</li>
                    <li>Implemented secure data pipelines for handling sensitive clinical datasets.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10 flex items-center gap-4">
                Key Projects
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECTS.map((p, i) => (
                  <a
                    key={p.id}
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 hover:border-primary/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors text-sm">{p.title}</h4>
                      <span className="material-symbols-outlined text-[18px] text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        {p.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[8px] uppercase tracking-wider font-bold text-slate-400 bg-slate-200 dark:bg-white/5 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-[9px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                        View
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeContent;