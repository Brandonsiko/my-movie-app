// pages/index.tsx

import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Home;
