// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie-details" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
