import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  if (error == null) error = {};
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={"text"}
        className="form-control"
        id={name}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {error[name] && <div className="alert alert-danger">{error[name]}</div>}
    </div>
  );
};

export default Input;
