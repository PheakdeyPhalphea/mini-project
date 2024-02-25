/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html.js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0E0E0E",
        secondaryColor: "#FCFCFC",
        AscendColor: "mix(#0E0E0E, #FCFCFC, 50%)",
      },
      fontFamily: {
        customize: ["Work Sans", "sans - serif"],
      },
      fontSize: {
        title : "40px",
        nav_bar_text : "20px",
        on_card_text : "16px",
        subtitle : "14px",
      }
    },
  },
  plugins: [],
};
