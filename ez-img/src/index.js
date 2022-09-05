import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./css/defult.css";
import Wellcome from "./component/wellcome";
import Main from "./component/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wellcome />} />
      <Route path="/main:text" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
