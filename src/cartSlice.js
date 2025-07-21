import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cartData')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cartData', JSON.stringify(state.cart));
    },

    increaseQuantity: (state, action) => {
      const product = action.payload;
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        exist.quantity += 1;
      }
      localStorage.setItem('cartData', JSON.stringify(state.cart));
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist && exist.quantity > 1) {
        exist.quantity -= 1;
      }
      localStorage.setItem('cartData', JSON.stringify(state.cart));
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((x) => x.id !== productId);
      localStorage.setItem('cartData', JSON.stringify(state.cart));
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('cartData');
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
