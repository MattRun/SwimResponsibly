import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSingleCampus = createAsyncThunk(
  "Product/fetchSingleProduct",
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

export const updateCampus = createAsyncThunk(
  'product/updateProduct',
  async ({ id, name, address, description }) => {
    try {
      const { data } = await axios.put(`/api/admin/${id}`, {
        name,
        address,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);





const singleCampusSlice = createSlice({
  name: "SingleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      state.campus = action.payload; // Update campus
      state.students = action.payload.students || []; // Update students or initialize as an empty array
    });
    builder.addCase(updateCampus.fulfilled, (state, action) => {
      state.campus = action.payload; // Update campus
    });
    builder.addCase(unregisterStudent.fulfilled, (state, action) => {
      const studentId = action.payload;
      state.students = state.students.filter(
        (student) => student.id !== studentId
      ); // Remove the unregistered student from the students array
    });
  },
});

export const selectSingleCampus = (state) => {
  return state.singleCampus.campus;
};

export default singleCampusSlice.reducer;