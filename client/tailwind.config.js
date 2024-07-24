/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '4xl' : '2.5rem'
      },
      fontFamily : {
        '10xl' : ['9rem',{lineHeight : '1.2'}]
      }
    },
  },
  plugins: [],
}

