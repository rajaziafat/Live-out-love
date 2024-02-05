/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/imgs/hero-bg.png')",
       
      },
      fontFamily: {
        montserrat: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "Arial",
          "sans-serif",
        ],
        poppins: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "Arial",
          "sans-serif",
        ],
      },
      screens: {
        300: "300px",
        // => @media (min-width: 300px) { ... }
        400: "400px",
        // => @media (min-width: 400px) { ... }
        500: "500px",
        // => @media (min-width: 500px) { ... }
        600: "600px",
        // => @media (min-width: 600px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        700: "700px",
        // => @media (min-width: 700px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        800: "800px",
        // => @media (min-width: 800px) { ... }
        900: "900px",
        // => @media (min-width: 900px) { ... }
        1000: "1000px",
        // => @media (min-width: 1000px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        1100: "1100px",
        // => @media (min-width: 1100px) { ... }
        1200: "1200px",
        // => @media (min-width: 1200px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        1300: "1300px",
        // => @media (min-width: 1300px) { ... }
        1400: "1400px",
        // => @media (min-width: 1400px) { ... }
        1500: "1500px",
        // => @media (min-width: 1500px) { ... }
        "2xl": "1550px",
        // => @media (min-width: 1536px) { ... }
        1600: "1600px",
        // => @media (min-width: 1600px) { ... }
        1700: "1700px",
        // => @media (min-width: 1700px) { ... }
        1800: "1800px",
        // => @media (min-width: 1800px) { ... }
        1900: "1900px",
        // => @media (min-width: 1900px) { ... }
        1920: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
