/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        Lora: ['Lora', 'sans-serif'],
        Varela:["Varela Round",'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  
}
