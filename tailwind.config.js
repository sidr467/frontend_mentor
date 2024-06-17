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
      colors: {
        almostBlack: "#212A31",
        darkGray: "#2E3944",
        darkBlue: "#124E66",
        lightGray: "#748D92",
        almostWhite: "#D3D9D4",
      },
    },
  },
  plugins: [],
}
