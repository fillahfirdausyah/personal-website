import React from "react";

import "./style.css";

function Login() {
  return (
    <div className="home-container login-page">
      <div className="login-wrapper">
        <h2>Login</h2>
        {/* <p className="alert">some word to notify user</p> */}
        <form>
          <div className="item-input">
            <h5>Username</h5>
            <input type="text" />
          </div>
          <div className="item-input">
            <h5>Password</h5>
            <input type="text" />
          </div>
          <div className="btn btn-login">Login</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
