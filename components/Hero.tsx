'use client';

// Jobs24x-exact hero: badge → large 2-line heading (line 2 blue) → gray subtitle → 2 buttons → stat cards.
import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import VisitorPulse from '@/components/VisitorPulse';
import { heroCycleWords, owner } from '@/lib/content';

export default function Hero() {
  const projectBtnRef = useMagnetic() as RefObject<HTMLAnchorElement>;
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % heroCycleWords.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const stats = [
    { value: '18+', label: 'Projects Shipped', icon: 'visibility' },
    { value: '10+', label: 'Technologies Used', icon: 'description' },
    { value: '19', label: 'Clients Served', icon: 'language' },
    { value: '0', label: 'Critical Bugs', icon: 'group' },
  ];

  return (
    <section
      id="home"
      className="relative bg-white pb-0 pt-[100px] sm:pt-[120px]"
    >
      {/* Hero content */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Badge — exact Jobs24x style */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E0E7FF] bg-[#EEF2FF] px-5 py-2 text-sm font-medium text-primary">
            <span className="text-sm">✦</span>
            Full Stack Developer + AI Engineer
          </div>

          {/* Headline — Jobs24x exact: line 1 black, line 2 blue */}
          <h1 className="max-w-[800px] font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#111827] sm:text-[48px] lg:text-[56px]">
            Building Scalable Web Apps &amp;
            <br />
            <span className="text-primary">
              {heroCycleWords[activeWord]} Solutions
            </span>
          </h1>

          {/* Subtitle — Jobs24x gray paragraph */}
          <p className="mt-5 max-w-[640px] text-sm leading-[1.7] sm:text-base" style={{ color: '#64748B' }}>
            Full Stack Developer + AI Engineer based in Hyderabad, shipping
            client systems, real-time apps, and RAG pipelines with React,
            Next.js, FastAPI, Supabase, and AWS.
          </p>

          {/* CTA buttons — Jobs24x exact: blue filled + white outlined */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              ref={projectBtnRef}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg"
            >
              Browse Projects
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-[#D1D5DB] bg-white px-6 py-3 text-sm font-semibold text-[#374151] transition-all hover:border-[#9CA3AF] hover:shadow-sm"
            >
              View Resume
            </a>
          </div>

          {/* Visitor pulse */}
          <div className="mt-6">
            <VisitorPulse />
          </div>
        </div>

        {/* Stats cards — Jobs24x exact: centered icon, big number, small label */}
        <div className="mx-auto mt-16 grid max-w-[960px] grid-cols-2 gap-4 pb-12 md:grid-cols-4 md:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-[#F3F4F6] bg-[#FAFBFC] px-4 py-7 text-center transition-all hover:border-[#E5E7EB] hover:shadow-card"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-primary">
                <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
              </div>
              <p className="font-heading text-[28px] font-bold tracking-tight text-[#111827] sm:text-[32px]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium" style={{ color: '#64748B' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
