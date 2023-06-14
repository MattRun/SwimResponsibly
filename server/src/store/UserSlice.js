import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    cartItems: [],
  },
  
  reducers: {
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