/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EB3F36",

          secondary: "#730C07",

          accent: "#f7bc33",

          neutral: "#1e1f38",

          "base-100": "#fcfcfd",

          info: "#58add5",

          success: "#38e58c",

          warning: "#f4c03e",

          error: "#e23639",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
