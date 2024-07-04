/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
        'arial-sans-serif': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}