/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      safelist: [
        "bg-[#244f9c]",
        "hover:bg-[#1e3f7a]",
        "bg-black",
        "hover:bg-gray-800",
      ],
      colors: {
        Blue: "#244f9c",
        darkBlue: "#101F70",
        lightBlue: "#ebf2fa",
        redOrange: "#FF4D4D",
        Yellow: "#FFB600",
        LightGreen: "#58AD17",
        DarkRed: "#AD3D17",
        BlueViolet: "#4711AE",
        BlueCyan: "#0775A0",
        DarkBlue: "#293058",
        DarkGreen: "#283320",
        DarkGray: "#332520",
        stBlue: "#244f9c",
        white: "#FFFFFF",
        lightGray: "#E5E5E5",
      },
      keyframes: {
        rotate360: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "rotate360 20s linear infinite",
      },
    },
  },
  plugins: [],
};
