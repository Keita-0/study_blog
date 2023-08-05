module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "caret-border":
          "caret-border 0.8s steps(1) infinite,tracking-in-expand 1.2s steps(16)",
      },
      keyframes: {
        "caret-border": {
          "50%": {
            borderColor: "currentColor",
          },
        },
        "tracking-in-expand": {
          "0%": {
            width: "0%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
