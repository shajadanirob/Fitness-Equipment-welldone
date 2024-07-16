/* eslint-disable @typescript-eslint/no-explicit-any */
// categorySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get('https://assignment-foure-server.vercel.app/api/products'); // Adjust the API endpoint as needed
    return response.data;
});
const initialState = {
    items: [],
    status: 'idle',
    error: null,
    selectedCategory: null,
};
const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
            state.error = null; // Reset error when starting to fetch
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
            state.error = null; // Reset error on successful fetch
        })
            .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Unknown error'; // Handle potential undefined error message
        });
    },
});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
