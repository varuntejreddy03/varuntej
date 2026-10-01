// Central portfolio content keeps all owner data, sections, and UI metadata in one source of truth.
import { shippedSites } from '@/lib/shipped';

export type ProjectItem = {
  id: string;
  title: string;
  kind: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
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

export const sitesShipped = shippedSites.length;

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Case studies', href: '#work' },
  { name: 'Portfolio', href: '#shipped' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
] as const;

export const projectItems: ProjectItem[] = [
  {
    id: 'medrag',
    title: 'MedRAG',
    kind: 'AI System',
    tagline: 'Grounded medical answers in 2–3 seconds.',
    description:
      'A medical retrieval-augmented generation backend over a 4.4GB FAISS index. FastAPI services secured with JWT + RBAC, packaged in Docker and deployed on AWS EC2/S3.',
    metrics: [
      { value: '4.4GB', label: 'FAISS index' },
      { value: '2–3s', label: 'Response time' },
      { value: 'JWT+RBAC', label: 'Access control' },
    ],
    tags: ['FastAPI', 'Python', 'FAISS', 'RAG', 'Gemini', 'Docker', 'AWS'],
    liveUrl: 'https://medrag.site',
    repoUrl: 'https://github.com/varuntejreddy03/medrag_backend',
  },
  {
    id: 'palavu-centre',
    title: 'Palavu Centre Ordering',
    kind: 'Full Stack Platform',
    tagline: 'Restaurant ordering, payments and a live admin.',
    description:
      'Customer storefront, admin dashboard and an Express 5 API for a Godavari cuisine restaurant. Neon Postgres via Prisma, Razorpay payment verification, Socket.IO live order updates, JWT cookie auth with CSRF protection and rate limiting.',
    metrics: [
      { value: '3', label: 'Apps: store, admin, API' },
      { value: 'Live', label: 'Socket.IO orders' },
      { value: 'Razorpay', label: 'Payments' },
    ],
    tags: ['React', 'Express', 'Prisma', 'Postgres', 'Socket.IO', 'Razorpay'],
    liveUrl: 'https://rjmpalavucentre.com',
    repoUrl: 'https://github.com/rajamahendravarampalavu/palavucentre-backend',
  },
  {
    id: 'optifirst-pos',
    title: 'OptiFirst POS',
    kind: 'Business Software',
    tagline: 'Paper sales sheets, replaced.',
    description:
      'A mobile-first daily sales and stock reporting app. Staff submit reports from their phones; admins get dashboards, charts and one-click PDF / Excel exports, with Google Sheets as the database via an Apps Script API.',
    metrics: [
      { value: 'PWA', label: 'Mobile-first' },
      { value: 'PDF+XLSX', label: 'Exports' },
      { value: 'Sheets', label: 'Zero-cost backend' },
    ],
    tags: ['React', 'TypeScript', 'Apps Script', 'Recharts', 'jsPDF'],
    repoUrl: 'https://github.com/betterbirdtz/OptiFirst-POS',
  },
  {
    id: 'kmce-cricket',
    title: 'KMCE Cricket Portal',
    kind: 'Realtime Web App',
    tagline: 'Live tournament operations for a whole campus.',
    description:
      'Real-time cricket operations portal for KMCE: tournaments, fixtures, live scores and player management, with role-based access for admins, organizers and teams.',
    metrics: [
      { value: '500+', label: 'Players' },
      { value: '10', label: 'Teams' },
      { value: 'Realtime', label: 'Supabase sync' },
    ],
    tags: ['React', 'Supabase', 'SQL', 'RBAC', 'Realtime'],
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
      'Design, build and launch client websites in agile sprint cycles, from brief to production deploy.',
      'Shipped sites for restaurants, interiors studios, logistics firms, agencies, clinics and SaaS brands in India, the UK, the US and Australia.',
      'Own cross-device QA, SEO basics and performance tuning on every launch.',
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
      'End-to-end builds for small businesses: design, development, hosting, domains and handover.',
      'Full stack products beyond marketing sites, including ordering platforms and the OptiFirst POS reporting app.',
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
      'Turned campus needs into production systems such as the KMCE Cricket Portal.',
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
  'React.js': 'Used across 58 shipped client websites and the KMCE Cricket Portal.',
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
