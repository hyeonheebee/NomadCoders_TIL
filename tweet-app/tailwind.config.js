module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Noto Serif KR", "serif", "font-serif"],
        dongle: ["Dongle", "sans-serif", "font-serif"],
        span: ["Nanum Pen Script", "Nanum Brush Script", "cursive"],
      },
    },
    plugins: [],
  },
};
