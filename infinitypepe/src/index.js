import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Wellcome from "./wellcome";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Wellcome />
  </React.StrictMode>
);

// console.warn = console.error = () => {};
