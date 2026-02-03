import React, { useState } from 'react';
import { Project, SkillCategory } from './types';
import AIChat from './components/AIChat';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './cursor.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const projects: Project[] = [
    {
      id: 'proj-1',
      title: 'MedRAG',
      tagline: 'Optimizing healthcare diagnosis through sub-second, RAG-powered medical document analysis.',
      description: 'An AI-powered healthcare diagnosis assistant built using Retrieval-Augmented Generation (RAG) architecture.',
      challenge: 'Medical professionals required a way to query massive clinical datasets without the latency or hallucinations common in standard LLMs.',
      solution: 'Developed a custom RAG pipeline using a 4.4GB FAISS vector index and Gemini API, hosted on AWS EC2 with Docker-optimized environments.',
      results: 'Achieved sub-second query latency and zero-hallucination grounded responses for complex medical QA.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      icon: 'clinical_notes',
      features: [
        '4.4GB FAISS vector index for localized knowledge',
        'JWT-protected FastAPI backend with rate limiting',
        'AWS EC2/S3/RDS deployment via Docker'
      ],
      tags: ['Next.js', 'FastAPI', 'FAISS', 'Gemini'],
      liveUrl: 'https://medrag.site',
      repoUrl: 'https://github.com/varuntejreddy03/medrag_backend',
      category: 'ai'
    },
    {
      id: 'proj-2',
      title: 'Jharoka Heritage',
      tagline: 'Translating the elegance of heritage furniture into a seamless, high-performance digital showcase.',
      description: 'Single-page e-commerce showcase for a premium furniture brand.',
      challenge: 'A heritage brand needed a digital presence that felt as premium as their physical products without sacrificing lightning-fast performance.',
      solution: 'Implemented Framer Motion for hardware-accelerated animations and high-res image optimization for a luxury gallery feel.',
      results: 'Generated a 25% increase in online inquiries and maintained 95+ performance scores across all devices.',
      image: '/463130766_1094591608669432_7479999598909197172_n.jpg',
      icon: 'chair',
      features: [
        'Animated experience with Framer Motion',
        'Mobile-first gallery optimization',
        'SEO-optimized architecture for luxury market'
      ],
      tags: ['Next.js', 'Framer Motion', 'TypeScript'],
      liveUrl: 'https://jharoka.in',
      repoUrl: 'https://github.com/varuntejreddy03/Jharoka',
      category: 'client-work'
    },
    {
      id: 'proj-3',
      title: 'KMCE Cricket Portal',
      tagline: 'Centralizing tournament management through a real-time, role-based college sports platform.',
      description: 'A comprehensive tournament management platform for college cricket.',
      challenge: 'Organizing inter-college tournaments manually led to data fragmentation and delayed score reporting.',
      solution: 'Built a real-time management dashboard using Supabase and PostgreSQL, featuring role-based access for admins and teams.',
      results: 'Streamlined ops for hundreds of players with zero data loss and instant score updates via live DB listeners.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop',
      icon: 'sports_cricket',
      features: [
        'Real-time Supabase score synchronization',
        'Role-based dashboard (Admin/Team)',
        'SQL-backed match scheduling engine'
      ],
      tags: ['Next.js', 'Supabase', 'PostgreSQL'],
      liveUrl: 'https://kmcecricket.netlify.app',
      repoUrl: 'https://github.com/varuntejreddy03/kmcesports',
      category: 'web-app'
    },
    {
      id: 'proj-4',
      title: 'The Grind Cafe',
      tagline: 'Scaling local coffee culture through a high-speed, SEO-focused multi-location digital experience.',
      description: 'Modern business website for a multi-location specialty cafe.',
      challenge: 'The business lacked a central hub to handle multi-location menus while maintaining local SEO rankings.',
      solution: 'Developed a localized SEO strategy within a Next.js framework, featuring dynamic location pages and optimized assets.',
      results: 'Sustained Lighthouse performance scores above 90 and increased organic local search traffic significantly.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop',
      icon: 'coffee',
      features: [
        '90+ Lighthouse mobile performance',
        'Multi-location menu management',
        'Integrated Google Maps & contact flow'
      ],
      tags: ['React', 'TypeScript', 'SEO'],
      liveUrl: 'https://thegrindcafe.in',
      repoUrl: 'https://github.com/varuntejreddy03/grindcafe',
      category: 'client-work'
    },
    {
      id: 'proj-5',
      title: 'PartCart',
      tagline: 'Modernizing event catering through a fluid, mobile-first inquiry and cart management system.',
      description: 'Food ordering and catering inquiry platform (WIP).',
      challenge: 'Current catering solutions fail to provide a smooth mobile inquiry process for event-scale orders.',
      solution: 'Designing a responsive React application with context-driven cart management and fluid UI transitions.',
      results: 'Built a modular ordering framework ready for high-traffic catering events.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
      icon: 'shopping_cart',
      features: [
        'React Context cart management',
        'Fluid mobile-first inquiry flow',
        'Dynamic order total calculation'
      ],
      tags: ['Next.js', 'React Context', 'Tailwind'],
      liveUrl: 'https://partycart.vercel.app',
      repoUrl: 'https://github.com/varuntejreddy03/partycart',
      category: 'web-app'
    }
  ];

  const skillCategories: SkillCategory[] = [
    { 
      name: 'Frontend', 
      description: 'I specialize in React and Next.js because they provide the perfect balance of developer velocity and end-user performance. My approach centers on "Zero-Bloat UI," ensuring that every component serves a specific purpose while maintaining the highest possible Core Web Vitals.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'] 
    },
    { 
      name: 'Backend & AI', 
      description: 'In the era of AI, a backend is only as good as its retrieval strategy. I focus on RAG architectures using FastAPI and Python, leveraging vector databases like FAISS to build systems that provide grounded, verifiable, and extremely fast responses.',
      skills: ['Python', 'FastAPI', 'Node.js', 'RAG Systems', 'Vector Search', 'JWT Auth'] 
    },
    { 
      name: 'Marketing & Cloud', 
      description: 'Great code is useless if it is never seen. My background in Digital Marketing informs how I architect apps for discoverability (SEO) and conversion. I use AWS to ensure that performance gains in development translate to robust, scalable production.',
      skills: ['AWS (EC2/S3)', 'Docker', 'SEO Optimization', 'Google Ads', 'GA4'] 
    }
  ];

  const blogPostIdeas = [
    "Cracking the 100/100: Advanced Next.js Performance Optimization Patterns",
    "From 4GB to Sub-Second: Scaling FAISS Vector Indices for Production RAG",
    "The Freelance Student's Playbook: Managing Client Expectations and Deep Work",
    "SEO for SPAs: Beyond Meta Tags and Into Server-Side Excellence",
    "ROI-Driven Development: Why Developers Need to Understand Google Ads",
    "Building Trust with HIPAA-Ready Architectures in AI Healthcare Apps",
    "Supabase vs. Custom Backends: Choosing the Right Foundation for Scaling",
    "Animation with Intent: Using Framer Motion to Enhance UX Without Bloat",
    "The Digital Marketing Edge: How a Marketing Mindset Makes You a Better Engineer",
    "Practical RAG: Implementing Context-Aware AI Experiences with Gemini"
  ];

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-screen-md mx-auto px-6 pb-32">
        <Hero />
        <About />
        <Skills skillCategories={skillCategories} />
        <Projects projects={projects} />
        <Blog blogPostIdeas={blogPostIdeas} />
        <Contact />
        <Footer />
      </main>

      <a 
        href="https://wa.me/918374967870?text=Hi! I'm interested in your services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[55] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
        </svg>
      </a>
    </div>
  );
};

export default App;