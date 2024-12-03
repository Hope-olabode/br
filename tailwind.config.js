/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa-bold': ['Nexa-bold', 'sana-serif'],
        'nexa-light': ['Nexa-light', 'sana-serif'],
        'poopins': ['Poppins', 'sana-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/Images/hero-pattern.svg')",
        
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'group-hover'],
      fill: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}

