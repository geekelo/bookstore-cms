import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: '1',
      category: 'Author 1',
      title: 'The Hunger Games book 1',
    },
    {
      id: '2',
      category: 'Author 2',
      title: 'The Hunger Games book 2',
    },
    {
      id: '3',
      category: 'Author 3',
      title: 'The Hunger Games book 3',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    updatebookList: (state, action) => {
      state.value.push(action.payload);
    },
    deletebook: (state, action) => {
      const newState = state.value.filter((each) => each.id !== action.payload);
      return {
        ...state,
        value: newState,
      };
    },
  },
});

export const { updatebookList, deletebook } = bookSlice.actions;
export default bookSlice.reducer;
