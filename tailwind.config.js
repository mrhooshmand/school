/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'vazitmatn': ["'Vazirmatn',sans-serif"]
      },
      colors: {
        'custom-blue': '',
        'custom-yellow': '#DBD7D4',
        'custom-purple': ''
      }
    },
  },
  plugins: [],
}

