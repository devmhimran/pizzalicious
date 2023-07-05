/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandColor01: "#DC0404",
        brandColor02: "#2B2B43",
        brandColor03: "#F9F9FA",
        brandColor04: "#545563",
        brandColor05: "#83859C",
        brand__bg__color: "#fbfbfb",
      },
    },
  },
  plugins: [],
};
