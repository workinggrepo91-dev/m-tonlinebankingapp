/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // M&T Bank specific colors
        mtbGreen: {
          DEFAULT: '#016C4D', // The primary M&T Bank green
          dark: '#014C37',    // A darker shade for accents
          light: '#059669',   // A lighter shade for backgrounds or hover
          text: '#f0fdf4',    // Light text color that contrasts well (almost white green)
        },
        mtbOrange: '#FFAA00', // The thin orange divider line color
        grayMuted: '#6B7280', // Custom gray for muted text
      },
    },
  },
  plugins: [],
}