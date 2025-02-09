import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayLight: "var(--gray-light)",
        primaryColor: "var(--primary-color)"
      },
      fontFamily: {
        degular: ["var(--font-degular)", "sans-serif"], // Set Degular as the main font
      },
    },
  },
  plugins: [],
} satisfies Config;
