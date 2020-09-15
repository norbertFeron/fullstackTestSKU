import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: "",
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = filterSlice.actions;

// @ts-ignore
export const selectFilter = state => state.filter.value;

export default filterSlice.reducer;
