import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav1">
      <nav className="nav">
        <div className="logo">
          <a href="/">
            <strong>PORTFOLIO</strong>
          </a>
        </div>
        <ul>
          <li>
            <a href="project">
              <AiOutlineFundProjectionScreen />
              <strong> My Projects</strong>
            </a>
          </li>
          <li>
            <a href="about">
              <CiUser />
              <strong>About</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineHome className="icon" />
              <strong>Home</strong>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
