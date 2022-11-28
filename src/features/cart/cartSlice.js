import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const item = state.cartItems.find((item) => item.id === itemToAdd.id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      } else {
        state.cartItems.push({ ...itemToAdd, quantity: 1 });
        state.total += itemToAdd.price;
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.quantity += 1;
      state.total += item.price;
    },
    decrease: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.quantity -= 1;
      state.total -= item.price;
    },
    remove: (state, action) => {
      const id = action.payload;
      const otherItems = state.cartItems.filter((item) => item.id !== id);
      console.log(otherItems);
      state.cartItems = otherItems;
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        console.log(total);
      });
      state.total = total;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
