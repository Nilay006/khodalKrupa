/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/Hero.jpg')",
      },
      fontFamily: {
        days: ["Days One", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "992px",
          xl: "1280px",
        },
        padding: "0 1.25rem",
      },
      colors: {
        blue: {
          primary: "#1E5DBC",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
