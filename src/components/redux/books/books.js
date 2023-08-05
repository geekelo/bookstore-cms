import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

const initialState = {
  value: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchbooks', async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
});

export const postBook = createAsyncThunk('books/postBooks', async (newBook) => {
  try {
    const response = await api.post('/books', newBook);
    return response.data;
  } catch (error) {
    throw new Error('Unable to add new book');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBooks', async (bookID) => {
  try {
    await api.delete(`/books/${bookID}`);
    return bookID;
  } catch (error) {
    throw new Error('Unable to delete book');
  }
});

const bookReducer = createSlice({
  name: 'bookReducer',
  initialState,
  reducers: {
    updatebookList: (state, action) => {
      state.value.push(action.payload);
    },
    deletebook: (state, action) => {
      const temp = state.value.filter((each) => each.item_id !== action.payload);
      return {
        ...state,
        value: temp,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'successfull',
        value: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'Failed',
        error: action.error.message,
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        status: 'Saving',
        error: null,
      }))
      .addCase(postBook.fulfilled, (state, action) => ({
        ...state,
        status: 'Successfully Saved',
        value: [...state.value, action.payload],
      }))
      .addCase(postBook.rejected, (state) => ({
        ...state,
        status: 'Saving Failed',
        error: null,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const deletedBookId = action.payload;
        // Create an array of books from the object using Object.entries
        const booksArray = Object.entries(state.value);

        // Filter out the deleted book by its id
        const updatedValue = booksArray.filter(
          ([itemId]) => itemId !== deletedBookId,
        );
        return {
          ...state,
          status: 'Successfully deleted',
          value: updatedValue,
        };
      });
  },
});

export const { updatebookList, deletebook } = bookReducer.actions;
export default bookReducer.reducer;
