import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070917',
        card: '#0f1329',
        neonBlue: '#4facfe',
        neonPurple: '#9f7aea',
      },
      boxShadow: {
        glow: '0 0 35px rgba(95, 116, 255, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(136, 146, 176, 0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
