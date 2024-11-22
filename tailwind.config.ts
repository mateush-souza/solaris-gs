import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        supportBlack: '#1F1F1F',
        primaryBase: '#ffff',
        gradientStart: '#00ABD0',
        gradientEnd: '#05BA7B'
      },
      backgroundImage: {
        customGradient: 'linear-gradiente(to left, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
} satisfies Config;
