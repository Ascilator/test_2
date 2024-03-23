/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "18px",
        small: "12px",
      },
      colors: {
        primary: "#5FBF77",
        gray: "#CFCFE4",
      },
      maxWidth: {
        wrapper: "1130px",
      },
      fontSize: {
        base: ["18px", "18px"],
      },
      spacing: {
        small: "9px",
        base: "18px",
      },
      boxShadow: {
        DEFAULT: "0px 10px 13px -4px #23235F30",
      },
    },
  },
  plugins: [],
};
