import { createSlice } from "@reduxjs/toolkit";

const initialLoggedState = {
  isLoggedIn: false,
  jwtToken: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialLoggedState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.jwtToken = action.payload.jwtToken;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.jwtToken = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
