module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      display: ["Bushcraft", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: ".6rem",
      },
      colors: {
        "krapinjon-orange": "#FC8A17",
        "dark-gray": "#1C1C1C",
        "medium-gray": "#454545",
      },
      gridTemplateColumns: {
        repeat: "repeat(auto-fill, minmax(12rem, 1fr))",
      },
      zIndex: {
        75: 75,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
