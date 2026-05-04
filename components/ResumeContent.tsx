'use client';

// ResumeContent keeps the dedicated resume route while updating the content to match the live portfolio data.
import { useEffect, useState } from 'react';
import ResumeButton from '@/components/ResumeButton';
import Footer from '@/components/Footer';
import { experienceTimeline, owner, projectItems, skillCategories } from '@/lib/content';

export default function ResumeContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0f14] px-4 py-10 sm:px-8">
      <div className="mx-auto mb-10 flex max-w-6xl items-center justify-between gap-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200"
        >
          <span className="material-symbols-outlined ase" style={{ color: '#64748B' }}>arrow_back</span>
          Portfolio
        </a>
        <ResumeButton
          label="Download PDF"
          href="/Varuntej-Reddy-FullStack-AI-Engineer.pdf"
          mode="download"
          className="bg-primary px-5 py-3 text-[10px] text-white"
          showCount={false}
          icon="download"
        />
      </div>

      <div
        className={`mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f1523] shadow-[0_40px_100px_-35px_rgba(0,0,0,0.8)] transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="h-2 w-full bg-gradient-to-r from-sky-400 via-primary to-sky-300" />
        <div className="grid lg:grid-cols-[320px_1fr]">
          <aside className="border-r border-white/5 bg-[#111a2a] p-8">
            <div>
              <p className="xl font-black tracking-tight text-white" style={{ color: '#64748B' }}>{owner.name}</p>
              <p className="mt-2 text-sm font-bold text-primary">{owner.role}</p>
            </div>

            <div className="mt-10 space-y-5 text-sm text-slate-300">
              <p>{owner.location}</p>
              <a href={`mailto:${owner.email}`} className="block hover:text-white">
                {owner.email}
              </a>
              <a href={`tel:${owner.phone}`} className="block hover:text-white">
                {owner.phone}
              </a>
              <a href={owner.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
                {owner.linkedin.replace('https://', '')}
              </a>
              <a href={owner.github} target="_blank" rel="noreferrer" className="block hover:text-white">
                {owner.github.replace('https://', '')}
              </a>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] " style={{ color: '#64748B' }}>Education</p>
              <p className="text-sm font-bold text-white">{owner.education}</p>
              <p className="mt-2 text-sm " style={{ color: '#9CA3AF' }}>{owner.educationMeta}</p>
            </div>

            <div className="mt-10 space-y-6">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] " style={{ color: '#64748B' }}>
                    {category.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="p-8 lg:p-10">
            <section>
              <p className="text-sm leading-8 " style={{ color: '#64748B' }}>
                Full Stack Developer + AI Engineer with production experience across client delivery, real-time systems, and RAG backends. Built 15+ live sites, delivered 4 end-to-end freelance projects, and shipped AI systems with FastAPI, FAISS, Docker, and AWS.
              </p>
            </section>

            <section className="mt-12">
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.28em] text-primary">Experience</p>
              <div className="space-y-8">
                {experienceTimeline.map((item) => (
                  <div key={`${item.role}-${item.period}`} className="border-l border-white/10 pl-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-black text-white">{item.role}</p>
                        <p className="text-sm font-bold text-primary">
                          {item.company} • {item.meta}
                        </p>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] " style={{ color: '#64748B' }}>{item.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm leading-7 " style={{ color: '#9CA3AF' }}>
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.28em] text-primary">Projects</p>
              <div className="grid gap-4 md:grid-cols-2">
                {projectItems.map((project) => (
                  <div key={project.id} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-lg font-black text-white">{project.title}</p>
                    <p className="mt-3 text-sm leading-7 " style={{ color: '#9CA3AF' }}>{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <Footer />
      </div>
    </div>
  );
}
