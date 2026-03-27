// Tailwind theme extensions mirror the existing dark, electric-blue portfolio palette.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './App.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        ink: '#0d0f14',
        'panel-dark': '#101723',
      },
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-display-google)', 'sans-serif'],
        sans: ['var(--font-sans)', 'var(--font-sans-google)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(37, 99, 235, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
