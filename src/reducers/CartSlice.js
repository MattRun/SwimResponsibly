import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    } ,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity += newItem.quantity
            } else {
                state.items.push(newItem)
            }
        },
        removeItemsFromCart: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter((item) => item.id !== itemId)
        },
        updateItemQuantity: (state, action) => {
            const { itemId, quantity } = action.payload
            const existingItemIndex = state.items.findIndex((item) => item.id === itemId)

            if(existingItemIndex !== -1) {
                if(quantity === 0) {
                    state.items.splice(existingItemIndex, 1)
                } else {
                    state.items[existingItemIndex].quantity = quantity
                }
            }
        }
    }
})

export const { addItemToCart, removeItemsFromCart, updateItemQuantity } = cartSlice.actions

export default cartSlice.reducer

