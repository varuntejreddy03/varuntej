'use client';

// Loading — clean light theme loading screen for App Router transitions.
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(100, current + 2));
    }, 35);

    return () => {
      window.clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <span className="material-symbols-outlined xl text-primary animate-pulse" style={{ color: '#64748B' }}>code</span>
          </div>
        </div>
        <p className="text-xl font-bold tracking-tight text-gray-900">Varun Tej Reddy N</p>
        <p className="mt-1 text-sm " style={{ color: '#9CA3AF' }}>Loading portfolio...</p>

        <div className="mt-8">
          <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-medium " style={{ color: '#9CA3AF' }}>
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
