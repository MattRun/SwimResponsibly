import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const customerSlice = createSlice({
  name: 'customer',
  initialState: null,
  reducers: {
    setCustomer: (state, action) => action.payload,
    clearCustomer: () => null,
  },
});

export const { setCustomer, clearCustomer } = customerSlice.actions;
export default customerSlice.reducer;