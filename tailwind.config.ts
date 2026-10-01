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
        paper: '#F5F3EE',
        ink: '#15140F',
        'ink-soft': '#3A3833',
        muted: {
          DEFAULT: '#F1EFE9',
          foreground: '#5E5B53',
        },
        line: '#E2DED5',
        night: '#121210',
        surface: '#FFFFFF',
        accent: {
          DEFAULT: '#2F4BFF',
          soft: '#E9ECFF',
          light: '#A9B4FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Figtree', 'system-ui', 'sans-serif'],
        heading: ['var(--font-display)', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
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
