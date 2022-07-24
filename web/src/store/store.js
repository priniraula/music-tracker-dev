import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./slice";

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
});
