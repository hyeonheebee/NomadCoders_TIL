module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Noto Serif KR", "serif"],
        dongle: ["Dongle", "sans-serif"],
        span: ["Nanum Pen Script", "cursive"],
      },
    },
    plugins: [],
  },
};
