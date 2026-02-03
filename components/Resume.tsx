import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
  <div className="max-w-6xl mx-auto p-6">
    <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">VARUNTEJ REDDY</h1>
          <p className="text-slate-500 dark:text-slate-400">Frontend & Full-Stack Developer</p>
        </div>
        <div className="flex gap-4">
          <a 
            href="/resume.pdf" 
            download 
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">VARUNTEJ REDDY</h1>
              <p className="text-slate-500 dark:text-slate-400">Frontend & Full-Stack Developer</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/resume.pdf" 
                download 
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="900px"
            className="w-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;