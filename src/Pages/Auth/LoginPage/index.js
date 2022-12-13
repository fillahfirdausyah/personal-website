import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import supabaseClient from "../../../api/supabaseClient";
import Spinner from "../../../Component/Spinner";

import "./style.css";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAllertMessage] = useState("");

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      history.push("/dashboard");
    } catch (error) {
      setAllertMessage(error.error_description);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-page-wrapper login-page">
      <div className="login-wrapper">
        <h2>Login</h2>
        {alertMessage == "" ? "" : <p className="alert">{alertMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="item-input">
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="item-input">
            <h5>Password</h5>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div className="loading spinner-wrapper">
              <Spinner />
            </div>
          ) : (
            <button type="submit" className="btn btn-login">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
