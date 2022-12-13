import React from "react";

import supabaseClient from "../../api/supabaseClient";

import { useLocation, useHistory } from "react-router-dom";
import { AiFillHome, AiFillFileAdd, AiOutlineLogout } from "react-icons/ai";

import "./style.css";

function NavbarDashboard() {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  const logOut = (e) => {
    e.preventDefault();

    supabaseClient.auth.signOut();
    history.push("/");
  };

  return (
    <div className="bottom-nav">
      <div
        className={
          pathname == "/dashboard"
            ? "navbar-home navbar-default-style bottom-nav-active"
            : "navbar-home navbar-default-style"
        }
      >
        <a href="/dashboard">
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
        <a href="/dashboard/add-work">
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
        <a onClick={logOut}>
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
