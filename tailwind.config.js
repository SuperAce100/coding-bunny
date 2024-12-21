/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-pink': {
          light: '#FFD6D6',
          dark: '#FF8FA3',
        },
        'background': {
          light: '#FFF0F5',
          dark: '#121212',
        },
        'surface': {
          light: '#F8F8F8',
          dark: '#1E1E1E',
        },
        'text': {
          light: '#2D2D2D',
          dark: '#F0F0F0',
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
} 