const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    screens: {
      // Added by Paul
      /* xs: breakpoint before ... defaultTheme breakpoints, else the smaller breakpoint's specificity will override the larger breakpoints */
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
