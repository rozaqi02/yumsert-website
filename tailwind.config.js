/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yumsert-blue': '#38b6ff',
        'yumsert-orange': '#ff914d',
      },
      fontFamily: {
        cocacola: ['"DIN Next Pro"', 'sans-serif'], // Font mirip Coca-Cola
      },
    },
  },
  plugins: [],
}