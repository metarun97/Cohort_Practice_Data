import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../redux/counterSlice';
import cartSlice from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice,
    cartReducer: cartSlice,
  }
})
