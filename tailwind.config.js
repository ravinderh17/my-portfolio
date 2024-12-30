/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.8rem', // Define a new size (e.g., 8px)
      },
    },
  },
  plugins: [],
}
