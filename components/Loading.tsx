'use client';

// Loading preserves the terminal boot feel for App Router transitions.
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(100, current + 2));
    }, 35);

    const lineTimer = window.setInterval(() => {
      setLine((current) => Math.min(6, current + 1));
    }, 140);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(lineTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">VARUN TEJ REDDY N</p>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.42em] text-slate-500">
            Booting portfolio runtime
          </p>
        </div>

        <div className="code-container overflow-hidden rounded-[2rem] border border-white/10">
          <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-5 py-4">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">main.tsx</span>
          </div>

          <div className="space-y-2 p-6 font-mono text-xs text-slate-300">
            {line >= 0 ? <p><span className="syn-keyword">import</span> <span className="syn-var">portfolio</span> <span className="syn-keyword">from</span> <span className="syn-str">&apos;./varun&apos;</span>;</p> : null}
            {line >= 1 ? <p><span className="syn-keyword">const</span> <span className="syn-var">status</span> = <span className="syn-str">&apos;production&apos;</span>;</p> : null}
            {line >= 2 ? <p><span className="syn-keyword">const</span> <span className="syn-var">stack</span> = [<span className="syn-str">&apos;Next.js&apos;</span>, <span className="syn-str">&apos;AI&apos;</span>];</p> : null}
            {line >= 3 ? <p><span className="syn-keyword">const</span> <span className="syn-var">sites</span> = <span className="syn-str">&apos;15+&apos;</span>;</p> : null}
            {line >= 4 ? <p><span className="syn-keyword">const</span> <span className="syn-var">bugs</span> = <span className="syn-str">&apos;0 critical&apos;</span>;</p> : null}
            {line >= 5 ? <p><span className="syn-func">launch</span>(portfolio, status, stack, sites, bugs);</p> : null}
          </div>

          <div className="border-t border-white/5 bg-white/5 px-6 py-5">
            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-primary transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              {progress}% loaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
