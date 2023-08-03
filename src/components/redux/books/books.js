import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    updatebookList: (state, action) => {
      state.value.push(action.payload);
    },
    deletebook: (state, action) => {
      const newState = state.value.filter((each) => each.item_id !== action.payload);
      return {
        ...state,
        value: newState,
      };
    },
  },
});

export const { updatebookList, deletebook } = bookSlice.actions;
export default bookSlice.reducer;
