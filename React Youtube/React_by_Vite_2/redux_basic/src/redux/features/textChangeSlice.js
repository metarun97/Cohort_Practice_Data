import { createSlice } from "@reduxjs/toolkit";

const textChangeSlice = createSlice({
  name: "text",
  initialState: {
    value: "Hello Everyone!"
  },
  reducers: {
    changeText: (state, actions) => {
      state.value = actions.payload;
    },
  }
})

export const { changeText } = textChangeSlice.actions;
export default textChangeSlice.reducer;
