// pages/index.tsx
"use client";
import React from 'react';
import MovieList from '../app/components/MovieList';
import SearchBar from '../app/components/SearchBar';
import { Provider } from 'react-redux';
import store from './store/store';

const Home: React.FC = () => {


  const mystyle={
    backgroundColor:"grey",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"

  }
  return (
    <Provider store={store}>
          <div style={{backgroundColor:"darkgrey"}}>
            <div style={mystyle}>
              <h1 style={{fontWeight:"bold",fontSize:"30px", width:"90%"}}>
                <strong>DATABULK</strong> Movies, snuggle-up, Its Movie Time
              </h1>
              <SearchBar/>
            </div>
            <MovieList />
          </div>
    </Provider>
    
  );
};

export default Home;