import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#b2b2b2',
        acmBlue: '#00E1FF',
        acmRed: '#EA1F4B',
        acmGreen: '#86DE02',
        acmPurple: '#5D46C3',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'mavgrades-gradient': 'linear-gradient(to bottom right, #0D5083, #000000, #492202)',
        'create-gradient': 'radial-gradient(circle, rgba(234, 31, 75, 0.2) 0%, rgba(132, 17, 42, 0.2) 100%)',
        'mavgrades-radial-gradient': 'radial-gradient(circle, rgba(68, 148, 209, 0.2) 0%, rgba(35, 76, 107, 0.2) 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
