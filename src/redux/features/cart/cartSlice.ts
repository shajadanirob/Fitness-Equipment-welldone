// src/redux/features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// src/interfaces.ts

export interface CartItem {
  id: string; 
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number;
  image: string;
}


export interface CartState {
  items: CartItem[];
}


const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateCartQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    replaceCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, updateCartQuantity, removeFromCart, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
