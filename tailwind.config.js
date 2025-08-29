/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',    // Deep Navy Blue
        secondary: '#40e0d0',  // Vibrant Turquoise
        dark: '#000000',       // Pure Black
        light: '#ffffff',      // Pure White
        text: '#333333',       // Dark Gray for Text
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
