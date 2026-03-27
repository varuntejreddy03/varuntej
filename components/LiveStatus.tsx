'use client';

// LiveStatus fetches the current build focus and latest commit metadata for the hero card.
import { useEffect, useState } from 'react';

type StatusPayload = {
  project: string;
  status: 'active' | 'paused';
  lastCommit: null | {
    message: string;
    relativeTime: string;
    url: string;
    sha: string;
  };
};

export default function LiveStatus() {
  const [data, setData] = useState<StatusPayload | null>(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      const response = await fetch('/api/current-project');
      if (!response.ok || ignore) {
        return;
      }

      const payload = (await response.json()) as StatusPayload;
      if (!ignore) {
        setData(payload);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const isActive = data?.status !== 'paused';

  return (
    <div className="terminal-panel rounded-[2rem] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[9px] font-black uppercase tracking-[0.34em] text-slate-400">Currently Building</p>
        <span className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]' : 'bg-amber-400 shadow-[0_0_12px_#fbbf24]'}`} />
      </div>
      <p className="mb-2 text-sm font-bold text-white">{data?.project ?? 'MedRAG v2 — Agentic AI upgrade'}</p>
      {data?.lastCommit ? (
        <a
          href={data.lastCommit.url}
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-primary/30"
        >
          <p className="mb-1 text-[9px] font-black uppercase tracking-[0.24em] text-slate-500">Latest Commit</p>
          <p className="text-xs font-bold text-slate-100">{data.lastCommit.message}</p>
          <p className="mt-2 font-mono text-[10px] text-primary">
            {data.lastCommit.sha} • {data.lastCommit.relativeTime}
          </p>
        </a>
      ) : (
        <p className="text-xs text-slate-400">Syncing latest commit...</p>
      )}
    </div>
  );
}
