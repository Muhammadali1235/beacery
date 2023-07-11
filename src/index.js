import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/project/Project";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
