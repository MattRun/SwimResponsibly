import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchSingleArt = createAsyncThunk(
    'singeArt', async(artId) => {
        try {
            const { data } = await axios.get(`/api/art${artId}`)
            return data
        } catch(err) {
            console.error(err)
        }
    }
)

const singleArt = createSlice({
    name: 'single art', 
    initialState: {
        singleArt: {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleArt.fulfilled, (state, action) => {
            state.singleArt = action.payload
        }),
        builder.addCase(fetchSingleArt.rejected, (state, action) => {
            console.log('rejected')
        })
    }
})

export default singleArt.reducer