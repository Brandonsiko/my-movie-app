// pages/index.tsx
"use client";
import React from 'react';
import MovieList from '../app/components/MovieList';
import SearchBar from '../app/components/SearchBar';
import { Provider } from 'react-redux';
import store from './store/store';

const Home: React.FC = () => {
  return (
    <Provider store={store}>
          <div style={{backgroundColor:"lightslategray"}}>
            <h1 style={{fontWeight:"bold",fontSize:"30px"}}><strong>DATABULK</strong> Movies, snuggle-up, Its Movie Time</h1>
            <SearchBar/>
            <MovieList />
          </div>
    </Provider>
    
  );
};

export default Home;