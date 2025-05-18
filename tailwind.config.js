/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "628px",
        md: "768px",
        lg: "1024px",
      },
    },
  },

  plugins: [],
};
