'use client';

// Logo with clean styling for light theme.
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="group relative">
      <Image
        src="/criclelogo.png"
        alt="Varun Tej Reddy N logo"
        width={40}
        height={40}
        priority
        className="relative z-10 rounded-full bg-white object-contain shadow-sm transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
