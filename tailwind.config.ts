// Tailwind config — paper/ink portfolio design system.
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
        primary: '#2F4BFF',
        'primary-hover': '#1E36E0',
        paper: '#F6F5F1',
        ink: '#111110',
        'ink-soft': '#3B3A37',
        muted: {
          DEFAULT: '#F1EFEA',
          foreground: '#6E6B64',
        },
        line: '#E4E1D9',
        night: '#0F0F0E',
        surface: '#FFFFFF',
        accent: {
          DEFAULT: '#2F4BFF',
          soft: '#E9ECFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif-display)', 'Georgia', 'serif'],
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
