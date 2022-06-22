module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/img/bg.jpg')",
        paper: "url('../public/img/Woman.png')",
        pin: "url('../public/img/pin.png')",
      },
    },
  },
  plugins: [],
};
