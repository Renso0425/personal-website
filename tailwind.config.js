/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#12185E",
        "gray-500": "#12185E",
        "primary-100": "#D6D9FF",
        "primary-300": "#6D76D2",
        "primary-500": "#12185E",
        "secondary-400": "#FFCD58",
        "secondary-500": "#C1C0C0",
        "background-100": "#F0F1FF",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/darrenpfp.jpg')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./asset/Evolve.Text.png')",
        evolvetext: "url('./asset/Evolve.Text.png')",
        evolvetext: "url('./asset/Evolve.Text.png')",
        evolvetext: "url('./asset/Evolve.Text.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
};
