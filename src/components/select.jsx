import React from "react";

const Select = ({ name, label, value, onChange, error, option }) => {
  if (error == null) error = {};
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      >
        {option.map((genre) => {
          return (
            <option key={genre["_id"]} value={genre["_id"]}>
              {genre["name"]}
            </option>
          );
        })}
      </select>
      {error[name] && <div className="alert alert-danger">{error[name]}</div>}
    </div>
  );
};

export default Select;
