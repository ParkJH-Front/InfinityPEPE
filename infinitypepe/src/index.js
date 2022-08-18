import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./css/style.css";
import Main from "./component/Main";
import Wellcome from "./component/Wellcome";
import Login from "./component/Login";
import Forum from "./component/Forum";
import Sign from "./component/SignUp";
import Test from "./component/test";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Wellcome />} />
      <Route path="/aaa:text" element={<Main />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/test" element={<Test />} />
      <Route path="/signup" element={<Sign />} />
    </Routes>
  </BrowserRouter>
);
