/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#FFF9FE',
        'light-pink': '#FD749B',
        'dark-blue': '#281AC8',
        'border-light': '#F0F0F0',
        'primary-dark': '#1E0338',
      },
      fontFamily: {
        'Merienda': ['Merienda', 'cursive'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(185deg, #FD749B 0%, #281AC8 100%)',
        'gradient-rev': 'linear-gradient(185deg, #281AC8 0%, #FD749B 100%)',
      }
    },
  },
  plugins: ['@tailwindcss/forms'],
}
