'use client';

// Hero upgrades the headline, resume CTA, visitor pulse, and live status without changing the dark engineering aesthetic.
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import LiveStatus from '@/components/LiveStatus';
import ResumeButton from '@/components/ResumeButton';
import VisitorPulse from '@/components/VisitorPulse';
import { heroCycleWords, heroStats, owner } from '@/lib/content';

export default function Hero() {
  const projectBtnRef = useMagnetic() as RefObject<HTMLAnchorElement>;
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % heroCycleWords.length);
    }, 1900);

    return () => window.clearInterval(timer);
  }, []);

  const focusAreas = [
    {
      title: 'Frontend Delivery',
      icon: 'web',
      desc: '18+ production launches with responsive, conversion-ready UI systems.',
    },
    {
      title: 'Backend + AI',
      icon: 'memory',
      desc: 'RAG pipelines, FastAPI services, JWT auth, RBAC, and vector search.',
    },
    {
      title: 'Cloud Deploy',
      icon: 'cloud_upload',
      desc: 'Dockerized releases on AWS, Vercel, Netlify, and CI/CD pipelines.',
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] items-center overflow-hidden px-4 pt-28 sm:px-0 lg:pt-32"
    >
      <div className="hero-grid-pattern opacity-60" />
      <div className="hero-ambient-orb orb-1 opacity-25" />
      <div className="hero-ambient-orb orb-2 opacity-20" />

      <div className="relative z-10 grid w-full gap-10 lg:grid-cols-[1.28fr_0.92fr] lg:items-center lg:gap-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[9px] font-black uppercase tracking-[0.34em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Graduate Roles 2027 | Full Stack Intern @ StaffArc
          </div>

          <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-slate-400">
            Hello, I&apos;m {owner.name}
          </p>

          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building{' '}
            <span className="inline-flex min-w-[1ch] rounded-xl bg-primary px-3 py-1 text-white shadow-lg shadow-primary/25 transition-all duration-500">
              {heroCycleWords[activeWord]}
            </span>
            <br />
            Web Solutions
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Full Stack Developer + AI Engineer based in Hyderabad, shipping client systems, real-time apps, and RAG pipelines with React, Next.js, FastAPI, Supabase, and AWS.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.28em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-start gap-4">
            <a
              ref={projectBtnRef}
              href="#projects"
              className="inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
            >
              Explore Projects
              <span className="material-symbols-outlined text-lg">north_east</span>
            </a>
            <ResumeButton
              label="View Resume"
              className="bg-white/5 px-7 py-4 text-[10px] text-slate-100"
              icon="download"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <VisitorPulse />
            <a
              href={`mailto:${owner.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-slate-300 transition-colors hover:border-primary/30"
            >
              <span className="material-symbols-outlined text-sm text-primary">mail</span>
              {owner.email}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="premium-glass relative rounded-[2.4rem] border border-white/10 bg-[#101723]/80 p-6 sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.36em] text-slate-500">Service Stack</h3>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
            </div>

            <div className="space-y-4">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="group/item flex items-start gap-4 rounded-[1.4rem] border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-primary/20 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover/item:bg-primary group-hover/item:text-white">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-white">{item.title}</h4>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              <LiveStatus />
              <div className="rounded-[1.8rem] bg-white px-5 py-4 text-slate-900">
                <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-500">Response Time</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-mono text-sm font-bold">&lt; 24 hours</p>
                  <a href="#contact" className="rounded-full bg-primary p-2 text-white transition-transform hover:scale-110">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
