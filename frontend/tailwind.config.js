/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/public/unsplash.jpg')",
        'backgrounda': "url('/public/A-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}