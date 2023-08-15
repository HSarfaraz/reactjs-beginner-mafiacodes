import React from "react";

const MovieList = ({ movies, onClick }) => {
  //   const movies = [
  //     "Captain America",
  //     "Iron Man",
  //     "Black Panther",
  //     "Avenger Endgame",
  //     "Captain Marvel",
  //   ];

  const movieList = movies.map((movie) => {
    return (
      <li key={movie.id} onClick={onClick}>
        {movie.name}
      </li>
    );
  });
  return (
    <div>
      <h1>Movie List</h1>
      <ul>{movieList}</ul>
    </div>
  );
};

export default MovieList;
