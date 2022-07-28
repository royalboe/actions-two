import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
