import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <>
            {" "}
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
