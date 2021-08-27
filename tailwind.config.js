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
        "light-gray": "#858585",
      },
      gridTemplateColumns: {
        repeat: "repeat(auto-fill, minmax(12rem, 1fr))",
      },
      zIndex: {
        75: 75,
        100: 100,
      },
      spacing: {
        "s-9/20": "45vw",
        "s-1/2": "50vw",
        100: "28rem",
        110: "34rem",
        120: "40rem",
      },
      transitionTimingFunction: {
        easeAlt: "cubic-bezier(0.54, 1.6, 0.5, 1)",
        easeAlt2: "cubic-bezier(0.145, 0.045, 0.155, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
