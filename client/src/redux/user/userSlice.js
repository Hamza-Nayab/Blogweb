import { createSlice, current } from "@reduxjs/toolkit";
import Signin from "../../pages/Signin";
import { act } from "react";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInfail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {signInStart, signInSuccess, signInfail} = UserSlice.actions;

export default UserSlice.reducer;