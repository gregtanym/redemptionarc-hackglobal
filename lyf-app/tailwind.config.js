/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-inactive": "#7C7C7C",
      },
      boxShadow: {
        "shadow-strong": "0 4px 8px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
