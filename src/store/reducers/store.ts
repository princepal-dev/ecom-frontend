import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer.ts";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  preloadedState: {},
});

export default store;
