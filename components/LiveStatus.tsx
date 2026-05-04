'use client';

// LiveStatus — clean light card for current project status.
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
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium " style={{ color: '#64748B' }}>Currently Building</p>
        <span className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-amber-400'}`} />
      </div>
      <p className="mb-2 text-sm font-semibold text-gray-900">{data?.project ?? 'MedRAG v2 — Agentic AI upgrade'}</p>
      {data?.lastCommit ? (
        <a
          href={data.lastCommit.url}
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:border-primary/30"
        >
          <p className="mb-1 text-xs font-medium " style={{ color: '#64748B' }}>Latest Commit</p>
          <p className="text-xs font-semibold text-gray-900">{data.lastCommit.message}</p>
          <p className="mt-1 text-xs text-primary">
            {data.lastCommit.sha} • {data.lastCommit.relativeTime}
          </p>
        </a>
      ) : (
        <p className="text-xs " style={{ color: '#9CA3AF' }}>Syncing latest commit...</p>
      )}
    </div>
  );
}
