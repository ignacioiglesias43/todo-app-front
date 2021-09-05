import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";

import store from "./store/index";
import theme from "./assets/themes/theme";

import "./assets/css/App.css";
import ModalDialog from "./components/organisms/ModalDialog";
import TaskModal from "./components/organisms/TaskModal";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <ModalDialog />
      <TaskModal />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
