'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';

type FormState = { fullName: string; company: string; email: string; whatsapp: string; projectType: string; message: string; website: string };
const init: FormState = { fullName: '', company: '', email: '', whatsapp: '', projectType: 'Business website', message: '', website: '' };
const projectTypes = ['Business website', 'Custom software', 'Both', 'Not sure yet'];

export default function ContactForm() {
  const [f, setF] = useState<FormState>(init);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');
  const msg = useMemo(
    () => (status === 'success' ? 'Sent. You will hear back within a day.' : status === 'error' ? notice || 'Something went wrong.' : ''),
    [notice, status],
  );
  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF((c) => ({ ...c, [e.target.name]: e.target.value }));
  const ic =
    'h-12 w-full rounded-xl border border-line bg-paper px-3.5 text-base text-ink outline-none transition-colors placeholder:text-[#8A867C] focus:border-ink focus:bg-white lg:text-[15px]';
  const lc = 'flex flex-col gap-1.5 text-sm font-semibold text-ink lg:gap-2';

  async function sub(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setNotice('');
    const { whatsapp, ...rest } = f;
    const payload = { ...rest, message: whatsapp.trim() ? `${f.message}\n\nWhatsApp: ${whatsapp.trim()}` : f.message };
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
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
    <form className="flex flex-col gap-3.5 rounded-[20px] bg-white p-5 text-ink lg:gap-[18px] lg:rounded-3xl lg:p-9" onSubmit={sub}>
      <fieldset>
        <legend className="text-sm font-semibold">What do you need?</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label
              key={type}
              className={`inline-flex h-11 cursor-pointer items-center rounded-full px-4 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-primary lg:h-10 ${
                f.projectType === type ? 'bg-ink font-semibold text-white' : 'border border-line font-medium hover:border-ink/40'
              }`}
            >
              <input type="radio" name="projectType" value={type} checked={f.projectType === type} onChange={chg} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className={lc}>
          Your name
          <input className={ic} name="fullName" placeholder="Full name" value={f.fullName} onChange={chg} required />
        </label>
        <label className={lc}>
          Business name
          <input className={ic} name="company" placeholder="e.g. your restaurant" value={f.company} onChange={chg} required />
        </label>
        <label className={lc}>
          Email
          <input className={ic} name="email" type="email" placeholder="you@business.com" value={f.email} onChange={chg} required />
        </label>
        <label className={lc}>
          <span>
            WhatsApp <span className="font-normal text-muted-foreground">(optional)</span>
          </span>
          <input className={ic} name="whatsapp" type="tel" placeholder="+91" value={f.whatsapp} onChange={chg} />
        </label>
      </div>
      <div className="hidden">
        <input name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={chg} />
      </div>
      <label className={lc}>
        Tell me about the project
        <textarea
          className={`${ic} h-[110px] resize-y py-3 lg:h-[130px]`}
          name="message"
          placeholder="What you do, what you need, and when you need it."
          value={f.message}
          onChange={chg}
          required
        />
      </label>

      {msg ? (
        <p role="status" className={`rounded-xl px-4 py-3 text-sm font-medium ${status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {msg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex h-14 items-center justify-center gap-2 rounded-full bg-ink text-base font-semibold text-white transition-colors hover:bg-[#2A2924] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send enquiry'}
        <Icon name="arrow-right" className="h-[18px] w-[18px]" />
      </button>
    </form>
  );
}
