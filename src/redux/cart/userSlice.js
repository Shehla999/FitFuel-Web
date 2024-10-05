import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isSignedIn = true;
    },
    signout: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
