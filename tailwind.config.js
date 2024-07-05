const { Inter } = require("next/font/google")

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
      backgroundImage: {
        eyeSVG: "url('/nft-card/icon-view.svg')",
      },
      fontFamily: {
        // Outfit: ["Outfit", "sans-serif"],
        // youngserif: ["Young Serif", "serif"],
        Figtree: ["Figtree", "sans-serif"],
        "sl-inter": ["Inter", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        FontHanken: ["Hanken Grotesk", "sans-serif"],
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

        //product card
        "pc-darkcyan": "hsl(158, 36%, 37%)",
        "pc-cream": "hsl(30, 38%, 92%)",
        "pc-verydarkblue": "hsl(212, 21%, 14%)",
        "pc-darkgrayishblue": "hsl(228, 12%, 48%)",
        "pc-white": "hsl(0, 0%, 100%)",

        //card feature
        "cf-Red": "hsl(0, 78%, 62%)",
        "cf-Orange": "hsl(34, 97%, 64%)",
        "cf-Cyan": "hsl(180, 62%, 55%)",
        "cf-Blue": "hsl(212, 86%, 64%)",
        "cf-VeryDarkBlue": "hsl(234, 12%, 34%)",
        "cf-GrayishBlue": "hsl(229, 6%, 66%)",
        "cf-VeryLightGray": " hsl(0, 0%, 98%)",

        //testimonials grid sections
        "tgs-Moderateviolet": "hsl(263, 55%, 52%)",
        "tgs-Verydarkgrayishblue": "hsl(217, 19%, 35%)",
        "tgs-Verydarkblackishblue": "hsl(219, 29%, 14%)",
        "tgs-White": "hsl(0, 0%, 100%)",
        "tgs-Lightgray": "hsl(0, 0%, 81%)",
        "tgs-Lightgrayishblue": "hsl(210, 46%, 95%)",

        //result summary component
        "rsc-PrimaryLightRed": "hsl(0, 100%, 67%)",
        "rsc-PrimaryOrangeyYellow": " hsl(39, 100%, 56%)",
        "rsc-PrimaryGreenTeal": "hsl(166, 100%, 37%)",
        "rsc-PrimaryCobaltblue": "hsl(234, 85%, 45%)",
        "rsc-BgLightslateBlue": "hsl(252, 100%, 67%)",
        "rsc-BgLightroyalBlue": "hsl(241, 81%, 54%)",
        "rsc-CircleVioletBlue": "hsla(256, 72%, 46%, 1)",
        "rsc-CirclePersianBlue": "hsla(241, 72%, 46%, 1)",
        "rsc-White": "hsl(0, 0%, 100%)",
        "rsc-PaleBlue": "hsl(221, 100%, 96%)",
        "rsc-LightLavender": "hsl(241, 100%, 89%)",
        "rsc-DarkgrayBlue": "hsl(224, 30%, 27%)",

        //FAQ accordian main
        "fam-White": "hsl(0, 0%, 100%)",
        "fam-Light-pink": "hsl(275, 100%, 97%)",
        "fam-Grayish-purple": "hsl(292, 16%, 49%)",
        "fam-Dark-purple": "hsl(292, 42%, 14%)",

        //Interactive rating component
        "iac-Orange": "hsl(25, 97%, 53%)",
        "iac-White": "hsl(0, 0%, 100%)",
        "iac-LightGrey": "hsl(217, 12%, 63%)",
        "iac-DarkBlue": "hsl(213, 19%, 18%)",
        "iac-VeryDarkBlue": "hsl(216, 12%, 8%)",

        //NFT card

        "nft-Soft-blue": " hsl(215, 51%, 70%)",
        "nft-Cyan": "hsl(178, 100%, 50%)",
        "nft-Very-dark-blue-main-BG": "hsl(217, 54%, 11%)",
        "nft-Very-dark-blue-card-BG": " hsl(216, 50%, 16%)",
        "nft-Very-dark-blue": "hsl(215, 32%, 27%)",
        "nft-White": "hsl(0, 0%, 100%)",

        //Order summary component
        "osc-Pale-blue": " hsl(225, 100%, 94%)",
        "osc-Bright-blue": "hsl(245, 75%, 52%)",
        "osc-Very-pale-blue": "hsl(225, 100%, 98%)",
        "osc-Desaturated-blue": "hsl(224, 23%, 55%)",
        "osc-Dark-blue": "hsl(223, 47%, 23%)",
      },
      boxShadow: {
        //Blog Preview Card
        custom: "8px 8px 0 0 black",
      },
    },
  },
  plugins: [],
}
