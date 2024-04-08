/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        50: '#000374'
        },
    },
  },
  plugins: [
  require("daisyui"),
  require("@designbycode/tailwindcss-text-shadow")({
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowBlur: "2px",
    shadowOffsetX: "1px",
    shadowOffsetY: "2px",
}),],
}

