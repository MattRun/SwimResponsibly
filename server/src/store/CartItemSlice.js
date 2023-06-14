import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItem = createAsyncThunk(
  'cartItem/fetch',
  async (itemId) => {
    try {
      const response = await axios.get(`/api/cart/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  'cartItem/update',
  async ({ itemId, quantity }) => {
    try {
      const response = await axios.put(`/api/cart/items/${itemId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  'cartItem/remove',
  async (itemId) => {
    try {
      const response = await axios.delete(`/api/cart/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState: {
    item: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = null;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default cartItemSlice.reducer;