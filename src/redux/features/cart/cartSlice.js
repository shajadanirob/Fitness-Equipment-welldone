// src/redux/features/cart/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        updateCartQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        removeFromCart(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        replaceCart(state, action) {
            state.items = action.payload;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
});
export const { addToCart, updateCartQuantity, removeFromCart, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
