import { createSlice } from "@reduxjs/toolkit";

export const addIdSlice = createSlice({
  name: "idFind",
  initialState: {
    value: null,
  },
  reducers: {
    getId: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getId } = addIdSlice.actions;
