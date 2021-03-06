const colors = {
  "gray-dark": "#192B38",
  "gray-light": "#2E4557",
  "green": "#4DC987",
  "green-light": "#E5F7EF",
  "purple": "#2C3895",
  "purple-light": "#E8E9F4",
  "orange": "#FFAA60",
  "orange-light": "#FFF4EA",
  "waiting": "#D5D5D5",
  "waiting-light": "#F9F9F9",
  "pink": "#FC59AC",
  "secondary-text": "#E0E0E0",
  "white": "#FFFFFF",
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fonts: {
      sans: "Inter UI"
    },
    colors,
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
