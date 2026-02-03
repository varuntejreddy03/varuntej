import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
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

export const SKILL_CATEGORIES: SkillCategory[] = [
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
