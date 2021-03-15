/** @format */

import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/authServicePlus";

class ProtectedRoutes extends Component {
  render() {
    const user = auth.getUser();
    let { path, component: Component, render, ...rest } = this.props;
    return (
      <React.Fragment>
        <Route
          path={path}
          {...rest}
          render={(props) => {
            if (user) {
              return Component ? <Component {...props} /> : render(props);
            }
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
export default ProtectedRoutes;
