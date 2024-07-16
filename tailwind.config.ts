import type { Config } from "tailwindcss";
import { primaryColors } from "./styling/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-gradient": `linear-gradient(180deg, #FFF 27.96%, ${primaryColors.daisyPurple[200]} 100%)`,
      },
      colors: {
        ...primaryColors,
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        jakarta: "JakartaPlus, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
