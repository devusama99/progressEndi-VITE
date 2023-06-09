import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    background: {
      default: "#fbfbfb",
    },
    primary: {
      main: "#FFB800",
    },
    primaryLight: {
      main: "fef8ee",
    },
    secondary: {
      main: "#1B1D2A",
    },
    light: {
      main: "#fff",
      dark: "#f9f9f9",
    },
    success: {
      dark: "#009c19",
      main: "#9EB802",
      light: "#24cc00",
    },
    grey: {
      light: "#c0c0c0",
      main: "#707070",
      dark: "#090909",
    },
    drawer: "#1B1D2A",
  },
});
