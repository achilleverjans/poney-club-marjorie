import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7ee',
          100: '#ddefda',
          200: '#b8ddb3',
          300: '#88c57f',
          400: '#5fa954',
          500: '#4a8e3f',
          600: '#3d7433',
          700: '#305c28',
          800: '#264820',
          900: '#1d3618',
        },
        cream: {
          50:  '#fdfaf4',
          100: '#faf3e0',
          200: '#f4e4bb',
          300: '#ecd08e',
          400: '#e0b75e',
          500: '#d09b38',
          600: '#b47c26',
          700: '#8f5f1d',
          800: '#6e4818',
          900: '#553614',
        },
        earth: {
          50:  '#faf6f1',
          100: '#f3e8db',
          200: '#e5cfb5',
          300: '#d3ae87',
          400: '#be8b5a',
          500: '#a87039',
          600: '#8b5a2d',
          700: '#6e4422',
          800: '#55331b',
          900: '#3e2514',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease-out both',
        'fade-in':     'fadeIn 0.9s ease-out both',
        'slide-right': 'slideRight 0.6s ease-out both',
        shimmer:       'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
