import type { Config } from "tailwindcss";

export default {
  darkMode: ['selector' ], // Ativa o suporte ao modo escuro
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['var(--font-caveat)'],
        geistSans: ['var(--font-geist-sans)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
