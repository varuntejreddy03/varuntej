import React, { memo } from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />

      {/* User's Custom Logo Image */}
      <img
        src="/criclelogo.png"
        alt="Varuntej Reddy Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white object-contain relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg]"
        loading="eager"
      />
    </div>
  );
};

export default memo(Logo);
