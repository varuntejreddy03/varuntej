// Central portfolio content keeps all owner data, sections, and UI metadata in one source of truth.
export type ProjectItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  category: 'ai' | 'client-work' | 'web-app';
  features: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const owner = {
  name: 'Varun Tej Reddy N',
  role: 'Full Stack Developer + AI Engineer',
  location: 'Hyderabad, India',
  email: 'hello@varuntej.online',
  phone: '+91-8374967870',
  linkedin: 'https://linkedin.com/in/nvaruntej',
  github: 'https://github.com/varuntejreddy03',
  portfolio: 'https://varuntej.online',
  education: 'B.Tech CSE - KMCE, Hyderabad',
  educationMeta: 'Expected May 2027 - CGPA 7.0',
  githubUsername: 'varuntejreddy03',
} as const;

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
] as const;

export const heroCycleWords = ['Advanced', 'Scalable', 'AI-Powered', 'Production-Grade'] as const;

export const heroStats = [
  { label: 'Client Projects', value: '18+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Response Window', value: '<24h' },
] as const;

export const aboutStats = [
  { label: 'Production Sites', value: '18+' },
  { label: 'Named Clients', value: '19' },
  { label: 'Critical Bugs', value: '0' },
] as const;

export const facts = [
  { label: 'Current Base', value: owner.location, icon: 'location_on' },
  { label: 'Academic Path', value: `${owner.education} - ${owner.educationMeta}`, icon: 'school' },
  { label: 'Primary Focus', value: 'Scalable web apps and AI systems', icon: 'terminal' },
  { label: 'Open For', value: 'Graduate roles 2027 + product internships', icon: 'rocket_launch' },
] as const;

export const projectItems: ProjectItem[] = [
  {
    id: 'medrag',
    title: 'MedRAG',
    tagline: 'RAG infrastructure for fast, grounded medical answers.',
    description:
      'Built a medical RAG pipeline with a 4.4GB FAISS index, 2-3 second response time, FastAPI APIs, JWT auth, RBAC, Docker, and AWS EC2/S3 deployment.',
    challenge:
      'Medical retrieval workflows needed grounded answers from large domain documents without the latency and hallucination risk of generic prompting.',
    solution:
      'Designed a production-friendly FastAPI backend around a large FAISS index, protected it with JWT + RBAC, and packaged the full stack in Docker for AWS deployment.',
    results:
      'Delivered 2-3 second grounded responses on a 4.4GB FAISS corpus and established a clean base for the next MedRAG agentic upgrade.',
    image: '/medrag-cover.svg',
    category: 'ai',
    features: [
      '4.4GB FAISS vector index for domain-grounded retrieval',
      'JWT + RBAC-secured FastAPI services for clinical workflows',
      'Dockerized AWS EC2/S3 deployment tuned for fast response',
    ],
    tags: ['FastAPI', 'Python', 'FAISS', 'RAG', 'JWT', 'Docker', 'AWS'],
    liveUrl: 'https://medrag.site',
    repoUrl: 'https://github.com/varuntejreddy03/medrag_backend',
  },
  {
    id: 'staffarc-suite',
    title: 'Client Delivery Suite',
    tagline: '18+ real projects delivered across multiple business categories.',
    description:
      'Delivered production-ready websites and frontend systems for restaurants, interiors, agencies, wellness brands, forensic services, and SaaS-style business sites.',
    challenge:
      'Each project required a different brand language, conversion path, and technical setup while still needing fast delivery, clean implementation, and strong responsiveness.',
    solution:
      'Built reusable frontend patterns with React and Next.js, delivered in agile cycles, and tuned each launch for cross-device reliability and polished execution.',
    results:
      'Shipped 18+ real client projects with zero critical post-launch defects and a growing repeat-client pipeline.',
    image: '/client-delivery-cover.svg',
    category: 'client-work',
    features: [
      '18+ client projects delivered across multiple industries',
      'Production-grade UI systems tuned for launch readiness',
      'Repeat business driven by fast delivery and clean execution',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'SEO', 'Agile'],
  },
  {
    id: 'kmce-cricket',
    title: 'KMCE Cricket Portal',
    tagline: 'Real-time sports operations for 10 teams and 500+ players.',
    description:
      'Built a real-time cricket operations portal with React, Supabase, SQL, and RBAC to manage tournaments, scores, teams, and player workflows for KMCE.',
    challenge:
      'Manual tournament coordination created fragmented player data, delayed score updates, and limited visibility across the competition lifecycle.',
    solution:
      'Implemented a Supabase-backed portal with role-based controls, real-time data sync, and structured SQL entities for teams, schedules, and results.',
    results:
      'Streamlined tournament operations across 10 teams and 500+ players with live synchronization and role-aware administration.',
    image: '/kmce-cricket-cover.svg',
    category: 'web-app',
    features: [
      'Real-time Supabase sync for scores and match state',
      'RBAC workflows for admins, organizers, and team roles',
      'SQL-backed player and tournament management at campus scale',
    ],
    tags: ['React.js', 'Supabase', 'SQL', 'RBAC', 'Realtime'],
    liveUrl: 'https://kmcecricket.varuntej.online/',
    repoUrl: 'https://github.com/varuntejreddy03/kmcesports',
  },
];

export const experienceTimeline = [
  {
    role: 'Full Stack Developer Intern',
    company: 'StaffArc',
    meta: 'Remote',
    period: 'February 2026 - Present',
    type: 'engineering',
    bullets: [
      'Delivered production-ready client sites across multiple industries in agile sprint cycles.',
      'Worked directly on launches for Flow Reach, Sandeep Associates, Bear Harbor, Vintage Times, Parall Forensics, Brent Street Pizza, Naati Dosa, Joyous Food Factory, Aikya Spaces, Infinite Metric Limited, RajaMahendravaram Palavu Centre, Almacura, The Market Titans, MonkFit, 999tatva Media, Love You Chai, SABP Technologies LLP, Cineo Hub, and Sathya Interiors.',
      'Maintained 100% cross-device and cross-browser compatibility across shipped frontend work.',
    ],
    tags: ['React.js', 'Next.js', 'Client Delivery'],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Independent',
    meta: 'Hyderabad, India',
    period: '2025 - Present',
    type: 'client',
    bullets: [
      'Delivered 4 end-to-end projects from brief through cloud deployment.',
      'Handled design, build, testing, and launch ownership across the full delivery cycle.',
      'Maintained 0 critical post-launch defects with 100% on-time delivery.',
    ],
    tags: ['Full Stack', 'Cloud Deploy', 'Ownership'],
  },
  {
    role: 'B.Tech CSE',
    company: 'KMCE, Hyderabad',
    meta: 'CGPA 7.0',
    period: 'Expected May 2027',
    type: 'academic',
    bullets: [
      'Building industry-ready full stack and AI systems alongside the core CS curriculum.',
      'Using campus projects such as the KMCE Cricket Portal to turn coursework into production-style systems.',
    ],
    tags: ['Systems', 'Applied CS'],
  },
] as const;

export const skillCategories = [
  {
    name: 'Frontend',
    description: 'Production UI delivery for fast-moving client work and polished portfolio-grade interfaces.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS'],
  },
  {
    name: 'Backend + AI',
    description: 'API design, auth, and retrieval workflows for apps that blend web systems with intelligence.',
    skills: [
      'Node.js',
      'FastAPI',
      'Python',
      'RESTful APIs',
      'GraphQL',
      'JWT',
      'RBAC',
      'Supabase',
      'RAG',
      'FAISS',
      'LLMs',
      'Gemini API',
      'Prompt Engineering',
      'Vector DBs',
    ],
  },
  {
    name: 'Cloud',
    description: 'Deployment and release tooling for reliable launches, automation, and performance visibility.',
    skills: [
      'AWS (EC2/S3/RDS)',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Vercel',
      'Netlify',
      'GA4',
      'Lighthouse',
      'SEO',
      'Agile',
    ],
  },
  {
    name: 'Learning',
    description: 'Areas being actively pushed deeper to expand systems thinking and AI product depth.',
    skills: ['LangChain', 'OpenAI API', 'Pinecone', 'Weaviate', 'System Design', 'DSA'],
  },
] as const;

export const skillTooltips: Record<string, string> = {
  'React.js': 'Used in 18+ production projects and the KMCE Cricket Portal.',
  'Next.js': 'Used in client delivery work and portfolio-grade product builds.',
  TypeScript: 'Used in production UI systems and portfolio engineering work.',
  'JavaScript ES6+': 'Core language across every shipped frontend project.',
  'Tailwind CSS': 'Used to build the portfolio and client interfaces fast without UI bloat.',
  'Node.js': 'Used in end-to-end full stack delivery and custom backend work.',
  FastAPI: 'Used in MedRAG for secure, production-style API delivery.',
  Python: 'Core language for MedRAG, automation, and AI workflows.',
  'RESTful APIs': 'Used across freelance and client integrations.',
  GraphQL: 'Included in active backend capability set for flexible data access.',
  JWT: 'Used in MedRAG auth and secure API workflows.',
  RBAC: 'Used in MedRAG and KMCE Cricket Portal access control.',
  Supabase: 'Used in KMCE Cricket Portal for real-time data and auth.',
  RAG: 'Shipped in MedRAG with a large FAISS-backed retrieval layer.',
  FAISS: 'Used in a 4.4GB index powering MedRAG.',
  LLMs: 'Applied in MedRAG and ongoing AI systems work.',
  'Gemini API': 'Used in MedRAG for retrieval-backed generation.',
  'Prompt Engineering': 'Used in AI product workflows and RAG tuning.',
  'Vector DBs': 'Used in retrieval systems and current learning tracks.',
  'AWS (EC2/S3/RDS)': 'Used to deploy MedRAG and production services.',
  Docker: 'Used to package MedRAG and cloud-ready backend services.',
  'GitHub Actions': 'Used for CI/CD and release automation workflows.',
  'CI/CD': 'Used in deployment pipelines and release checks.',
  Vercel: 'Used for fast frontend deployment workflows.',
  Netlify: 'Used for client and landing-page deployment options.',
  GA4: 'Used for client analytics and conversion visibility.',
  Lighthouse: 'Used to keep shipped experiences honest on performance.',
  SEO: 'Used on client launches to improve discoverability.',
  Agile: 'Used across sprint delivery work.',
  LangChain: 'Currently exploring orchestration patterns for agentic AI.',
  'OpenAI API': 'Current learning focus for production-ready AI systems.',
  Pinecone: 'Learning vector infra tradeoffs for future RAG iterations.',
  Weaviate: 'Exploring alternative vector database ergonomics.',
  'System Design': 'Improving architecture decisions for larger systems.',
  DSA: 'Ongoing fundamentals work for interviews and problem solving.',
};

export const learningTopics = [
  {
    topic: 'LangChain',
    icon: 'device_hub',
    status: 'Active',
    desc: 'Exploring orchestration patterns for multi-step agent workflows and retrieval chains.',
  },
  {
    topic: 'OpenAI API',
    icon: 'smart_toy',
    status: 'Active',
    desc: 'Building deeper familiarity with production API patterns, tools, and prompt design.',
  },
  {
    topic: 'Pinecone',
    icon: 'database',
    status: 'Research',
    desc: 'Comparing managed vector infrastructure tradeoffs against FAISS-based local indexing.',
  },
  {
    topic: 'Weaviate',
    icon: 'scatter_plot',
    status: 'Research',
    desc: 'Studying schema design and retrieval ergonomics for future AI system upgrades.',
  },
  {
    topic: 'System Design',
    icon: 'account_tree',
    status: 'Deep Dive',
    desc: 'Strengthening architecture thinking around scaling, reliability, and service boundaries.',
  },
  {
    topic: 'DSA',
    icon: 'data_object',
    status: 'Ongoing',
    desc: 'Sharpening problem solving speed and depth for engineering interviews and fundamentals.',
  },
] as const;

export const benchmarkCards = [
  {
    title: '18+ Sites',
    category: 'Client Delivery',
    impact: '18+',
    label: 'Production Launches',
    stats: [
      { name: 'Named Clients', val: '19' },
      { name: 'Industries', val: '5+' },
      { name: 'Critical Bugs', val: '0' },
    ],
    desc: 'Client work translated into real launches, not mock work.',
  },
  {
    title: 'MedRAG',
    category: 'AI Systems',
    impact: '4.4GB',
    label: 'FAISS Index',
    stats: [
      { name: 'Latency', val: '2-3s' },
      { name: 'Auth', val: 'JWT + RBAC' },
      { name: 'Deploy', val: 'Docker + AWS' },
    ],
    desc: 'A grounded medical RAG backend tuned for fast answers on a large indexed corpus.',
  },
  {
    title: 'KMCE Cricket Portal',
    category: 'Realtime Platform',
    impact: '500+',
    label: 'Players Managed',
    stats: [
      { name: 'Teams', val: '10' },
      { name: 'Backend', val: 'Supabase' },
      { name: 'Permissions', val: 'RBAC' },
    ],
    desc: 'Realtime campus sports operations with role-aware management and live updates.',
  },
] as const;

export const clients = [
  'Bear Harbor',
  'Vintage Times',
  'Parall Forensics',
  'Brent Street Pizza',
  'Naati Dosa',
  'Joyous Food Factory',
  'Aikya Spaces',
  'Infinite Metric Limited',
  'RajaMahendravaram Palavu Centre',
  'Almacura',
  'The Market Titans',
  'MonkFit',
  '999tatva Media',
  'Flow Reach',
  'Sandeep Associates',
  'Sathya Interiors',
  'Love You Chai',
  'SABP Technologies LLP',
  'Cineo Hub',
] as const;

export const testimonials = [
  {
    author: 'The Market Titans',
    role: 'Client Review',
    quote:
      'Thank you Varun for your patience and understanding what I needed. The delivery was right on time. Highly recommend your work. Also, I have another website planned - will keep you posted.',
  },
  {
    author: 'Aikya Spaces',
    role: 'Client Review',
    quote:
      'Really impressed by your work. Very quick and impressive. The patience and understanding of customer needs is a great quality in a professional career.',
  },
  {
    author: 'Bhargav Majji',
    role: 'Founder & CEO, SABP Technologies LLP',
    quote:
      'The website showcases a clean, modern design reflecting a strong brand identity. Intuitive navigation makes it easy for visitors to explore. Special appreciation to Varun for dedicated effort and execution. Thank you for the swift service and timely support.',
  },
] as const;

export const liveProjectConfig = {
  name: 'MedRAG v2 - Agentic AI upgrade',
  status: 'active' as const,
  repository: 'medrag_backend',
};
