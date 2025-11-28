import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { errorReducer } from "./errorReducer";

export const store = configureStore({
  reducer: {
    errors: errorReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
