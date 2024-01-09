/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        DM: "'DM Sans', sans-serif",
        ZZ: "'Zeyada', cursive;",
        TW: "'October Twilight', sans-serif;",
        lato: " 'Lato', sans-serif",
        codec: "codec-cold-bold-italic-trial",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [""],
  // },
};
