/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4B6C',
        dark: '#111111',
        grayLight: '#F3F4F6'
      }
    },
  },
  plugins: [],
}
