module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "caret-border":
          "caret-border 0.8s steps(1) infinite,tracking-in-expand 1.2s steps(16)",
        "proflie-animation":
          "proflie-animation 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "proflie-animation-item":
          "proflie-animation-item 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s   both",
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
        "proflie-animation": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px) translateY(500px)",
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
        "proflie-animation-item": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px) translateY(500px)",
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
