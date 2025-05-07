/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E57373",
        pink: "#F3A2A2",
        alert: "#FF5151",
        placeholder: "#AAAAAA",
        darkgray: "#535353",
        darkred: "#C04343",
        red: "#ED2A2A",
      },
    },
  },
  plugins: [],
};
