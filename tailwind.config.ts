import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        fog: "#f5f9fc",
        cyan: "#35d6e7",
        coral: "#ff6a56",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(9, 32, 52, 0.09)",
        glow: "0 0 60px rgba(53, 214, 231, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
