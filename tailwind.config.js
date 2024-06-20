const { Figtree } = require("next/font/google")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/challanges/*./components.jsx",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        //main
        almostBlack: "#212A31",
        darkGray: "#2E3944",
        darkBlue: "#124E66",
        lightGray: "#748D92",
        almostWhite: "#D3D9D4",

        //QR-code
        "qr-dark-navy": "#1F314F",
        "qr-gray": "#7D889E",
        "qr-light-gray": "#D5E1EF",

        //Blog Preview Card
        "bpc-black": "#111111",
        "bpc-pure-white": "#FFFFFF",
        "bpc-yellow": "#F4D04E",
        "bpc-grey": "#7F7F7F",
      },
      boxShadow: {
        //Blog Preview Card
        custom: "8px 8px 0 0 black",
      },
    },
  },
  plugins: [],
}
