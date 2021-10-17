module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
    },
  },
  variants: {
    extend: { border: ["hover"], transform: ["hover"], transition: ["hover"] },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
