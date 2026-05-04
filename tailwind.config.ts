// Tailwind config — Jobs24x-exact design system.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './App.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
        heading: '#111827',
        body: '#6B7280',
        surface: '#FFFFFF',
        base: '#F7F8FA',
        'border-light': '#E5E7EB',
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 24px -4px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
