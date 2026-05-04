'use client';

import { useEffect, useState } from 'react';

type GitHubStatsPayload = { totalRepos: number; totalStars: number; totalCommitsLastYear: number; topLanguages: Array<{ language: string; count: number }>; };

function useNum(target: number) {
  const [v, setV] = useState(0);
  useEffect(() => { let f=0; const s=performance.now(); const t=(n:number)=>{const p=Math.min((n-s)/900,1);setV(Math.round(target*(1-Math.pow(1-p,3))));if(p<1)f=requestAnimationFrame(t);}; f=requestAnimationFrame(t); return()=>cancelAnimationFrame(f); }, [target]);
  return v;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsPayload|null>(null);
  useEffect(() => { let x=false; (async()=>{const r=await fetch('/api/github-stats');if(!r.ok||x)return;const d=await r.json();if(!x)setStats(d);})(); return()=>{x=true;}; }, []);
  const repos = useNum(stats?.totalRepos??0);
  const stars = useNum(stats?.totalStars??0);
  const commits = useNum(stats?.totalCommitsLastYear??0);
  const langs = stats?.topLanguages??[];

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Live Activity</p>
          <h3 className="mt-1 font-heading text-[17px] font-bold text-[#111827]">GitHub pulse, cached hourly.</h3>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-primary">
          <span className="material-symbols-outlined text-[18px]">code</span>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-[#FAFBFC] p-4"><p className="text-[11px] text-[muted-foreground]">Repos</p><p className="mt-1 font-heading text-[24px] font-bold text-[#111827]">{repos}</p></div>
        <div className="rounded-lg bg-[#FAFBFC] p-4"><p className="text-[11px] text-[muted-foreground]">Stars</p><p className="mt-1 font-heading text-[24px] font-bold text-[#111827]">{stars}</p></div>
        <div className="rounded-lg bg-[#FAFBFC] p-4"><p className="text-[11px] text-[muted-foreground]">Commits/Year</p><p className="mt-1 font-heading text-[24px] font-bold text-[#111827]">{commits}</p></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {langs.length ? langs.map(l=><span key={l.language} className="rounded-md bg-[#EEF2FF] px-2.5 py-1 text-xs font-semibold text-primary">{l.language} · {l.count}</span>) : <span className="text-xs text-[#D1D5DB]">Loading...</span>}
      </div>
    </div>
  );
}
