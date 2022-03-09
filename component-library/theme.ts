const fontFamily = "Sen sans-serif";

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

export const theme = {
  fonts: {
    sans: ["Sen", "sans-serif"],
    sen: "Sen",
  },
  typography: {
    headlineOne: `
          font-family: ${fontFamily};
          font-size: 18px;
          font-weight: ${fontWeights.semibold}
          `,
  },
  fontWeights,
  shadows: {},
  colors: {
    white: "#FFF",
    black: "#000000",
    darkBlue: "#0e1b5a",
    lightGray: "#e4e7e7",
    lighterGray: "#bbc4c3",
    red: "#e70000",
    turquoise: "#c5e5e8",
    itemGray: "#ccd1d0",
    blueGray: "#dde1e5",
    seaBlue: "#6fc4c9",
    darkTurquoise: "#36a1ab",
    green: "#169d77",
    blue: "#2da1ad",
    lightBlue: "#abd9de",
    gray: "#c1c1c1",
    strongBlue: "#0000ff",
    lighterBlue: "#e1e1e1",
    blueLine: "#96D0D6",
    strongGreen: "#bde1e5",
    colorGray: "#e2e6e6",
    darkerTurquoise: "#56b4bc",
  },
};
