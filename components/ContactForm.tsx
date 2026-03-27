'use client';

// ContactForm submits project inquiries through the Brevo-backed API route with terminal-style feedback.
import { useMemo, useState } from 'react';

type FormState = {
  fullName: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  fullName: '',
  company: '',
  email: '',
  projectType: 'Website',
  budget: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState<string>('');

  const terminalMessage = useMemo(() => {
    if (status === 'success') {
      return '✓ Message transmitted. Expected response: < 24h';
    }

    if (status === 'error') {
      return notice || 'Transmission failed. Re-open the channel and retry.';
    }

    if (status === 'loading') {
      return 'Encrypting payload and opening relay...';
    }

    return '$ transmit --project-inquiry';
  }, [notice, status]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setNotice('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string; success?: boolean };

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Message delivery failed.');
      }

      setStatus('success');
      setFormData(initialState);
    } catch (error) {
      setStatus('error');
      setNotice(error instanceof Error ? error.message : 'Message delivery failed.');
    }
  }

  return (
    <div className="contact-terminal rounded-[2.5rem] overflow-hidden">
      <div className="terminal-header flex items-center justify-between px-6 py-4 sm:px-8">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
          /api/contact
        </span>
      </div>

      <div className="border-b border-white/5 bg-[#0f1727] px-6 py-4 font-mono text-[11px] text-emerald-300 sm:px-8">
        {status === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-emerald-300/30 border-t-emerald-300" />
            {terminalMessage}
          </span>
        ) : (
          terminalMessage
        )}
      </div>

      <form className="space-y-6 p-6 sm:p-8 lg:p-10" onSubmit={handleSubmit}>
        {status === 'success' ? (
          <div className="terminal-toast-enter rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-200">
            ✓ Message transmitted. Expected response: &lt; 24h
          </div>
        ) : null}
        {status === 'error' ? (
          <div className="terminal-toast-enter rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm font-bold text-rose-200">
            {notice}
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Full Name
            </label>
            <input
              className="glow-input w-full rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
              name="fullName"
              placeholder="Varun-ready contact"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Company
            </label>
            <input
              className="glow-input w-full rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
              name="company"
              placeholder="Company / team"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Email
            </label>
            <input
              className="glow-input w-full rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
              name="email"
              type="email"
              placeholder="team@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Project Type
            </label>
            <select
              className="glow-input w-full rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="Website">Website</option>
              <option value="AI System">AI System</option>
              <option value="Full Stack App">Full Stack App</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
              Budget Range
            </label>
            <input
              className="glow-input w-full rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
              name="budget"
              placeholder="Optional"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
            Message
          </label>
          <textarea
            className="glow-input min-h-[170px] w-full resize-none rounded-2xl border border-transparent bg-white/5 px-5 py-4 text-sm font-semibold text-white outline-none transition-all focus:border-primary"
            name="message"
            placeholder="Share the product scope, timeline, and the outcome you need."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-contact-main flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-[10px] font-black uppercase tracking-[0.36em]"
        >
          {status === 'loading' ? 'Transmitting' : 'Send Message'}
          <span className="material-symbols-outlined text-lg">arrow_outward</span>
        </button>
      </form>
    </div>
  );
}
