import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // [{id, name, price, quantity}]
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;