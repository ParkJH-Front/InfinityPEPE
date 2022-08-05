import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./App";
import Wellcome from "./wellcome";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/aaa:text" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
