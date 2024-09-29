/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '9xl': '9.5rem',
      }
    },
    fontFamily:{
      custom1: ["Custom-1", "FoundersGroteskXCond-Bold"],
      custom2: ["Custom-2", "FoundersGroteskXCond-Lt"],
      custom3: ["Custom-3", "FoundersGrotesk-Regular"]
    }
    
  },
  plugins: [],
}

