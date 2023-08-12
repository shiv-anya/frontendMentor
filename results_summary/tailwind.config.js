/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        Red: "hsla(0, 100%, 67%, 0.1)",
        Orangey: "hsl(39, 100%, 56%, 0.1)",
        Green: "hsl(166, 100%, 37%, 0.1)",
        Cobalt: "hsl(234, 85%, 45%, 0.1)",
      }
    },
  },
  plugins: [],
}