import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      colors: {
        ...colors,
        softblue: "#8BACD9",
        cyan: "#00FFF8",
        cyanTransparent: "rgba(0, 255, 248, 0.5)",
        // Very Dark Blue main BG
        vDarkBlueM: "#0D192C",
        // Very Dark Blue card BG
        vDarkBlueC: "#15263F",
        // Very Dark BLue line
        vDarkBlueL: "#2E405A",
      },
    },
  },
  plugins: [],
};
