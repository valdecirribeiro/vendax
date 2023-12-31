module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { A100: "#f5ab67" },
        deep_purple: { 800: "#3d349d" },
        blue: { 50: "#e5eeff", A700: "#2364ff" },
        red: {
          50: "#ffecec",
          300: "#f56767",
          400: "#e05c5c",
          401: "#e05d5d",
          "300_7c": "#f567677c",
          A200: "#ff3c53",
        },
        light_blue: { 400: "#2dc3f2" },
        green: { 600: "#27a953", A100: "#ccffd7", "600_63": "#27a95363" },
        black: {
          900: "#000000",
          "900_60": "#00000060",
          "900_68": "#00000068",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_14": "#00000014",
        },
        pink: { 400: "#c63973" },
        yellow: { 100: "#fffccc" },
        lime: { 800: "#a1a325", "800_87": "#a5a82087" },
        gray: {
          100: "#f6f6f6",
          200: "#eaeaea",
          400: "#b6b6b6",
          401: "#b1b1b1",
          600: "#6c6c6c",
          700: "#595959",
          800: "#3a3a3a",
          801: "#3c3c3c",
        },
        orange: { A200: "#ffb039", A200_00: "#ffb03900" },
        cyan: { 50: "#ccfaf5", 400: "#38b5c6", "400_87": "#38b5c687" },
        white: { A700: "#ffffff" },
        indigo: { 800: "#20398d" },
      },
      boxShadow: {
        bs2: "0px 30px  50px 0px #38b5c687",
        bs: "0px 30px  50px 0px #f567677c",
        bs1: "0px 30px  50px 0px #a5a82087",
        bs4: "0px 50px  50px 0px #0000000c",
        bs5: "0px 30px  90px 0px #00000019",
        bs3: "10px 20px  50px 0px #27a95363",
        bs6: "0px 40px  200px 0px #00000014",
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        spectralsc: "Spectral SC",
        nunito: "Nunito",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#ffb039,#ffb03900)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
