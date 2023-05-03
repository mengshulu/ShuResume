/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1280px'
    },
    container: {
    },
    extend: {},
  },
  plugins: [],
}