/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      paralucentMedium: ["Paralucent-Medium", "sans-serif"],
      paralucentDemiBold: ["Paralucent-DemiBold", "sans-serif"],
      paralucentLight: ["Paralucent-Light", "sans-serif"],
      polySansTrial: ["PolySans Trial", "sans-serif"],
    },
    extend: {
      colors : {
        "safekeep-blue" : "#0171FD",
        "safekeep-blue-400" : "#55A0FE",
        "safekeep-gray" : "#070707",
        "safekeep-gray-300" : "#929292",
        "safekeep-gray-400" : "#E2E4E8",
        "safekeep-gray-500" : "#525C76",
        "safekeep-gray-600" : "#B2B7C2",
        "safekeep-white" : "#FEFFFF",
        "header-background" : "rgba(255, 255, 255, 0.5)"
      },
        backgroundImage: {
        'footer-gradient': "linear-gradient(152.35deg, #0171FD 16.92%, #1AE52D 106.95%)",
        "safekeep-safeguard": "linear-gradient(206.51deg, #01A0FF -0.2%, #0123F7 130.88%)"
      },
      boxShadow: {
        "3xl": "0px 30px 35px rgba(110, 194, 254, 0.1)",
      }

    },
  },
  plugins: [require("rippleui")],
}
