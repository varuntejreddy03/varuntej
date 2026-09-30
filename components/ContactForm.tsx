'use client';

import Icon from '@/components/Icon';
import { useMemo, useState } from 'react';

type FormState = { fullName: string; company: string; email: string; projectType: string; budget: string; message: string; website: string };
const init: FormState = { fullName: '', company: '', email: '', projectType: 'Website', budget: '', message: '', website: '' };
const projectTypes = ['Website', 'Full Stack App', 'AI System', 'Hiring', 'Other'];

export default function ContactForm() {
  const [f, setF] = useState<FormState>(init);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');
  const msg = useMemo(
    () => (status === 'success' ? 'Sent. You will hear back within 24 hours.' : status === 'error' ? notice || 'Something went wrong.' : ''),
    [notice, status],
  );
  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((c) => ({ ...c, [e.target.name]: e.target.value }));
  const ic =
    'w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ink focus:bg-surface';
  const lc = 'mb-1.5 block text-[13px] font-medium text-ink';

  async function sub(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setNotice('');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const d = (await r.json()) as { message?: string; success?: boolean };
      if (!r.ok || !d.success) throw new Error(d.message || 'Failed');
      setStatus('success');
      setF(init);
    } catch (err) {
      setStatus('error');
      setNotice(err instanceof Error ? err.message : 'Failed');
    }
  }

  return (
    <form className="rounded-3xl border border-line bg-surface p-6 sm:p-8" onSubmit={sub}>
      <fieldset>
        <legend className={lc}>What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label
              key={type}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                f.projectType === type ? 'border-ink bg-ink text-paper' : 'border-line text-ink-soft hover:border-ink/40'
              }`}
            >
              <input type="radio" name="projectType" value={type} checked={f.projectType === type} onChange={chg} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={lc} htmlFor="cf-name">Name</label>
          <input id="cf-name" className={ic} name="fullName" placeholder="Your name" value={f.fullName} onChange={chg} required />
        </div>
        <div>
          <label className={lc} htmlFor="cf-company">Company</label>
          <input id="cf-company" className={ic} name="company" placeholder="Business name" value={f.company} onChange={chg} required />
        </div>
        <div>
          <label className={lc} htmlFor="cf-email">Email</label>
          <input id="cf-email" className={ic} name="email" type="email" placeholder="you@company.com" value={f.email} onChange={chg} required />
        </div>
        <div>
          <label className={lc} htmlFor="cf-budget">
            Budget <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input id="cf-budget" className={ic} name="budget" placeholder="e.g. ₹25,000" value={f.budget} onChange={chg} />
        </div>
      </div>
      <div className="hidden">
        <input name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={chg} />
      </div>
      <div className="mt-4">
        <label className={lc} htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          className={`${ic} min-h-[130px] resize-y`}
          name="message"
          placeholder="What you do, what the site should achieve, and when you need it."
          value={f.message}
          onChange={chg}
          required
        />
      </div>

      {msg ? (
        <p
          role="status"
          className={`mt-4 rounded-xl px-4 py-3 text-[14px] font-medium ${
            status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {msg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-primary disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
        <Icon name="arrow-right" className="h-[18px] w-[18px]" />
      </button>
    </form>
  );
}
