import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    cartItems: [],
    // User-specific state goes here
  },
  reducers: {
    // User-specific actions and reducers can be added here
    addToUserCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromUserCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearUserCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { actions: userActions } = userSlice;
export default userSlice.reducer;