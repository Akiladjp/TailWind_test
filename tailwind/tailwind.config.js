/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'neutraSilver': '#F5F7FA',
        'neutralGrey': '#4D4D4D',
        'brand-primary': '#4CAF4F',
        'neutraGray': '#717171',
        'gray-900': '#18191F',
      }
    },
  },
  plugins: [],
}

