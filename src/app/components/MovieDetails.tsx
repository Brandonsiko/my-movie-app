// src/components/MovieDetails.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const MovieDetails: React.FC = () => {
  const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie);

  if (!selectedMovie) {
    return <div>No movie selected.</div>;
  }
  
  //this is a section for movie detail.
  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.overview}</p>
      <img src={`http://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
      <p>Actors: {selectedMovie.popularity}</p>
      <p>Reviews: {selectedMovie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
