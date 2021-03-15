/** @format */

import React, { Component } from "react";
import MovieForm from "../components/movieForm";
class MovieDetails extends Component {
  render() {
    const { match, history } = this.props;
    let id = match.params.id;
    return (
      <div>
        <MovieForm id={id} history={history} />
      </div>
    );
  }
}

export default MovieDetails;
