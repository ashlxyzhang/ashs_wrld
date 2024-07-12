/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#e79a8f',
        'dark-orange': '#bf6e64'
      }
    },
  },
  plugins: [],
}