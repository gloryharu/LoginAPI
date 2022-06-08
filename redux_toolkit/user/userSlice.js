import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
