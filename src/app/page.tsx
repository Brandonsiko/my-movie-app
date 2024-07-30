// pages/index.tsx
"use client";
import React from 'react';
import Welcome from '../app/components/Welcome';
import MovieList from '../app/components/MovieList';
import SearchBar from '../app/components/SearchBar';
import { Provider } from 'react-redux';
import store from './store/store';

const Home: React.FC = () => {


  const mystyle={
    backgroundColor:"darkGrey",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",
    color:"black"
    

  }
  return (
    <Provider store={store}>
          <div style={{backgroundColor:"black",color:"white"}}>
            <div style={mystyle}>
              <h1 style={{fontWeight:"bold",fontSize:"30px", width:"90%"}}>
                <strong>Realm Digital</strong>
              </h1>
              <SearchBar/>
            </div>
            <Welcome />
          </div>
          

    </Provider>
    
  );
};

export default Home;