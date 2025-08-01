/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Light Theme Color Scheme
        'ivory-white': '#FDFDFD',
        'cool-gray': '#EAEFF2',
        'steel-blue': '#4682B4',
        'steel-blue-hover': '#3A6F99',
        'steel-blue-dark': '#2D5A87',
        'powder-blue': '#B0D6E8',
        // Legacy brand colors (for backward compatibility)
        'brand-green': '#4682B4',
        'brand-green-hover': '#3A6F99',
      },
    },
  },
  plugins: [],
}

