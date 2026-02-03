import React from 'react';

interface BlogProps {
  blogPostIdeas: string[];
}

const Blog: React.FC<BlogProps> = ({ blogPostIdeas }) => {
  return (
    <section id="blog" className="py-16 border-t border-slate-200 dark:border-white/5">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12">Technical Insights</h3>
      <div className="grid gap-4">
        {blogPostIdeas.map((title, i) => (
          <div key={i} className="p-6 light-card dark:glass-card rounded-2xl hover:border-primary/50 transition-colors cursor-pointer group flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-lg font-mono text-slate-300 dark:text-slate-700">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">{title}</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;