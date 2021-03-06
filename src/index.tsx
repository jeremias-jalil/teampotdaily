import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppContextProvider } from "./context/context";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./style/Mui-Style";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
