import { configureStore } from "@reduxjs/toolkit";
import textChangeReducer from './features/textChangeSlice';

export const store = configureStore({
  reducer: {
    text: textChangeReducer
  }
})
