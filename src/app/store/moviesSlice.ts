// src/store/movieSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/Movie';

interface MovieState {
  movies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    selectMovie(state, action: PayloadAction<Movie>) {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    
  },
});

export const { setMovies, selectMovie, clearSelectedMovie, setLoading, setError } = movieSlice.actions;
export default movieSlice.reducer;
