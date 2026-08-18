/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6E2839',
          dark: '#591f2d',
        },
        forest: {
          DEFAULT: '#2E5D49',
          dark: '#234739',
        },
        gold: {
          DEFAULT: '#C79949',
        },
        ivory: {
          DEFAULT: '#FEF9F2',
        },
        ink: {
          DEFAULT: '#2B2420',
          soft: '#5B5148',
        },
        line: {
          DEFAULT: '#E7DFD2',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'xl': '14px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(43, 36, 32, 0.08)',
      },
    },
  },
  plugins: [],
}