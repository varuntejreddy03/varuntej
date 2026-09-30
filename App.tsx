'use client';

// Portfolio shell: hero → selected work → every shipped site → about → skills → testimonials → contact.
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Shipped from '@/components/Shipped';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import KonamiEasterEgg from '@/components/KonamiEasterEgg';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Header />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Shipped />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <KonamiEasterEgg />
    </div>
  );
}
