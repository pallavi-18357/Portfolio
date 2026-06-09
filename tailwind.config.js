/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        midnight: "var(--color-midnight)",
        navy: "var(--color-navy)",
        indigo: "var(--color-indigo)",
        storm: "var(--color-storm)",
        lavender: "#A78BFA",
        royal: "#4F46E5",
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}