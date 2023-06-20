import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "admin/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/admin");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to fetch products");
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { dispatch, rejectWithValue }) => {
    try {
      // Make the API call
      const response = await axios.post("/api/admin", productData);
      const newProduct = response.data;

      return newProduct;
    } catch (error) {
      // Revert the state if the API call fails
      dispatch(addProduct.rejected(error));
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (productId, { dispatch, rejectWithValue }) => {
    try {
      // Make the API call to delete the product on the backend
      await axios.delete(`/api/admin/${productId}`);

      // Update the state optimistically
      dispatch(deleteProduct.fulfilled(productId));

      return productId;
    } catch (error) {
      // Revert the state if the API call fails
      dispatch(deleteProduct.rejected(error));
      return rejectWithValue(error.message);
    }
  }
);

const adminProductsSlice = createSlice({
  name: "products",
  initialState: {
    adminProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.adminProducts = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const productId = action.payload;
      state.adminProducts = state.adminProducts.filter(
        (product) => product.id !== productId
      );
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.adminProducts.push(action.payload);
    });
  },
});

export const selectProducts = (state) => state.adminProducts.adminProducts;

export default adminProductsSlice.reducer;
