/** @format */

import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "../common/movie";
import Navbar from "./navbar";
import Customer from "./customers";
import Rental from "./rentals";
import MovieDetails from "../common/details";
import NoFound from "./noFound";
import LoginForm from "./loginForm";
import Logout from "./logout";
import Register from "./register";
import ProtectedRoutes from "./ProtectedRoutes";
import auth from "../services/authServicePlus";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  state = {};
  componentDidMount() {
    try {
      const user = auth.getUser();
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar user={this.state.user} />
        <div>
          <Switch>
            <Route
              path='/movies'
              exact
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <ProtectedRoutes path={"/movies/:id?"} component={MovieDetails} />
            <Route path='/customers' component={Customer} />
            <Route path='/rentals' component={Rental} />
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => <LoginForm {...props} />} />
            <Route path='/logout' component={Logout} />
            <Route path='/no-found' component={NoFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/no-found' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
