import React, {useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import app from "./base";
import { AuthContext } from "../Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute;