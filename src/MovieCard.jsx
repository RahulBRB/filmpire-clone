import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
        
      <div className="movie-image">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div className="movie-details">
      <span className="movie-type">{Type}</span>
        <h3 className="movie-title">{Title}</h3>
        <span className="movie-year">{Year}</span>
       
      </div>
    </div>
  );
}

export default MovieCard;
