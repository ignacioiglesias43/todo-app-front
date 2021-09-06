import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";

import theme from "./assets/themes/theme";

import "./assets/css/App.css";
import ModalDialog from "./components/organisms/ModalDialog";
import TaskModal from "./components/organisms/TaskModal";
import ConfirmDialog from "./components/organisms/ConfirmDialog";
import ReduxProvider from "./store/ReduxProvider";

ReactDOM.render(
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <ModalDialog />
      <ConfirmDialog />
      <TaskModal />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
