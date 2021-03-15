/** @format */

import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../services/authServicePlus";
import { Redirect } from "react-router";
import "../utils/form.css";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    error: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    if (auth.getUser()) return <Redirect to='/' />;

    const { data, error } = this.state;
    const { history } = this.props;

    return (
      <div className='container'>
        <h1 className='formStyle'>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.input("username", "Username", data.username, error)}
          {this.input("password", "Password", data.password, error)}
          {this.button("/movies", "Login", history)}
        </form>
      </div>
    );
  }
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data);
      let { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response === 400) {
        let error = { ...this.state.error };
        error.username = ex.response;
        this.setState({ error });
      }
    }
  };
}

export default LoginForm;
