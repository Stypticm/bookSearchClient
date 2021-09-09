// React
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Component
import { App } from "./containers/App/App";
import { store } from "./redux/store";

// Style
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
