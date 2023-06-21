import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/adminfetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.get(`/api/admin/${id}`);
      console.log("axios", response.data)
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "singleProduct/updateProduct",
  async ({ id, title, artist, year, description, price, videoUrl }) => {
    try {
      const response = await axios.put(`/api/admin/${id}`, {
        title,
        artist,
        year,
        description,
        price,
        videoUrl,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const AdminsingleProduct = createSlice({
  name: "singleProductAdmin",
  initialState: {
    adminSingleproduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.adminSingleproduct= { ...state.adminSingleproduct, ...action.payload }
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.adminSingleproduct = action.payload;
    });
  },
});

 export const selectSingleProduct = (state) => {
  return state.AdminsingleProduct.adminSingleproduct;
}

export default AdminsingleProduct.reducer;
