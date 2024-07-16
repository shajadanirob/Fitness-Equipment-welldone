// productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    products: [],
    status: 'idle',
    error: null,
};
export const fetchProductsByCategory = createAsyncThunk('products/fetchByCategory', async (categoryName, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products?categories=${categoryName}`);
        return response.data; // Assuming your API returns an array of products
    }
    catch (error) {
        return rejectWithValue(error);
    }
});
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});
export default productSlice.reducer;
