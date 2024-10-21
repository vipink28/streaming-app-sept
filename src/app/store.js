import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import tvReducer from '../features/tv/tvSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tv: tvReducer,
    movie: movieReducer
  },
});
