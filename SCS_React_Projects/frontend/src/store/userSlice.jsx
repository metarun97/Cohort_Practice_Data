import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.data = action.payload;
      // console.log(action);
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
