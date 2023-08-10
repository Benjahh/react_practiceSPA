/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dimPrimaryColor: "#080808",
        whiteColor: "#f8f8f8",
        blueColor: "#6492c7",
        purpleColor: "5e3ad8",
        magentaColor: "#ff1e7a",
        redColor: "#f5382b",
        orangeColor: "#FF5337",
       dimSecondaryColor: "#1d1e1f"
        
      }
    },
  },
  plugins: [],
}