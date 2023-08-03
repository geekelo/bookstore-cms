import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
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
