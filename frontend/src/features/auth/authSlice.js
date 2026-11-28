import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = "succeeded";
      state.loading = false;
      state.error = null;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      state.loading = action.payload === "loading";
    },
    setAuthError: (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.error = action.payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setUser, setStatus, setAuthError, clearAuthError, clearUser } =
  authSlice.actions;
export default authSlice.reducer;
