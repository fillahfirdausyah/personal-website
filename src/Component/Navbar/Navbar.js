import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/techstacks">Tech Stack</a>
        </li>
        <li>
          <a href="https://github.com/fillahfirdausyah/personal-website">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
