import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)', 'Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-kanit)', 'Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
      },

      colors: {
        violet: {
          DEFAULT: '#7c3aed',
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
