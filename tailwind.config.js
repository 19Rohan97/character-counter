/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "neutral-900": "#12131A",
        "neutral-800": "#21222C",
        "neutral-700": "#2A2B37",
        "neutral-600": "#404254",
        "neutral-200": "#E4E4EF",
        "neutral-100": "#F2F2F7",
        "neutral-000": "#FFFFFF",

        "purple-400": "#D3A0FA",
        "purple-500": "#C27CF8",

        "yellow-500": "#FF9F00",

        "orange-500": "#FE8159",
        "orange-800": "#DA3701",

        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        990: "990px",
        520: "520px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".text-preset-1": {
          fontSize: "64px",
          lineHeight: "100%",
          letterSpacing: "-1px",
          fontWeight: "900",
          /* Mobile version */
          "@media (max-width: 768px)": {
            fontSize: "36px",
            lineHeight: "120%",
            letterSpacing: "-0.5px",
          },
        },
        ".text-preset-2": {
          fontSize: "24px",
          lineHeight: "130%",
          letterSpacing: "-1px",
          fontWeight: "600",
        },
        ".text-preset-3": {
          fontSize: "20px",
          lineHeight: "140%",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
        ".text-preset-4": {
          fontSize: "16px",
          lineHeight: "130%",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
        ".checkbox-container": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          userSelect: "none",
          color: "#12131A",
        },
        ".checkbox": {
          position: "absolute",
          width: "0",
          height: "0",
          opacity: "0",
          cursor: "pointer",
        },
        ".checkmark": {
          position: "relative",
          display: "block",
          width: "16px",
          height: "16px",
          background: "white",
          borderRadius: "4px",
          outline: "1px solid #12131A",
          transition: "all 0.2s ease",
        },
        ".checkbox-container:hover .checkmark": {
          background: "transparent",
        },
        ".checkbox:checked + .checkmark": {
          background: "#D3A0FA",
          outline: "1px solid #D3A0FA",
        },
        ".checkmark::after": {
          content: '""',
          position: "absolute",
          display: "block",
          left: "50%",
          top: "40%",
          width: "6px",
          height: "10px",
          border: "solid #12131A",
          borderWidth: "0 2px 2px 0",
          transform: "translate(-50%, -50%) rotate(45deg)",
          opacity: "0",
          transition: "all 0.2s ease",
        },
        ".checkbox:checked + .checkmark::after": {
          opacity: "1",
        },

        /* 👉 Dark Mode Styles */
        ".dark .checkbox-container": {
          color: "#F2F2F7",
        },
        ".dark .checkmark": {
          background: "transparent", // neutral-800
          outline: "1px solid #E4E4EF", // neutral-600
        },
      });
    },
  ],
};
