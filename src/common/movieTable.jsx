import React, { Component } from "react";
import Like from "./like";
import "../utils/movie.css";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class MovieTable extends Component {
  render() {
    const {
      filterMovies,
      paginatedList,
      deleteMovie,
      sorting,
      heart,
    } = this.props;
    let header = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Name" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "Like",
        content: (arr) => {
          return <Like likes={arr.liked} onClick={() => heart(arr)} />;
        },
      },
      {
        key: "delete",
        content: (arr) => {
          return (
            <button
              onClick={deleteMovie.bind(this, arr._id)}
              className="btn click"
              style={{
                border: "transparent",
                borderRadius: "5px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          );
        },
      },
    ];
    return (
      <table>
        <TableHeader head={header} sorting={sorting} movies={filterMovies} />
        <TableBody paginatedList={paginatedList} head={header} />
      </table>
    );
  }
}

export default MovieTable;
