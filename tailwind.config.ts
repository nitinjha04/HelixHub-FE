import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        defaultTextColor: "#303972",
        bgDefaultColor: "#4D44B5",
        smallTextColor: "#7D7D7D",
        inputBoxColor: "#C1BBEB",
      },
      borderRadius: {
        default: "20px", // Set your default border radius value here
      },
    },
  },
  plugins: [],
};
export default config;
