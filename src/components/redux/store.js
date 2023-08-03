import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import categoriesSlice from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookSlice,
    categories: categoriesSlice,
  },
});

export default store;
