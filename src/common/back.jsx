import React from "react";
const Back = ({ link, label, history, disabled, submit }) => {

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "1em" }}
        onClick={submit}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Back;
