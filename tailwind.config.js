/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        clrMagenta: {
          veryDark: "hsl(300, 43%, 22%)",
          darkGrayish: "hsl(303, 10%, 53%)",
          lightGrayish: "hsl(300, 24%, 96%)",
        },
        clrPink: {
          soft: "hsl(333, 80%, 67%)",
        },
      },

      fontFamily: {
        display: '"League Spartan", sans-serif',
      },
    },
  },
  plugins: [],
};

