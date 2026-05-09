import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart: localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [],
}


const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartObj } = action.payload;
      state.cart = [cartObj, ...state.cart]
      localStorage.setItem("CART", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter(i => i.id !== id);
      localStorage.setItem("CART", JSON.stringify(state.cart));
    },
    changeQuantity: (state, action) => {
    }
  }
})




export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
