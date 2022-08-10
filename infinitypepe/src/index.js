import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./css/style.css";
import Main from "./component/Main";
import Wellcome from "./component/Wellcome";
import Login from "./component/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Wellcome />} />
      <Route path="/aaa:text" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
