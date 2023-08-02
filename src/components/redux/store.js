import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';

const store = configureStore({
  reducer: { book: bookSlice },
});

export default store;
