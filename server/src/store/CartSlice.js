import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCart = createAsyncThunk(
    'cart', async (customerId) => {
        try {
            const response = await axios.get(`/api/customers/${customerId}/cart`)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem', 
    async ({ customerId, cartItemId, quantity }) => {
        try {
            const response = await axios.put(`/api/customers/${customerId}/cart/${cartItemId}`, { quantity })
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
)

export const removeCartItem = createAsyncThunk(
    'cart/removeCartItem',

    async ({ customerId, cartItemId }) => {
        try {
            await axios.delete(`/api/customers/${customerId}/cart/${cartItemId}`)
            return cartItemId
        } catch(err) {
            console.error(err)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [],
      loading: false,
      error: null,
    },
    reducers: {
      // Additional reducers specific to cart actions can be added here
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
          state.loading = false;
          state.cartItems = action.payload;
        })
        .addCase(fetchCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updateCartItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
          state.loading = false;
          // Update the specific cart item in the state with the updated data
          const updatedCartItem = action.payload;
          state.cartItems = state.cartItems.map((item) =>
            item.id === updatedCartItem.id ? updatedCartItem : item
          );
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
          // Remove the deleted cart item from the state
          const cartItemId = action.payload;
          state.cartItems = state.cartItems.filter((item) => item.id !== cartItemId);
        })
        .addCase(removeCartItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
  });
  
  export default cartSlice.reducer;