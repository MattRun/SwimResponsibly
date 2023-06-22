// Redux code (client-side)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("admin/fetchProducts", async () => {
  try {
    const response = await axios.get("/api/admin");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
});

export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (productId) => {
    try {
      await axios.delete(`/api/admin/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete product");
    }
  }
);

const AdminProductsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    });
  },
});

export const selectProducts = (state) => state.products;

export default AdminProductsSlice.reducer;
