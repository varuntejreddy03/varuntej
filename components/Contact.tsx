import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../contact.css';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `*System Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Payload:* ${formData.message}`
    );
    window.open(`https://wa.me/918374967870?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'terminal', url: 'https://github.com/varuntejreddy03' },
    { name: 'LinkedIn', icon: 'box', url: 'https://linkedin.com/in/nvaruntej' },
    { name: 'Email', icon: 'mail', url: 'mailto:varuntejreddy03@gmail.com' }
  ];

  return (
    <section id="contact" className="py-12 lg:py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden px-4 sm:px-0">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[800px] h-full lg:h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-32 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left: Content & CTA */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 lg:mb-12 flex items-center gap-4">
            Get in touch
            <span className="h-px w-12 bg-primary/30" />
          </h3>

          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-8 lg:mb-10">
            Let's build <br />
            <span className="text-primary italic">something amazing.</span>
          </h2>

          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mb-12">
            Whether you're looking for an <span className="text-slate-900 dark:text-white font-bold">Engineering Intern</span> or a developer to build your next <span className="text-slate-900 dark:text-white font-bold">Bespoke Website</span>, let's connect.
          </p>

          {/* Social Hub */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item group/link"
                title={link.name}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>

          <div className="mt-16 space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Response Pattern</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-1 h-6 rounded-full bg-primary ${i < 4 ? 'opacity-100' : 'opacity-20'}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">Usually within 24h</span>
            </div>
          </div>
        </div>

        {/* Right: The Terminal Form */}
        <div className="relative">
          <div className="contact-terminal rounded-[2.5rem] overflow-hidden">
            {/* Terminal Header */}
            <div className="terminal-header px-8 py-5 flex items-center justify-between">
              <div className="flex gap-2.5">
                <div className="dot bg-[#ff5f56]" />
                <div className="dot bg-[#ffbd2e]" />
                <div className="dot bg-[#27c93f]" />
              </div>
              <span className="text-[10px] font-bold font-mono text-slate-500 tracking-widest uppercase">System.Connect()</span>
            </div>

            <form className="p-10 lg:p-14 space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                <input
                  className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 dark:text-white outline-none transition-all glow-input"
                  placeholder="Full Name / Company"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Endpoint</label>
                <input
                  className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 dark:text-white outline-none transition-all glow-input"
                  placeholder="name@email.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Payload</label>
                <textarea
                  className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 dark:text-white outline-none transition-all resize-none min-h-[150px] glow-input"
                  placeholder="Briefly describe your objectives..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-contact-main w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-xl shadow-primary/20 flex items-center justify-center gap-4 animate-fade-in"
              >
                Execute Inquiry
                <span className="material-symbols-outlined text-lg">bolt</span>
              </button>
            </form>
          </div>

          {/* Floating Status Detail */}
          <div className="absolute -bottom-8 -right-8 p-6 bg-slate-900 text-white rounded-3xl shadow-2xl hidden lg:block">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">Status</p>
            </div>
            <p className="text-[10px] font-bold font-mono">ENCRYPTED_SSL_ACTIVE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;