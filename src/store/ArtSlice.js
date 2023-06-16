import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllProducts = createAsyncThunk(
    'allProducts', async () => {
        try {
            const {data} = await axios.get('/api/products')
            return data
        } catch(err) {
            console.error(err)
        }
    }
)

const allProducts = createSlice({
    name: 'products',
    initialState: {
        artList: [],
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.artList = action.payload
        }),
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export default allProducts.reducer 
