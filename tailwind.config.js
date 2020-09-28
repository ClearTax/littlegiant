module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      blue: {
        50: "#CFE4FF",
        100: "#7FB7FE",
        200: "#2F89FC",
        250: "#1678FB",
        300: "#185EB8",
        400: "#003273",
      },
      green: {
        100: "#7FE3AD",
        200: "#2BCF76",
        300: "#169451",
      },
      orange: {
        100: "#FFC194",
        200: "#FE9D54",
        300: "#B9642A",
      },
      grey: {
        100: "#FAFBFF",
        150: "#D6D6D6",
        200: "#CFD4DD",
        300: "#ADB1BB",
        400: "#8B8F99",
        500: "#686D77",
      },
      font: {
        100: "#828999",
        200: "#464D5E",
        300: "#303654",
      },
      white: "#ffffff",
      black: "#000000",
    },
    borderRadius: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "12px",
      full: "50%",
    },
    borderWidth: {
      sm: "1px",
      md: "2px",
      lg: "3px",
      xl: "4px",
    },
    boxShadow: {
      sm: "0 8px 13px rgba(70, 74, 85, 0.08)",
      md: "0 13px 22px rgba(70, 74, 85, 0.08)",
      lg: "0 0 34px rgba(70, 74, 85, 0.10)",
    },
    cursor: {
      pointer: "pointer",
      text: "text",
      "not-allowed": "not-allowed",
    },
    fill: false,
    fontFamily: false,
    fontSize: {
      "s-12": "12px",
      "s-14": "14px",
      base: "16px",
      "s-18": "18px",
      "s-20": "20px",
      "s-24": "24px",
      "s-28": "28px",
      "s-32": "32px",
      "s-36": "36px",
      "s-40": "40px",
      "s-48": "48px",
      "s-56": "56px",
      "s-64": "64px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    letterSpacing: false,
    lineHeight: {
      none: 1,
      tight: 1.2,
      loose: 1.5,
    },
    opacity: false,
    screens: {
      sm: {
        max: "768px",
      },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1280px" },
      xl: { min: "1281px" },
    },
    stroke: false,
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    accessibility: false,
    fill: false,
    stroke: false,
    tableLayout: false,
  },
  prefix: "lil-",
};
