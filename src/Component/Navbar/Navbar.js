import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./style.css";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="/" className={pathname == "/" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="/works" className={pathname == "/works" ? "active" : ""}>
            Works
          </a>
        </li>
        <li>
          <a
            href="/techstacks"
            className={pathname == "/techstacks" ? "active" : ""}
          >
            Tech Stack
          </a>
        </li>
        <li>
          <a href="https://github.com/fillahfirdausyah/personal-website">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
