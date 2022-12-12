import React from "react";

import { useLocation } from "react-router-dom";

import { AiFillHome, AiFillFileAdd, AiOutlineLogout } from "react-icons/ai";

import "./style.css";

function NavbarDashboard() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bottom-nav">
      <div
        className={
          pathname == "/dashboard"
            ? "navbar-home navbar-default-style bottom-nav-active"
            : "navbar-home navbar-default-style"
        }
      >
        <a href="#">
          <div className="menu-icon-container">
            <AiFillHome className="icon" />
          </div>
          <span>Home</span>
        </a>
      </div>

      <div
        className={
          pathname == "/dashboard/add-work"
            ? "navbar-home navbar-default-style bottom-nav-active"
            : "navbar-home navbar-default-style"
        }
      >
        <a href="#">
          <div className="menu-icon-container">
            <AiFillFileAdd className="icon" />
          </div>
          <span>Add Works</span>
        </a>
      </div>

      <div
        className={
          pathname == "/logout"
            ? "navbar-home navbar-default-style bottom-nav-active"
            : "navbar-home navbar-default-style"
        }
      >
        <a href="#">
          <div className="menu-icon-container">
            <AiOutlineLogout className="icon" />
          </div>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default NavbarDashboard;
