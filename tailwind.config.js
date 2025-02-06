import tailwindScrollBarHide from "tailwind-scrollbar-hide"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        primaryHover:"#C11119", // Replace with your desired primary color
      }
    },
  },
  plugins: [tailwindScrollBarHide],
}
