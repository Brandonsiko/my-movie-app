// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import movieReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
