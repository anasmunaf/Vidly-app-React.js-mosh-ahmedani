/** @format */

import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import newGenres from "../services/genreServicePlus";
import { getNewMovie, saveMovie } from "../services/movieServicePlus";
import "../utils/form.css";

class MovieForm extends Form {
  state = {
    data: {
      id: null,
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    error: {},
    genres: [],
  };

  schema = {
    id: Joi.any(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).less(11).required().label("Rate"),
  };
  render() {
    const { data, error, genres } = this.state;
    const { history } = this.props;
    return (
      <div className='container'>
        <h1 className='formStyle'>Movie Form</h1>
        <form>
          {this.input("title", "Title", data.title, error)}
          {this.select("genreId", "Genre", data.genreId, error, genres)}
          {this.input(
            "numberInStock",
            "Number In Stock",
            data.numberInStock,
            error,
          )}
          {this.input("dailyRentalRate", "Rate", data.dailyRentalRate, error)}
          {this.button("/movies", "Save", history)}
        </form>
      </div>
    );
  }

  async componentDidMount() {
    let { data: genres } = await newGenres();
    this.setState({ genres });
    const { id } = this.props;

    if (id === "add") return null;

    let { data: movie } = await getNewMovie(id);
    console.log(movie);
    if (!movie) {
      window.location = "/no-found";
    }
    this.setState({
      data: this.updateMovieData(movie),
    });
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);
    console.log("Submitted");
    this.props.history.push("/movies");
  };

  updateMovieData = (movie) => {
    return {
      id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
}

export default MovieForm;
