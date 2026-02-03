import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const fullName = "VARUNTEJ REDDY";

  // Faster Loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Sequential line typing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev < 10 ? prev + 1 : prev));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // Letter by letter name animation
  useEffect(() => {
    const nameTimer = setInterval(() => {
      setNameIndex(prev => (prev < fullName.length ? prev + 1 : prev));
    }, 60); // 60ms per letter for a smooth reveal
    return () => clearInterval(nameTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6">
        {/* Top Header - Compact Logo */}
        <div className="flex flex-col items-center mb-8 animate-loading-in">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl animate-pulse rounded-full" />
            <img src="/criclelogo.png" alt="Logo" className="w-14 h-14 rounded-full bg-white relative z-10 border-2 border-white/10 shadow-lg" />

            {/* Rapid Orbital Particles */}
            <div className="orbit-particle scale-75" style={{ animationDelay: '0s', animationDuration: '2s' }} />
            <div className="orbit-particle scale-75" style={{ animationDelay: '-1s', animationDuration: '2s' }} />
          </div>

          {/* Letter by Letter Name */}
          <h1 className="text-2xl sm:text-4xl font-black tracking-tighter text-white title-glow h-10 sm:h-12 flex items-center">
            {fullName.substring(0, nameIndex)}
            {nameIndex < fullName.length && <span className="w-1.5 h-6 sm:h-8 bg-blue-500 animate-pulse ml-1" />}
          </h1>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-1">Booting Environment...</p>
        </div>

        {/* The JS File Loader */}
        <div className="code-container rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#0a0f1e]/90 backdrop-blur-3xl shadow-xl">
          {/* Terminal Title Bar */}
          <div className="bg-white/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-xs">javascript</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">main.js</span>
            </div>
            <div className="w-8 h-1 bg-white/5 rounded-full" />
          </div>

          {/* Code Body - Faster Pacing */}
          <div className="p-6 sm:p-8 font-mono text-[10px] sm:text-xs leading-relaxed space-y-1 min-h-[250px]">
            {currentLine >= 0 && (
              <div className="flex gap-3">
                <span className="text-slate-600 select-none w-3">1</span>
                <div className="line-animate"><span className="syn-keyword">import</span> <span className="syn-var">experience</span> <span className="syn-keyword">from</span> <span className="syn-str">'./site'</span><span className="syn-punct">;</span></div>
              </div>
            )}
            {currentLine >= 1 && (
              <div className="flex gap-3">
                <span className="text-slate-600 select-none w-3">2</span>
                <div className="line-animate"><span className="syn-keyword">const</span> <span className="syn-var">config</span> <span className="syn-punct">=</span> <span className="syn-punct">{'{'}</span></div>
              </div>
            )}
            {currentLine >= 2 && (
              <div className="flex gap-3 pl-3">
                <span className="text-slate-600 select-none w-3">3</span>
                <div className="line-animate"><span className="syn-var">name</span><span className="syn-punct">:</span> <span className="syn-str">"Varuntej Reddy"</span><span className="syn-punct">,</span></div>
              </div>
            )}
            {currentLine >= 3 && (
              <div className="flex gap-3 pl-3">
                <span className="text-slate-600 select-none w-3">4</span>
                <div className="line-animate"><span className="syn-var">role</span><span className="syn-punct">:</span> <span className="syn-str">"Developer"</span><span className="syn-punct">,</span></div>
              </div>
            )}
            {currentLine >= 4 && (
              <div className="flex gap-3 pl-3">
                <span className="text-slate-600 select-none w-3">5</span>
                <div className="line-animate"><span className="syn-var">speed</span><span className="syn-punct">:</span> <span className="syn-str">"Optimized"</span><span className="syn-punct">,</span></div>
              </div>
            )}
            {currentLine >= 5 && (
              <div className="flex gap-3">
                <span className="text-slate-600 select-none w-3">6</span>
                <div className="line-animate"><span className="syn-punct">{'}'}</span><span className="syn-punct">;</span></div>
              </div>
            )}
            {currentLine >= 6 && (
              <div className="flex gap-3">
                <span className="text-slate-600 select-none w-3">7</span>
                <div className="line-animate"><span className="syn-func">init</span><span className="syn-punct">(</span><span className="syn-var">config</span><span className="syn-punct">)</span><span className="syn-punct">;</span><span className="typing-cursor" /></div>
              </div>
            )}
          </div>

          {/* Progress Bar Footer */}
          <div className="bg-white/5 p-5 sm:p-6 text-center">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[10px] font-bold text-white tracking-widest">{progress}%</span>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest animate-pulse">Launching...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
