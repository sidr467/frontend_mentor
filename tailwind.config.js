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
        // //main
        // almostBlack: "#212A31",
        // darkGray: "#2E3944",
        // darkBlue: "#124E66",
        // lightGray: "#748D92",
        // almostWhite: "#D3D9D4",
        almostBlack: "#1C1C1C",
        darkGray: "#595959",
        darkBlue: "#003B5C",
        lightGray: "#D0D0D0",
        almostWhite: "#FCFCFC",
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

        //Stats preview card
        "spc-Very-dark-blue": " hsl(233, 47%, 7%)",
        "spc-Dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "spc-Soft-violet": "hsl(277, 64%, 61%)",
        "spc-White": "hsl(0, 0%, 100%)",
        "spc-Slightly-transparent-white-mainPara": "hsla(0, 0%, 100%, 0.75)",
        "spc-Slightly-transparent-white-statHead": " hsla(0, 0%, 100%, 0.6)",

        //3 column card
        "3col-Bright-orange": "hsl(31, 77%, 52%)",
        "3col-Dark-cyan": "hsl(184, 100%, 22%)",
        "3col-Very-dark-cyan": "hsl(179, 100%, 13%)",
        "3col-Transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "3col-Very-light-gray": "hsl(0, 0%, 95%)",

        //Profile Card
        "pfc-Dark-cyan": "hsl(185, 75%, 39%)",
        "pfc-Very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "pfc-Dark-grayishblue": "hsl(227, 10%, 46%)",
        "pfc-Dark-gray": "hsl(0, 0%, 59%)",

        //Social Proof section master
        "sps-Very-Dark-Magenta": "hsl(300, 43%, 22%)",
        "sps-Soft-Pink": "hsl(333, 80%, 67%)",
        "sps-Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
        "sps-Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
        "sps-White": "hsl(0, 0%, 100%)",

        //Article Component Preview
        "acp-Very-Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
        "acp-Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
        "acp-Grayish-Blue": "hsl(212, 23%, 69%)",
        "acp-Light-Grayish-Blue": "hsl(210, 46%, 95%)",

        //Base apparel coming soon
        "bacs-Desaturated-Red": "hsl(0, 36%, 70%)",
        "bacs-Soft-Red": "hsl(0, 93%, 68%)",
        "bacs-Dark-Grayish-Red": "hsl(0, 6%, 24%)",
        "bacs-g1f": "hsl(0, 0%, 100%)",
        "bacs-g1t": "hsl(0, 100%, 98%)",
        "bacs-g2f": "hsl(0, 80%, 86%)",
        "bacs-g2t": "hsl(0, 74%, 74%)",

        //intro component signup form
        "icsf-red": "hsl(0, 100%, 74%)",
        "icsf-green": "hsl(154, 59%, 51%)",
        "icsf-blue": "hsl(248, 32%, 49%)",
        "icsf-dark-blue": "hsl(249, 10%, 26%)",
        "icsf-grayish-blue": "hsl(246, 25%, 77%)",

        //single price grid
        "spg-cyan": "hsl(179, 62%, 43%)",
        "spg-bright-yellow": "hsl(71, 73%, 54%)",
        "spg-light-gray": "hsl(204, 43%, 93%)",
        "spg-grayish-blue": "hsl(218, 22%, 67%)",

        //Ping coming soon page
        "pcs-blue": "hsl(223, 87%, 63%)",
        "pcs-pale-blue": "hsl(223, 100%, 88%)",
        "pcs-light-red": "hsl(354, 100%, 66%)",
        "pcs-gray": "hsl(0, 0%, 59%)",
        "pcs-very-dark-blue": "hsl(209, 33%, 12%)",

        //Huddle landing page
        "hlp-Violet": "hsl(257, 40%, 49%)",
        "hlp-SoftMagenta": "hsl(300, 69%, 71%)",

        //product list cart
        "plc-red": "hsl(14, 86%, 42%)",
        "plc-green": "hsl(159, 69%, 38%)",
        "plc-rose-50": "hsl(20, 50%, 98%)",
        "plc-rose-100": "hsl(13, 31%, 94%)",
        "plc-rose-300": "hsl(14, 25%, 72%)",
        "plc-rose-400": "hsl(7, 20%, 60%)",
        "plc-rose-500": "hsl(12, 20%, 44%)",
        "plc-rose-900": "hsl(14, 65%, 9%)",

        //Mortgage repayment calculator
        "mrc-Lime": " hsl(61, 70%, 52%)",
        "mrc-red": "hsl(4, 69%, 50%)",
        "mrc-White": "hsl(0, 0%, 100%)",
        "mrc-Slate-100": "hsl(202, 86%, 94%)",
        "mrc-Slate-300": "hsl(203, 41%, 72%)",
        "mrc-Slate-500": "hsl(200, 26%, 54%)",
        "mrc-Slate-700": "hsl(200, 24%, 40%)",
        "mrc-Slate-900": "hsl(202, 55%, 16%)",

        //contact form
        "contactform-Green200": "hsl(148, 38%, 91%)",
        "contactform-Green600": "hsl(169, 82%, 27%)",
        "contactform-Red": "hsl(0, 66%, 54%)",
        "contactform-White": "hsl(0, 0%, 100%)",
        "contactform-Grey500": "hsl(186, 15%, 59%)",
        "contactform-Grey900": "hsl(187, 24%, 22%)",

        //newsetteler sign up page
        "nsu-Tomato": "hsl(4, 100%, 67%)",
        "nsu-Dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "nsu-Charcoal-Grey": "hsl(235, 18%, 26%)",
        "nsu-Grey": "hsl(231, 7%, 60%)",
        "nsu-White": "hsl(0, 0%, 100%)",

        //Age calculator
        "ageCalc-purple": "#9b5de5",
        "ageCalc-light-red": "#ff4d4d",
        "ageCalc-white": "#ffffff",
        "ageCalc-off-white": "#f0f0f0",
        "ageCalc-light-grey": "#dbdbdb",
        "ageCalc-smokey-grey": "#6f6f6f",
        "ageCalc-off-black": "#141414",
      },
      boxShadow: {
        //Blog Preview Card
        custom: "8px 8px 0 0 black",
        //base apparel
        bacs: "0 5px 20px 2px hsl(0, 36%, 70%)",
        //nsu
        nsu: "0 10px 30px 0 hsl(4, 100%, 67%);",
      },
    },
  },
  plugins: [],
}
