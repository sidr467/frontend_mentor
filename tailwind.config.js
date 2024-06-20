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
        // Outfit: ["Outfit", "sans-serif"],
        // youngserif: ["Young Serif", "serif"],
        Figtree: ["Figtree", "sans-serif"],
        "sl-inter": ["Inter", "sans-serif"],
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

        // Social Links
        "sc-Green": "hsl(75, 94%, 57%)",
        "sc-White": "hsl(0, 0%, 100%)",
        "sc-Grey": "hsl(0, 0%, 20%)",
        "sc-DarkGrey": "hsl(0, 0%, 12%)",
        "sc-OffBlack": "hsl(0, 0%, 8%)",

        //Recipe-page
        "recipe-Nutmeg": "hsl(14, 45%, 36%)",
        "recipe-DarkRaspberry": "hsl(332, 51%, 32%)",
        "recipe-White": " hsl(0, 0%, 100%)",
        "recipe-RoseWhite": "hsl(330, 100%, 98%)",
        "recipe-Eggshell": "hsl(30, 54%, 90%)",
        "recipe-WengeBrown": " hsl(30, 10%, 34%)",
        "recipe-DarkCharcoal": " hsl(24, 5%, 18%)",
        "recipe-LightGrey": " hsl(30, 18%, 87%)",
      },
      boxShadow: {
        //Blog Preview Card
        custom: "8px 8px 0 0 black",
      },
    },
  },
  plugins: [],
}
