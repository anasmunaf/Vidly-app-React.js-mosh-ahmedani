import React from "react";
const Groups = (props) => {
  let { genre, genreHandler, active } = props;
  return (
    <ul className="list-group click">
      {genre.map((movie) => {
        return (
          <li
            key={movie.name}
            onClick={() => genreHandler(movie)}
            className={
              active === movie ? "list-group-item active" : "list-group-item"
            }
          >
            {movie.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Groups;
