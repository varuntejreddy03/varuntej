'use client';

// Logo keeps the existing round mark and gives it a subtle electric-blue hover glow.
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-full bg-primary/40 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
      <Image
        src="/criclelogo.png"
        alt="Varun Tej Reddy N logo"
        width={40}
        height={40}
        priority
        className="relative z-10 rounded-full bg-white object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
      />
    </div>
  );
}
