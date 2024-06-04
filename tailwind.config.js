/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
      colors: {
        headerBlue: "#252B42",
        heroLeft: "#96E9FB",
        heroRight: "#ABECD6",
        heroContent: "#2A7CC7",
        heroBonus: "#977DF4",
        primary: "#23A6F0",
        customColor: "#2D8BC0",
        success: "#2DC071",
        secondTextColor: "#737373",
        lightSecondTextColor: "#858585",
        bgGray: "#FAFAFA",
        bgInput: "#F9F9F9",
        muted: "#BDBDBD",
        secondary: "#23856D",
        alert: "#E77C40",
        error: "#E74040",
        lightGray: "#ECECEC",
        borderGray: "#DDDDDD",
        dropDownGray: "#F9F9F9",
        yellow: "#F3CD03",
      },
      opacity: {
        75: "0.75",
      },
    },
  },
  plugins: [],
};
