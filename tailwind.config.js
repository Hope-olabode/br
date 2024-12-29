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
        
      },
      boxShadow: {
        custom: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
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

