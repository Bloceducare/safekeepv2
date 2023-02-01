/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx,json}", "./src/layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      paralucentMedium: ["Paralucent-Medium", "sans-serif"],
      paralucentDemiBold: ["Paralucent-DemiBold", "sans-serif"],
      paralucentLight: ["Paralucent-Light", "sans-serif"],
      polySansTrial: ["PolySans Trial", "sans-serif"]
    },
    extend: {
      colors: {
        "safekeep-blue": "#0171FD",
        "safekeep-blue-dark": "#333D8A",
        "safekeep-blue-400": "#55A0FE",
        "safekeep-blue-100" : "#E6F1FF",       
        "safekeep-blue-600": "#0167E6",
        "safekeep-gray": "#070707",
        "safekeep-gray-200": "#B5B5B5",
        "safekeep-gray-300": "#929292",
        "safekeep-gray-400": "#E2E4E8",
        "safekeep-gray-500": "#525C76",
        "safekeep-gray-600": "#B2B7C2",
        "safekeep-gray-900": "#070707",
        "safekeep-white": "#FEFFFF",
        "safe-light-100": "#FEFFFF",
        "header-background": "rgba(255, 255, 255, 0.5)",
        "safe-dark-300": "#8A90BC",
        "safekeep-warning": "#FEFDE6",
        "safekeep-green-100": "#E6FEE6",
        "safekeep-red-100": "#FFE6E6"       
      },
      backgroundImage: {
        "footer-gradient": "linear-gradient(152.35deg, #0171FD 16.92%, #1AE52D 106.95%)",
        "safekeep-safeguard": "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)",
        "safekeep-gradient-3": "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
        "safekeep-darky-blue": "linear-gradient(91.58deg, #001873 0.13%, #011A91 101.16%)",
        "safekeep-glow": "linear-gradient(152.35deg, #0171FD 16.92%, #1AE52D 106.95%)",
        "safekeep-encryption": "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",
        "safekeep-shine": "linear-gradient(to bottom, #FFC000 0%, #0171FD 100%)",
        "safekeep-development": "linear-gradient(91.58deg, #F8F8F8 0.13%, #F3FDFF 101.16%)",        
      },
      boxShadow: {
        "3xl": "0px 30px 35px rgba(110, 194, 254, 0.1)",
        "4xl": "0px 44px 54px rgba(0, 105, 183, 0.21)"
      }
    }
  },

  plugins: [require("rippleui"), require("@tailwindcss/typography")],
  rippleui: {
    removeThemes: ["dark", "light"]
  }
};
