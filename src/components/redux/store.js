import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { fetchBooks, postBook, deleteBook } from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export { fetchBooks, postBook, deleteBook };
export default store;
