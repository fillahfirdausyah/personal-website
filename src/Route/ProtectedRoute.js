import { React, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    let localObj = JSON.parse(
      localStorage.getItem("sb-egnvbpierkpjtdwdctie-auth-token")
    );
    localObj !== null ? setToken(localObj.access_token) : setToken(null);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
