import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllArt = createAsyncThunk(
    'allArt', async () => {
        try {
            const {data} = await axios.get('/api/art')
            return data
        } catch(err) {
            console.error(err)
        }
    }
)

const allArt = createSlice({
    name: 'art',
    initialState: {
        artList: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllArt.fulfilled, (state, action) => {
            state.artList = action.payload
        }),
        builder.addCase(fetchAllArt.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export default allArt.reducer 