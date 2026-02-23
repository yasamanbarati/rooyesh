import type { Config } from "tailwindcss"

type DarkModeStrategy = "class" | "media" | "both" | undefined;

const config: Config = {
  darkMode:  "class" ,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4338CA", // indigo-700
        },
        secondary: {
          DEFAULT: "#14B8A6", // teal-500
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
