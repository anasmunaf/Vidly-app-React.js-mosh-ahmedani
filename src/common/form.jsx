import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/input";
import Select from "../components/select";
import Back from "./back";
class Form extends Component {
  state = {
    data: {},
    error: {},
  };
  validate = () => {
    let result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    let error = { ...this.state.error };
    for (let i of result.error.details) {
      error[i.path[0]] = i.message;
    }

    return error;
  };

  validateProperty = ({ id, value }) => {
    let obj = { [id]: value };
    let schema = { [id]: this.schema[id] };
    let result = Joi.validate(obj, schema);
    if (!result.error) return null;
    else return result.error.details[0].message;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let error = this.validate();
    this.setState({ error });
    if (error) return;
    this.doSubmit();
  };
  handleLogin = (e) => {
    let error = { ...this.state.error };
    let errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) error[e.currentTarget.id] = errorMessage;
    else delete error[e.currentTarget.id];

    let data = { ...this.state.data };
    data[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ data, error });
  };

  input = (name, label, value, error) => {
    return (
      <Input
        name={name}
        label={label}
        value={value}
        error={error}
        onChange={this.handleLogin}
      />
    );
  };
  select = (name, label, value, error, option) => {
    return (
      <Select
        name={name}
        label={label}
        value={value}
        error={error}
        option={option}
        onChange={this.handleLogin}
      />
    );
  };
  button = (link, label, history) => {
    return (
      <Back
        submit={this.handleSubmit}
        link={link}
        label={label}
        history={history}
        disabled={this.validate()}
      />
    );
  };
}

export default Form;
