/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        'dark600':'#2E2E2E',
        'dark500':'#414141',
        'gray400':'#777777',
        'light': '#FFFFFF',
        'primary300':'#FFCC21',
        'primary400':'#FF963C',
        'primary500':'#EA6C00',
        'secondary300':'#8FE9D0',
      },
      fontFamily:{
        'Hiragino':['Hiragino','sans-serif'],
        'Inter':['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}