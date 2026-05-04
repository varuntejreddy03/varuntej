'use client';

// Clean Jobs24x-style portfolio shell with light theme design system.
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
import KonamiEasterEgg from '@/components/KonamiEasterEgg';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F9FAFB]">
      <Header />

      <main className="relative z-10">
        <Hero />

        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <LearningLab />
        </div>

        <Projects />

        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Benchmarks />
          <Experience />
          <Clients />
          <Testimonials />
          <DevActivityHeatmap />
          <Contact />
          <Footer />
        </div>
      </main>

      <KonamiEasterEgg />
    </div>
  );
}
