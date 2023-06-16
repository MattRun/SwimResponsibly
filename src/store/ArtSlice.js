import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("shop/fetchProducts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/shop"); 
  
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;