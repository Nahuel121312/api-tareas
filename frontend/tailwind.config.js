/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          50: "#EFF2F6",
          100: "#D1DAE5",
          200: "#B4C2D5",
          300: "#97AAC4",
          400: "#7992B4",
          500: "#5C7AA3",
          600: "#4B6486",
          700: "#3B4E68",
          800: "#2A384B",
          900: "#1F2937",
          950: "#090C10"
        }
      }
    },
  },
  plugins: [],
}

