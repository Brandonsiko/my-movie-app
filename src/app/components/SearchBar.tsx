// src/components/SearchBar.tsx

"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies, setLoading, setError } from '../store/moviesSlice';
import axios from 'axios';
import { Movie } from '../types/Movie';
import './SearchBar.css'
import searchIcon from "../search-interface-symbol.png"


//This is a Search Bar Function that Handles and populates the movie list
const SearchBar: React.FC = () => {
  
  const [query, setQuery] = useState('');
  
  const dispatch = useDispatch();
  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!query) return;
    dispatch(setLoading(true));
    const url=`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=222d44b6d682c9baeb8b4d39cd4987ba`;
    
    
    try {
      const response = await axios.get(url);
      dispatch(setMovies(response.data.results));
    } catch (error) {
      dispatch(setError('Failed to fetch movies'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="container">
        <form onSubmit={handleSearch} className="search-form">
        <input
            type="text"
            className="mr-sm-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
        />
        <button type="submit" className='SearchButton'>
          <img src="https://www.svgrepo.com/show/7109/search.svg" alt="search"/>
          </button>
        </form>
    </div>
    
  );
};

export default SearchBar;
