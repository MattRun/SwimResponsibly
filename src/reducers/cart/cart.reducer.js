import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const response = await axios.get('/api/cart/items'); // Adjust the endpoint based on your API route
      return response.data;
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
      throw new Error('Failed to fetch cart items');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    cartItems: [],
  },
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const cartItemToRemove = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== cartItemToRemove.id
        );
      } else {
        existingCartItem.quantity--;
      }
    },
    clearItemFromCart: (state, action) => {
      const cartItemToClear = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
