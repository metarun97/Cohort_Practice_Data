import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart: JSON.parse(localStorage.getItem("CART")) || [],
}

const cartSlice = createSlice({
  name: "cart",
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
    incItemQty: (state, action) => {
      const itemId = action.payload;
      const filterItem = state.cart.find(item => item?.id === itemId)

      if (filterItem) {
        filterItem.quantity += 1;
      }
    },
    decItemQty: (state, action) => {
      const itemId = action.payload;
      const filterItem = state.cart.find(item => item?.id === itemId)

      if (filterItem) {
        if (filterItem.quantity > 1) {
          filterItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== itemId);
        }
      }

    }
  }
})

export const { addToCart, removeFromCart, incItemQty, decItemQty } = cartSlice.actions;
export default cartSlice.reducer;
