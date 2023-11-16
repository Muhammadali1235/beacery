import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Sign_in from "./Pages/Sign_in/Sign_in";
import Add from "./Pages/Add/Add"
import Istoria from "./Pages/Istoria/Istoria";
import EditEmployee from "./Pages/Edit/AddEmployee";
import Sign_up from "./Pages/Sign_up/Sign_up";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="add" element={<Add />} />
        <Route path="/istoria" element={<Istoria />} />
        <Route path='/editemployee/:empid' element={<EditEmployee />} />
        <Route path='/sign_in' element={<Sign_in />} />
        <Route path='/sign_up' element={<Sign_up />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);