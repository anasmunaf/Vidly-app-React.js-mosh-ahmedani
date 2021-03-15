import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../utils/form.css";

class NewMovie extends Component {
  render() {
    return (
      <div className="add">
        <Link to="/movies/add">
          <p className="btn btn-primary btn-lg btn-block">New Movie</p>
        </Link>
      </div>
    );
  }
}
export default NewMovie;
