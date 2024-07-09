// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
