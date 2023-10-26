/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"], // Use square brackets instead of semicolon, siger chatGPT
      },
    },
  },
  plugins: [],
};
