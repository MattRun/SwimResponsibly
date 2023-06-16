import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: 'guest',
  initialState: {
    cartItems: [],
    // Guest-specific state goes here
  },
  reducers: {
    // Guest-specific actions and reducers can be added here
    addToGuestCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromGuestCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearGuestCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { actions: guestActions } = guestSlice;
export default guestSlice.reducer;