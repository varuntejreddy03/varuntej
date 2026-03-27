import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'MedRAG',
    tagline: 'Optimizing healthcare diagnosis through sub-second, RAG-powered medical document analysis.',
    description: 'RAG-based medical QA system, 4.4GB FAISS index, 2–3 sec response time, FastAPI + JWT + Docker',
    challenge: 'Medical professionals required a way to query massive clinical datasets without the latency or hallucinations common in standard LLMs.',
    solution: 'Developed a custom RAG pipeline using a 4.4GB FAISS vector index and Gemini API, hosted on AWS EC2 with Docker-optimized environments.',
    results: 'Achieved 2–3 sec response time and high accuracy for complex medical QA with a 4.4GB FAISS index.',
    image: '/medrag-cover.svg',
    icon: 'clinical_notes',
    features: [
      '4.4GB FAISS vector index for localized knowledge',
      'JWT-protected FastAPI backend with rate limiting',
      'AWS EC2/S3/RDS deployment via Docker'
    ],
    tags: ['FastAPI', 'JWT', 'Docker', 'FAISS', 'Gemini'],
    liveUrl: 'https://medrag.site',
    repoUrl: 'https://github.com/varuntejreddy03/medrag_backend',
    category: 'ai'
  },
  {
    id: 'proj-3',
    title: 'KMCE Cricket Portal',
    tagline: 'Centralizing tournament management through a real-time, role-based college sports platform.',
    description: 'Live college tournament platform, 10 teams, 200+ players, React + Supabase + SQL',
    challenge: 'Organizing inter-college tournaments manually led to data fragmentation and delayed score reporting.',
    solution: 'Built a real-time management dashboard using Supabase and PostgreSQL, featuring role-based access for admins and teams.',
    results: 'Streamlined ops for 10 teams and 200+ players with zero data loss and instant score updates.',
    image: '/kmce-cricket-cover.svg',
    icon: 'sports_cricket',
    features: [
      'Real-time Supabase score synchronization',
      'Role-based dashboard (Admin/Team)',
      'SQL-backed match scheduling engine'
    ],
    tags: ['React', 'Supabase', 'SQL', 'Next.js'],
    liveUrl: 'https://kmcecricket.varuntej.online/',
    repoUrl: 'https://github.com/varuntejreddy03/kmcesports',
    category: 'web-app'
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
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'I specialize in React and Next.js for building production-grade interfaces. Modern styling with Tailwind CSS and type-safe development with TypeScript are core to my workflow.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'Backend & AI',
    description: 'Focusing on AI-integrated systems using FastAPI and Node.js. Experienced in RAG architectures, FAISS, and Gemini API for sub-second intelligent responses.',
    skills: ['Python', 'FastAPI', 'Node.js', 'SQL', 'RAG Architecture', 'FAISS', 'Gemini API']
  },
  {
    name: 'Cloud & Marketing',
    description: 'Managing end-to-end deployment workflows with AWS and Docker. Leveraging GA4 and SEO strategy to deliver high-performance, discoverable web applications.',
    skills: ['AWS (EC2/S3/RDS)', 'Docker', 'Git', 'GA4', 'REST APIs', 'JWT', 'Supabase']
  }
];
