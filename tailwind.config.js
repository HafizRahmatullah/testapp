export default {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
  colors: {
    blue: {
      DEFAULT: "#1E90FF",
      dark: "#1565C0",
      light: "#EAF4FF",
    },
    navy: "#001F3F",
  },
  boxShadow: {
    card: "0 8px 24px rgba(0,0,0,0.08)",
  },
},
  },
  plugins: [],
  fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
}

}


