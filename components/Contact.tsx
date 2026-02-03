import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hi! I'm ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/918374967870?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200 dark:border-white/5">
      <div className="glass-card dark:bg-slate-900/50 rounded-[2.5rem] p-12 border-primary/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-bold mb-6">Let's build something amazing.</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
            Available for freelance projects and high-performance engineering roles.
          </p>
          <form className="grid gap-6 max-w-lg" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <input 
                className="bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black rounded-2xl px-6 py-4 text-sm outline-none transition-all" 
                placeholder="Your Name" 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                className="bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black rounded-2xl px-6 py-4 text-sm outline-none transition-all" 
                placeholder="Phone Number" 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea 
              className="bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black rounded-2xl px-6 py-4 text-sm outline-none transition-all resize-none" 
              placeholder="How can I help you?" 
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button 
              type="submit"
              className="bg-primary text-white py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
            >
              Send Inquiry
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;