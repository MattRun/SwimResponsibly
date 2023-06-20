import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.get(`/api/admin/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "singleProduct/updateProduct",
  async ({ id, title, artist, year, description, price, imageUrl }) => {
    try {
      const response = await axios.put(`/api/admin/${id}`, {
        title,
        artist,
        year,
        description,
        price,
        imageUrl,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const selectSingleProduct = (state) => state.singleProduct;

export default singleProductSlice.reducer;
