/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        winter: "#3b82f6",
        spring: "#22c55e",
        summer: "#eab308",
        autumn: "#fb923c",
      },
    },
  },
  plugins: [],
};
