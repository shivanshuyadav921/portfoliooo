import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(56, 189, 248, 0.16)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 32%)',
      },
    },
  },
  plugins: [],
};

export default config;
