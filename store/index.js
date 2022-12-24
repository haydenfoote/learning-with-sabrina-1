import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardslice";

export const store = configureStore({
  reducer: {
    cardsInfo: cardsReducer,
  },
});
