/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb( var(--primary-color-tailwind) / <alpha-value>)",
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
