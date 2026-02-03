import React from 'react';
import CustomCursor from './CustomCursor';

const ResumeContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <CustomCursor />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-12">
          
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              ← Back to Home
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">VARUNTEJ REDDY N</h1>
            <p className="text-xl text-primary font-semibold mb-4">Frontend / Full-Stack Developer — AI-Enabled Web Applications</p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-400">
              <span>Hyderabad, India</span>
              <span>•</span>
              <span>+91-8374967870</span>
              <span>•</span>
              <a href="mailto:varuntejreddy03@gmail.com" className="hover:text-primary">varuntejreddy03@gmail.com</a>
              <span>•</span>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <span>•</span>
              <a href="#" className="hover:text-primary">GitHub</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Summary</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Frontend and full-stack developer with freelance experience building production React and Next.js applications for real businesses. Comfortable owning end-to-end delivery from UI and performance optimization to deployment and analytics.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Experience</h2>
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Developer & Digital Marketing Analyst</h3>
                <p className="text-primary font-semibold">2025 – Present</p>
                <p className="text-slate-500 dark:text-slate-400 mb-3">Freelance / Contract — Hyderabad, India</p>
                <p className="text-slate-600 dark:text-slate-300 mb-3"><strong>Clients:</strong> The Grind Cafe, Jharoka.in, PartCart</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Designed and developed responsive landing pages using React, TypeScript, and Tailwind CSS.</li>
                  <li>• Improved page load performance and SEO, achieving Lighthouse performance scores above 90 on mobile for client websites.</li>
                  <li>• Planned and optimized Google Ads and Meta Ads campaigns, iterating on UI and content using GA4</li>
                  <li>• Worked directly with the business owner to independently deliver development and deployment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Projects</h2>
            <div className="space-y-8">
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">MedRAG — AI Healthcare Diagnosis Copilot</h3>
                  <span className="text-primary font-semibold">2025</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-2">Next.js, FastAPI, Gemini API, FAISS, AWS</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 mb-2">
                  <li>• Built a RAG-based medical QA web application using a 4.4GB FAISS vector index with sub-second query latency.</li>
                  <li>• Implemented JWT authentication, rate limiting, and session management in a FastAPI backend.</li>
                  <li>• Deployed the application using Docker on AWS (EC2, S3, RDS).</li>
                </ul>
                <p className="text-primary">Live: medrag.site</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Jharoka Heritage Furniture — E-commerce Showcase Website</h3>
                  <span className="text-primary font-semibold">2024</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-2">Next.js, TypeScript, Tailwind CSS</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 mb-2">
                  <li>• Built a single-page furniture showcase with animated sections, image galleries, and mobile-first design.</li>
                  <li>• Integrated contact forms, Google Maps, and customer testimonials.</li>
                </ul>
                <p className="text-primary">Live: jharoka.in</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">KMCE Cricket Portal — Tournament Management Platform</h3>
                  <span className="text-primary font-semibold">2024</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-2">Next.js, Supabase, Tailwind CSS</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 mb-2">
                  <li>• Developed a tournament platform with team dashboards, admin workflows, and role-based access.</li>
                  <li>• Implemented Supabase authentication and SQL-backed storage.</li>
                </ul>
                <p className="text-primary">Live: kmcecricket.netlify.app</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">The Grind Cafe — Business Website</h3>
                  <span className="text-primary font-semibold">2025</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-2">React, TypeScript, Tailwind CSS, SEO</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 mb-2">
                  <li>• Developed and deployed an SEO-optimized website for a multi-location cafe business.</li>
                </ul>
                <p className="text-primary">Live: thegrindcafe.in</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">PartCart — Food Ordering Platform (WIP)</h3>
                  <span className="text-primary font-semibold">2025</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-2">Next.js, TypeScript, Tailwind CSS</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 mb-2">
                  <li>• Building a responsive food-ordering and catering inquiry platform.</li>
                </ul>
                <p className="text-primary">Preview: partycart.in</p>
              </div>
            </div>
          </div>

          {/* Skills & Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Skills & Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Languages:</h4>
                  <p className="text-slate-600 dark:text-slate-300">JavaScript, TypeScript, Python, Java, SQL</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Frontend:</h4>
                  <p className="text-slate-600 dark:text-slate-300">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Vite</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Backend:</h4>
                  <p className="text-slate-600 dark:text-slate-300">FastAPI, Node.js, REST APIs, JWT Authentication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI Systems:</h4>
                  <p className="text-slate-600 dark:text-slate-300">RAG Pipelines, FAISS, Gemini API, Vector Search</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cloud & Tools:</h4>
                  <p className="text-slate-600 dark:text-slate-300">AWS (EC2, S3, RDS), Docker, Cloudflare Pages, Git, GA4, Google Ads, Meta Ads</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Education:</h4>
                  <p className="text-slate-600 dark:text-slate-300">B.Tech — Computer Science Engineering (CSC)</p>
                  <p className="text-slate-500 dark:text-slate-400">Keshav Memorial College of Engineering, Hyderabad</p>
                  <p className="text-slate-500 dark:text-slate-400">Expected 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;