/** @type {import('tailwindcss').Config} */
const { violet, blackA, mauve, green } = require("@radix-ui/colors");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx,json}", "./src/Layout/**/*.{js,ts,jsx,tsx}", "./src/views/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      paralucentMedium: ["Paralucent-Medium", "sans-serif"],
      paralucentDemiBold: ["Paralucent-DemiBold", "sans-serif"],
      paralucentLight: ["Paralucent-Light", "sans-serif"],
      polySansTrial: ["PolySans Trial", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"]
    },
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        "safekeep-blue": "#0171FD",
        "safekeep-blue-400": "#55A0FE",
        "safekeep-blue-500": "#333D8A",
        "safekeep-blue-600": "#0167E6",
        "safekeep-gray": "#070707",
        "safekeep-gray-100": "#606060",
        "safekeep-gray-200": "#E4E7EC",
        "safekeep-gray-300": "#929292",
        "safekeep-gray-400": "#E2E4E8",
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
        "safekeep-blue-700": "#0150B4",
        "safekeep-main": "#F0FCFF",
        "safekeep-yellow-100": "#FEFDE6",
        "safekeep-green-100": "#E6FEE6",
        "safekeep-grey-200": "#B5B5B5",
        "safekeep-hover": "#F8F8F8"
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
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
        }
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },

  plugins: [require("rippleui"), require("@tailwindcss/typography")],
  rippleui: {
    removeThemes: ["dark", "light"]
  }
};
