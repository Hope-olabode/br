/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nexa-bold": ["Nexa-bold", "sana-serif"],
        "nexa-light": ["Nexa-light", "sana-serif"],
        poopins: ["Poppins", "sana-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/Images/hero-pattern.svg')",
      },
      boxShadow: {
        custom: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
      animation: {
        outer: "outerGrowShrink 1.1s infinite ease-in-out",
        inner: "innerGrowShrink 1.1s infinite ease-in-out",
      },
      keyframes: {
        innerGrowShrink: {
          "0%": { transform: "scale(1)", easing: "ease-in-out" },
          "100%": { transform: "scale(0.4)", easing: "ease-in-out" },
        },
        outerGrowShrink: {
          "0%": { transform: "scale(2)" }, // Outer circle stays idle initially
          "50%": { transform: "scale(1.5)" }, // Starts growing when inner circle is 10px away
          "75%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1.5)" }, // Shrinks back to its original size
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "group-hover"],
      fill: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
