import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LearningLab from './components/LearningLab';
import Projects from './components/Projects';
import Benchmarks from './components/Benchmarks';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS, SKILL_CATEGORIES } from './components/constants';
import { Project, SkillCategory } from './components/types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Production practice: Persistent Theme Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    // Security: Anti-Copy/Screenshot/Inspect Measures
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'u')) ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        e.stopPropagation();
        alert('Restricted Action: content is protected.');
      }
    };

    // Privacy Blur: Blurs content when window loses focus (often triggered by screenshot tools)
    const handleBlur = () => {
      document.body.style.filter = 'blur(20px)';
    };

    const handleFocus = () => {
      document.body.style.filter = 'none';
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white dark:bg-[#030712] transition-colors duration-500"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* 
        Production Detail: Fixed Header with adaptive theme toggle.
        Wrapped in a semantic <Header> inside component.
      */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32 relative z-10">
        {/* Each section is modular and follows the engineering narrative. */}
        <Hero />
        <About />
        <Skills skillCategories={SKILL_CATEGORIES} />
        <LearningLab />
        <Projects projects={PROJECTS} />
        <Benchmarks />
        <Experience />
        <Contact />
        <Footer />
      </main>

      {/* Decorative Global Background Glows - Sub-optimal but aesthetically premium */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;