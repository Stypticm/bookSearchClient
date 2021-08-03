// React
import React from "react";
import ReactDOM from "react-dom";
import { BooksProvider } from "./BooksContext";

// Component
import { App } from "./containers/App/App";

// Style
import "./index.css";

ReactDOM.render(
  <BooksProvider>
    <App />
  </BooksProvider>,

  document.getElementById("root")
);
