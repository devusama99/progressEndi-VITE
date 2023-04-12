import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { theme } from "./styles/theme";
import "mac-scrollbar/dist/mac-scrollbar.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
