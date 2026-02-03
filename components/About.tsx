import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 border-t border-slate-200 dark:border-white/5">
      <div 
        ref={ref}
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">About Me</h3>
        <div className="space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          <p>
            I'm Varuntej Reddy N, a Computer Science student passionate about building web applications and exploring AI/ML technologies. I'm actively seeking internship opportunities to apply my academic knowledge and grow as a developer.
          </p>
          <p>
            During my studies, I've developed strong skills in <strong>React, JavaScript, Python, and Web Development</strong>. I've worked on multiple academic and personal projects focusing on clean code, responsive design, and user experience. I'm eager to contribute to real-world projects and learn industry best practices.
          </p>
          <p>
            I'm enthusiastic about learning, quick to adapt, and committed to becoming a skilled full-stack developer. I'm open to remote and on-site internship opportunities. <strong>Let's build something great together!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;