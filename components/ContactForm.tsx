'use client';

import { useMemo, useState } from 'react';

type FormState = { fullName: string; company: string; email: string; projectType: string; budget: string; message: string; website: string; };
const init: FormState = { fullName: '', company: '', email: '', projectType: 'Website', budget: '', message: '', website: '' };

export default function ContactForm() {
  const [f, setF] = useState<FormState>(init);
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [notice, setNotice] = useState('');
  const msg = useMemo(() => status==='success'?'✓ Sent! Response within 24h.':status==='error'?(notice||'Error.'):status==='loading'?'Sending...':'', [notice,status]);
  const chg = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setF(c=>({...c,[e.target.name]:e.target.value}));
  const ic = 'w-full rounded-lg border border-[#E5E7EB] bg-[#FAFBFC] px-4 py-3 text-sm text-[#111827] outline-none transition-all placeholder:text-[#D1D5DB] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

  async function sub(e: React.FormEvent) {
    e.preventDefault(); setStatus('loading'); setNotice('');
    try {
      const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(f) });
      const d = (await r.json()) as {message?:string;success?:boolean};
      if(!r.ok||!d.success) throw new Error(d.message||'Failed');
      setStatus('success'); setF(init);
    } catch(err) { setStatus('error'); setNotice(err instanceof Error?err.message:'Failed'); }
  }

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
      <div className="border-b border-[#F3F4F6] bg-[#FAFBFC] px-5 py-3.5">
        <p className="text-sm font-semibold text-[#111827]">Send a Message</p>
      </div>
      {msg?<div className={`px-5 py-2.5 text-sm font-medium ${status==='success'?'bg-[#ECFDF5] text-[#059669]':status==='error'?'bg-[#FEF2F2] text-[#DC2626]':'bg-[#EEF2FF] text-primary'}`}>{msg}</div>:null}
      <form className="space-y-4 p-5" onSubmit={sub}>
        <div className="grid gap-4 md:grid-cols-2">
          <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Full Name</label><input className={ic} name="fullName" placeholder="Your name" value={f.fullName} onChange={chg} required/></div>
          <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Company</label><input className={ic} name="company" placeholder="Company" value={f.company} onChange={chg} required/></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Email</label><input className={ic} name="email" type="email" placeholder="team@co.com" value={f.email} onChange={chg} required/></div>
          <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Project Type</label><select className={ic} name="projectType" value={f.projectType} onChange={chg}><option>Website</option><option>AI System</option><option>Full Stack App</option><option>Other</option></select></div>
        </div>
        <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Budget</label><input className={ic} name="budget" placeholder="Optional" value={f.budget} onChange={chg}/></div>
        <div className="hidden"><input name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={chg}/></div>
        <div><label className="mb-1.5 block text-xs font-semibold text-[#374151]">Message</label><textarea className={`${ic} min-h-[120px] resize-none`} name="message" placeholder="Scope, timeline, outcome." value={f.message} onChange={chg} required/></div>
        <button type="submit" disabled={status==='loading'} className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8] disabled:opacity-60">
          {status==='loading'?'Sending...':'Send Message'}<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </form>
    </div>
  );
}
