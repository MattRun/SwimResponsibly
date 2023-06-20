import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchSingleProduct = createAsyncThunk(
    'singleProduct', async(productId) => {
        try {
            const response = await axios.get(`/api/shop/${productId}`)
            return response.data
        } catch(err) {
            console.error(err)
        }
    }
)

const singleProduct = createSlice({
    name: 'single product', 
    initialState: {
        singleProduct: {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
          state.product= { ...state.product, ...action.payload };
        });
    }
})

export default singleProduct.reducer