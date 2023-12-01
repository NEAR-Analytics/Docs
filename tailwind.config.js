/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
  },
  plugins: [],
};

