import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  text: '',
};

const categoriesSlice = createSlice(
  {
    name: 'categories',
    initialState,
    reducers: {
      checkCategories: (state) => {
        if (state.value.length === 0) {
          return {
            ...state,
            text: 'Under Construction',
          };
        }
        return state;
      },
    },
  },
);

export const { checkCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
