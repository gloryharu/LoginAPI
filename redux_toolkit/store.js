import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import homeReducer from "./user/homeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
  },
});

export default store;
