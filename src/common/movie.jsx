/** @format */

import React, { Component } from "react";
import { pagination } from "../utils/pagination";
import { toast } from "react-toastify";
import { getNewMovies, deleteNewMovie } from "../services/movieServicePlus";
import Pagination from "./pagination";
import Groups from "./listGroups";
import MovieTable from "./movieTable";
import NewMovie from "../components/addMovie";
import newGenres from "../services/genreServicePlus";
import _ from "lodash";
import "../utils/movie.css";
import "react-toastify/dist/ReactToastify.css";

class Movies extends Component {
  state = {
    count: [],
    genre: [],
    listNum: 4,
    currentPage: 1,
    currentGenre: null,
  };
  render() {
    let filterGenre =
      this.state.currentGenre && this.state.currentGenre._id
        ? this.state.count.filter(
            (movies) => movies.genre.name === this.state.currentGenre.name,
          )
        : this.state.count;
    let movies = pagination(
      this.state.listNum,
      filterGenre.length,
      this.state.currentPage,
      filterGenre,
    );
    let { user } = this.props;
    return (
      <div className='wrapper'>
        <span className='message'>Movies: {this.numbering(filterGenre)}</span>
        <span className='group'>
          <Groups
            genre={this.state.genre}
            genreHandler={this.getGenre}
            active={this.state.currentGenre}
          />
          {user && <NewMovie />}
        </span>
        <MovieTable
          filterMovies={filterGenre}
          genres={this.state.genre}
          paginatedList={movies}
          deleteMovie={this.delete}
          sorting={this.sortTitle}
          heart={this.liked}
        />
        <span className='pagi'>
          <Pagination
            listNum={this.state.listNum}
            listLength={filterGenre.length}
            currentPage={this.state.currentPage}
            pageHandler={this.getPage}
          />
        </span>
      </div>
    );
  }
  async componentDidMount() {
    let { data: genres } = await newGenres();
    let { data: movies } = await getNewMovies();
    this.setState({
      count: movies,
      genre: [{ name: "All" }, ...genres],
    });
  }
  liked = (arr) => {
    let movies = [...this.state.count];
    let index = movies.indexOf(arr);
    movies[index].liked = !arr.liked;
    this.setState({ count: movies });
  };
  sortTitle = (arr, path) => {
    let arr1 = _.orderBy(arr, [path], ["asc"]);
    if (JSON.stringify(arr1) !== JSON.stringify(arr))
      this.setState({ count: arr1 });
    else {
      arr1 = _.orderBy(arr, [path], ["desc"]);
      this.setState({ count: arr1 });
    }
  };

  getPage = (page) => {
    this.setState({ currentPage: page });
  };

  numbering(genre) {
    let num = genre.length;
    num = genre.length === 0 ? "No " : num;
    return num;
  }

  delete = async (id) => {
    let { count: orignalMovies } = this.state;
    const movies = orignalMovies.filter((m) => m._id !== id);
    this.setState({ count: movies });
    try {
      await deleteNewMovie(id);
    } catch (ex) {
      if (ex.response && ex.response === 404)
        toast.error("This movie has already deleted");
      this.setState({ count: orignalMovies });
    }
  };

  getGenre = (movie) => {
    this.setState({ currentGenre: movie, currentPage: 1 });
  };
}

export default Movies;
