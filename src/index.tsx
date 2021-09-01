import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";

import store from "./store/index";
import theme from "./assets/themes/theme";

import "./assets/css/App.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
