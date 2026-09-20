/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        cream: "#f5f1e8",
        signal: "#ff9700",
        signal2: "#ffb73d",
        line: "#292929",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,151,0,.25), 0 24px 80px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
