'use client';

// ResumeButton tracks resume views/downloads and keeps the public counter badge in sync.
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ResumeButtonProps = {
  label: string;
  href?: string;
  className?: string;
  showCount?: boolean;
  icon?: string;
  mode?: 'view' | 'download';
};

export default function ResumeButton({
  label,
  href = '/resume',
  className,
  showCount = true,
  icon = 'description',
  mode = 'view',
}: ResumeButtonProps) {
  const router = useRouter();
  const [count, setCount] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function loadCount() {
      const response = await fetch('/api/resume-download');
      if (!response.ok || ignore) {
        return;
      }

      const data = (await response.json()) as { count: number };
      if (!ignore) {
        setCount(data.count);
      }
    }

    loadCount();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleClick() {
    setBusy(true);

    try {
      const response = await fetch('/api/resume-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: mode,
        }),
      });

      if (response.ok) {
        const data = (await response.json()) as { count: number };
        setCount(data.count);
      }
    } catch {
      // Navigation continues even if tracking fails.
    } finally {
      setBusy(false);
      if (mode === 'download') {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(href);
      }
    }
  }

  const buttonClassName = [
    'inline-flex items-center gap-3 rounded-2xl border border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-[0.28em] transition-all',
    busy ? 'cursor-wait opacity-80' : 'hover:-translate-y-0.5 hover:border-primary/40 hover:text-white',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        className={buttonClassName}
      >
        <span>{label}</span>
        <span className="material-symbols-outlined text-base">{icon}</span>
      </button>
      {showCount ? (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
          Downloaded {count ?? '...'} times
        </span>
      ) : null}
    </div>
  );
}
