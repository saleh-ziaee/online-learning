/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          500:"#9E5CF2",
          100:"#b176f2",
          200:"#fac1f1",
        },
        secondary:{
          500:"#F5F2FA",
          300:"#F5F5F5",
          800:"#c7c6c6"
        }
      },
    fontfamily:{
        Estedad :["Estedad"]
    }
    },
  },
  plugins: [],
}
