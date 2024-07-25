/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["autumn", "dark", "cupcake"],
  },
  theme: {
    fontFamily: {
      outfit: ["Outfit", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}