module.exports = {
      content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        switzer: ["var(--font-switzer)", "sans-serif"],
        involve: ["var(--font-involve)", "sans-serif"],
        urw: ["var(--font-urw)", "sans-serif"],
        spaciaz: ["var(--font-spaciaz)", "sans-serif"],
      },
    },
  },
//     plugins: [
//     require("@tailwindcss/line-clamp"),
//     function ({ addUtilities }) {
//       addUtilities({
//         ".overflow-clip-margin-unset": {
//           "overflow-clip-margin": "unset",
//         },
//       });
//     },
//   ],
};
