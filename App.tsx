'use client';

// The main portfolio shell composes the upgraded sections while preserving the existing dark visual language.
import { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import LearningLab from '@/components/LearningLab';
import Projects from '@/components/Projects';
import Benchmarks from '@/components/Benchmarks';
import Experience from '@/components/Experience';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import DevActivityHeatmap from '@/components/DevActivityHeatmap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import KonamiEasterEgg from '@/components/KonamiEasterEgg';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldUseDark = savedTheme !== 'light';

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((current) => {
      const next = !current;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return (
    <div className="page-shell min-h-screen overflow-x-hidden bg-transparent transition-colors duration-500">
      <CustomCursor />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative z-10 mx-auto max-w-[1320px] px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <LearningLab />
        <Projects />
        <Benchmarks />
        <Experience />
        <Clients />
        <Testimonials />
        <DevActivityHeatmap />
        <Contact />
        <Footer />
      </main>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-12%] top-[-12%] h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-[140px]" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-[140px]" />
      </div>

      <KonamiEasterEgg />
    </div>
  );
}
