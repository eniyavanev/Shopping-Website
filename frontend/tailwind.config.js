/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'updock': ['Updock', 'cursive'],
      },
      colors: {
        'amazon-orange': '#FF9900',
        'amazon-blue': '#146EB4',
      },
    },
  },
  plugins: [],
}