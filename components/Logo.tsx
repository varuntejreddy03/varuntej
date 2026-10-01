'use client';

// Round logo mark used in the navbar.
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
        className="relative z-10 h-[34px] w-[34px] rounded-full border border-line bg-white object-contain lg:h-10 lg:w-10"
      />
    </div>
  );
}
