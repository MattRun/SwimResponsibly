import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchSingleProduct = createAsyncThunk(
    'singeProduct', async(productId) => {
        try {
            const { data } = await axios.get(`/api/product${productId}`)
            return data
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
            state.singleProduct = action.payload
        }),
        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export default singleProduct.reducer