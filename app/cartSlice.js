import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(x => x.bookId === action.payload);

      if (item) item.quantity++;
      else state.items.push({
        bookId: action.payload,
        quantity: 1,
      });
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        x => x.bookId !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        x => x.bookId === action.payload.bookId
      );

      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
