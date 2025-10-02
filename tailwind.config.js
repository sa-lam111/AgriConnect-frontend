/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#004C3F',
        'secondary': '#FFC107',
        'accent': '#8BC34A',
        'neutral': '#F5F5F5',
        'text-primary': '#212121',
        'text-secondary': '#757575',
      }
    },
  },
  plugins: [],
}
