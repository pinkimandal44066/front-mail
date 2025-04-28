/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'century-gothic': ['Century Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}