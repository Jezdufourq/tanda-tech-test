import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
