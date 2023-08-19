module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        "caret-border":
          "caret-border 0.8s steps(1) infinite,tracking-in-expand 1.2s steps(16)",
        "track-in-animation":
          "track-in-animation 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "track-in-animation-item":
          "track-in-animation 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s   both",
        "nav-icon-animation":
          "nav-icon-animation 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
      },
      keyframes: {
        "nav-icon-animation": {
          "0%": {
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
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
        "track-in-animation": {
          "0%": {
            transform: "translateZ(-700px) translateY(100px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
