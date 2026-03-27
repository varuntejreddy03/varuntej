'use client';

// VisitorPulse records a visit once per session and shows the current weekly visitor count.
import { useEffect, useState } from 'react';

export default function VisitorPulse() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let ignore = false;

    async function syncVisitors() {
      const shouldTrack = !sessionStorage.getItem('portfolio_visit_tracked');
      const response = await fetch('/api/ping', {
        method: shouldTrack ? 'POST' : 'GET',
      });

      if (!response.ok || ignore) {
        return;
      }

      const data = (await response.json()) as { weeklyVisitors: number };
      if (!ignore) {
        setCount(data.weeklyVisitors);
        if (shouldTrack) {
          sessionStorage.setItem('portfolio_visit_tracked', '1');
        }
      }
    }

    syncVisitors();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-slate-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      {count === null ? 'Syncing visitor pulse' : `${count} developers visited this week`}
    </div>
  );
}
