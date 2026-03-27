'use client';

// GitHubStats fetches cached GitHub API data and animates the headline counters.
import { useEffect, useMemo, useState } from 'react';

type GitHubStatsPayload = {
  totalRepos: number;
  totalStars: number;
  totalCommitsLastYear: number;
  topLanguages: Array<{ language: string; count: number }>;
};

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 900, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsPayload | null>(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      const response = await fetch('/api/github-stats');
      if (!response.ok || ignore) {
        return;
      }

      const payload = (await response.json()) as GitHubStatsPayload;
      if (!ignore) {
        setStats(payload);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const totalRepos = useAnimatedNumber(stats?.totalRepos ?? 0);
  const totalStars = useAnimatedNumber(stats?.totalStars ?? 0);
  const totalCommits = useAnimatedNumber(stats?.totalCommitsLastYear ?? 0);

  const languages = useMemo(() => stats?.topLanguages ?? [], [stats]);

  return (
    <div className="terminal-panel rounded-[2.4rem] p-8 lg:p-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary">Live Activity</p>
          <h3 className="text-2xl font-black tracking-tight text-white">GitHub pulse, cached hourly.</h3>
        </div>
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Repos</p>
          <p className="mt-3 text-3xl font-black text-white">{totalRepos}</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Stars</p>
          <p className="mt-3 text-3xl font-black text-white">{totalStars}</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">Commits / Year</p>
          <p className="mt-3 text-3xl font-black text-white">{totalCommits}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {languages.length ? (
          languages.map((item) => (
            <span
              key={item.language}
              className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-200"
            >
              {item.language} • {item.count}
            </span>
          ))
        ) : (
          <span className="text-xs text-slate-400">Fetching top languages...</span>
        )}
      </div>
    </div>
  );
}
