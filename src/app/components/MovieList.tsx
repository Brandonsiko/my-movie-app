import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../store';
import { setMovies, setLoading, setError, selectMovie } from '../store/moviesSlice';
import { Movie } from '../types/Movie';
import './movielist.css';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const movie =useSelector((state:RootState) => state.movies.selectedMovie);
  const movies = useSelector((state: RootState) => state.movies.movies);
  const loading = useSelector((state: RootState) => state.movies.loading);
  const error = useSelector((state: RootState) => state.movies.error);
  const [expandedMovieId, setExpandedMovieId] = useState<number | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setLoading(true));
      const url =
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNDRiNmQ2ODJjOWJhZWI4YjRkMzljZDQ5ODdiYSIsIm5iZiI6MTcyMDUzNjAxNy4yOTc1OTcsInN1YiI6IjY2OGQ0YTUzMWVmOTRmZGNiM2YzNjI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BCggYeQY_JJbZ3a6bSIyvYqyP40Jx9AurKVPA91uUlg',
        },
      };
      try {
        const response = await axios.get(url, options);
        dispatch(setMovies(response.data.results));
      } catch (error) {
        console.error('Error fetching movies:', error);
        dispatch(setError('Failed to fetch movies: ' + error));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchMovies();
  }, [dispatch]);

  const toggleExpanded = (movieId: number) => {
    if (expandedMovieId === movieId) {
      setExpandedMovieId(null);
    } else {
      setExpandedMovieId(movieId);
    }
  };

  const handleMovieClick = (movie: Movie) => {

    try {
        dispatch(selectMovie(movie));
      } catch (error) {
        console.error('Error fetching movie:', error);
        dispatch(setError('Failed to fetch movie: ' + error));
      } finally {
        dispatch(setLoading(false));
      }

    
    //('/movie-details');
    
  };


  const NoDataStyle={height:"30vh",justifyContent:"center",display:"flex",alignItems:"center"}

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if(movies.length==0){
    return <div style={NoDataStyle}>
        <h1>There's No Movies to Display at this time...</h1>
        
    </div>
  }
   if(movie){
        return <ul className="movie-list-01">
        <li key={movie.id} className="movie-item-01">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details-01">
                <h2 className="movie-title">{movie.title}</h2>
                <p className={` ${expandedMovieId === movie.id ? 'expanded' : ''}`}>
                    {movie.overview}
                </p>
                {movie.overview.length > 200 && (
                    <button className="" onClick={() => toggleExpanded(movie.id)}>
                    {expandedMovieId === movie.id ? '' : ''}
                    </button>
                )}
                <p className="movie-release">Release Date: {movie.release_date}</p>
                <p className="movie-rating">Vote Rating: {movie.vote_average}</p>
                <p>the movie popularity{movie.popularity}</p>
                <p>{movie.release_date}</p>
            </div>
            <hr />
      </li>
      </ul>
    }

  return (
    <div>
      <h1>Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className={`movie-overview ${expandedMovieId === movie.id ? 'expanded' : ''}`}>
                {movie.overview}
              </p>
              {movie.overview.length > 120 && (
                <button className="" onClick={() => toggleExpanded(movie.id)}>
                  {expandedMovieId === movie.id ? '' : ''}
                </button>
              )}
              <p className="movie-release">Release Date: {movie.release_date}</p>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
              <button className='about-button' key={movie.id}  onClick={() => handleMovieClick(movie)}> Details</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
