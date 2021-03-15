/** @format */

import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../services/userService";
import auth from "../services/authServicePlus";
import "../utils/form.css";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    error: {},
  };
  schema = {
    username: Joi.string().required().label("Username").email(),
    password: Joi.string().required().label("Password").min(5),
    name: Joi.string().required().label("Name"),
  };
  render() {
    const { data, error } = this.state;
    const { history } = this.props;
    return (
      <div className='container'>
        <h1 className='formStyle'>Register</h1>

        <form onSubmit={this.handleSubmit}>
          {this.input("username", "Username", data.username, error)}
          {this.input("password", "Password", data.password, error)}
          {this.input("name", "Name", data.name, error)}
          {this.button("/movies", "Register", history)}
        </form>
      </div>
    );
  }
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response === 400) {
        const error = { ...this.state.error };
        error.username = ex.response.data;
        this.setState({ error });
      }
      console.log(this.state.error);
    }
  };
}

export default Register;
