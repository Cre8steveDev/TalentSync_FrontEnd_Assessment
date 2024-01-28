/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray900: "#101828",
        gray800: "#1D2939",
        gray500: "#667085",
        gray400: "#98A2B3",
        gray300: "#D0D5DD",
        gray100: "#F2F4F7",
        blue700: "#175CD3",
        bluedark400: "#528BFF",
      },
    },
  },
  plugins: [],
};
