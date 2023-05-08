/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": 'Raleway',
        "rancho": 'Rancho'
      },
      colors: {
        'cs-primary': '#331A15',
        'cs-secondary': '#374151',
        'cs-bg': '#F4F3F0',
        'cs-btn-bg': '#D2B48C'
      }
    },
  },
  plugins: [require("daisyui")],
}

