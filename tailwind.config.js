module.exports = {
  theme: {
    colors: {
      blue: {
        100: "#7FB7FE",
        200: "#2F89FC",
        300: "#185EB8"
      },
      grey: {
        100: "#FAFBFF",
        200: "#CFD4DD",
        300: "#ADB1BB",
        400: "#8B8F99",
        500: "#686D77"
      },
      white: "#ffffff",
      black: "#000000"
    },
    borderRadius: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      full: "50%"
    },
    borderWidth: {
      sm: "1px",
      md: "2px",
      lg: "3px",
      xl: "4px"
    },
    boxShadow: {
      sm: "0 3px 8px rgba(70, 74, 85, 0.16)",
      md: "0 8px 13px rgba(70, 74, 85, 0.16)"
    },
    cursor: {
      pointer: "pointer",
      text: "text",
      "not-allowed": "not-allowed"
    },
    fill: false,
    fontFamily: false,
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700
    },
    letterSpacing: false,
    lineHeight: {
      none: 1,
      tight: 1.25,
      loose: 1.75
    },
    opacity: false,
    stroke: false,
    zIndex: {
      0: 0,
      10: 10,
      20: 20
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    accessibility: false,
    fill: false,
    stroke: false,
    tableLayout: false
  },
  prefix: "lil-"
};
