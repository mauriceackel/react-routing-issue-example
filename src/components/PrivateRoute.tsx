import React, { useContext } from "react";
import { Route, RouteProps } from "react-router";
import { AuthContext } from "../App";
import SignIn from "../pages/Signin";

const PrivateRoute: React.FC<RouteProps> = ({ path, exact, component: Component }) => {
  const authContext = useContext(AuthContext);

  return <Route path={path} exact={exact} render={(renderProps) => authContext.signedIn && Component ? <Component {...renderProps} /> : <SignIn />}></Route>;
};

export default PrivateRoute;
