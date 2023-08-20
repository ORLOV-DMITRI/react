import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth";
import { RootState } from "../../store";

type InitialState = {
  user: (User & { token: string }) | null;
  isAuthenticated: boolean;
};
const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
        },
      )
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuth = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
