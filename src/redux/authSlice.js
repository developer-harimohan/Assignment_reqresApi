import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//generates pending fulfilled and rejected action types

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", user);
      console.log(res);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    } catch (err) {
      const message = err;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    // When our request is fulfilled:
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;
    });
    // When our request is rejected:
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    });
  },
});
