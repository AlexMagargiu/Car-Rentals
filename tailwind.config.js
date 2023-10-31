/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F8F8F8",
        primary_text: "#121212",
        secondary_text: "#8D021F",
        accordion: "#343434",
        option_bg: "#70809030",
        error: "#8D021F50",
        border: "#53687870",
        banner: "#2d2d2d",
        border_faq: "#12121220",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
