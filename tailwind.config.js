/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const { violet, blackA, mauve, green ,  indigo, purple} = require("@radix-ui/colors");
// const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

module.exports = {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx}", 
  "./src/components/**/*.{js,ts,jsx,tsx}", 
  "./app/**/*.{js,ts,jsx,tsx,json}", 
  "./src/Layout/**/*.{js,ts,jsx,tsx}", 
  "./src/views/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      paralucentMedium: ["Paralucent-Medium", "sans-serif"],
      paralucentDemiBold: ["Paralucent-DemiBold", "sans-serif"],
      paralucentLight: ["Paralucent-Light", "sans-serif"],
      polySansTrial: ["PolySans Trial", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
      sans: ["DM Sans", "sans-serif"]
    },
    extend: {
      colors: {
        ...green,  


        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,

        "safekeep-blue": "#0171FD",
        "safekeep-blue-300": "#8ABEFE",
        "safekeep-blue-400": "#55A0FE",
        "safekeep-darkblue-400": "#545D9D",
        "safekeep-blue-500": "#333D8A",
        "safekeep-blue-600": "#0167E6",
        "safekeep-gray": "#070707",
        "safekeep-gray-100": "#606060",
        "safekeep-gray-200": "#B5B5B5",
        "safekeep-gray-300": "#929292",
        "safekeep-gray-400": "#606060",
        "safekeep-gray-500": "#525C76",
        "safekeep-gray-600": "#B2B7C2",
        "safekeep-gray-900": "#070707",
        "safekeep-white": "#FEFFFF",
        "safe-light-100": "#FEFFFF",
        "safe-light-600": "#DAE5E8",
        "safe-light-700": "#AAB3B5",
        "safe-light-800": "#848B8C",
        "header-background": "rgba(255, 255, 255, 0.5)",
        "safekeep-transparent": "rgba(255, 255, 255, 0.7)",
        "safe-dark-300": "#8A90BC",
        "safe-dark-400": "#545D9D",
        "safe-green-100": "#E6FEE6",
        "safe-green-700": "#00AF00",
        "safe-green-800": "#008800",
        "safe-dark-main": "#001268",
        "safekeep-blue-100": "#E6F1FF",
        "safekeep-blue-700": "#00094D",
        "safekeep-main": "#F0FCFF",
        "safekeep-yellow-100": "#FEFDE6",
        "safekeep-green-100": "#E6FEE6",
        "safekeep-grey-200": "#B5B5B5",
        "safekeep-hover": "#F8F8F8",
        "safekeep-darkmain":"#001268"
      },
      backgroundImage: {
        "footer-gradient": "linear-gradient(152.35deg, #0171FD 16.92%, #1AE52D 106.95%)",
        "safekeep-safeguard": "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
        "safekeep-gradient-3": "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
        "safekeep-darky-blue": "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
        "safekeep-glow": "linear-gradient(152.35deg, #0171FD 16.92%, #1AE52D 106.95%)",
        "safekeep-encryption": "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)"
      },
      boxShadow: {
        "3xl": "0px 30px 35px rgba(110, 194, 254, 0.1)"
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },




        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
        },
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
  
      }
    }
  },

  plugins: [
    require("rippleui"), 
  require("@tailwindcss/typography"),
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
],
  rippleui: {
    removeThemes: ["dark", "light"]
  }
};
