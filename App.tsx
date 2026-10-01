'use client';

// Portfolio shell: hero → services → case studies → portfolio → process → about → testimonials → contact.
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Shipped from '@/components/Shipped';
import Process from '@/components/Process';
import About from '@/components/About';
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
        <Services />
        <Projects />
        <Shipped />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <KonamiEasterEgg />
    </div>
  );
}
