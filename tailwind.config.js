const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "koho-bold": ["KohoBold", ...defaultTheme.fontFamily.sans],
        "koho-semibold": ["KohoSemiBold", ...defaultTheme.fontFamily.sans],
        "koho-extraLight": ["KohoExtraLight", ...defaultTheme.fontFamily.sans],
        "koho": ["koho", ...defaultTheme.fontFamily.sans],
        "koho-italic": ["kohoItalic", ...defaultTheme.fontFamily.sans],
        "krub": ["krub", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FA8400",
        secondary:"#1CACD8",
        third: "#82337E",
        fourth: "#023047",
      },
    },
    
  },
  plugins: [],
}
