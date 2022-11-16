import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Tech Stack</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
