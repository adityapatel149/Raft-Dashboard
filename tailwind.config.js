/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
      'md':"1024px",
      'lg': "1280px",
      'xl': "1600px",
      "2xl": "1800px",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
