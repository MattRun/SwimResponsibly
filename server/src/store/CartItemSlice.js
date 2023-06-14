import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { create } from "domain"

export const fetchCartItems = createAsyncThunk(
    'cartItems/fetch',
    async (customerId) => {
        try {
            const response = await axios.get(`/api/customers/${customerId}/cart/items`)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateCartItemQuantity = createAsyncThunk(
    'cartItems/updateQuantity',
    async ({ customerId, cartItemId, quantity }) => {
        try {
            const response = await axios.put(`/api/customers/${customerId}/cart/items/${cartItemId}`, { quantity })
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
)

export const removeCartItem = createAsyncThunk(
    'cartItem/remove',
    async ({ customerId, cartItemId }) => {
        try {
            await axios.delete(`/api/customers/${customerId}/cart/items/${cartItemId}`)
            return cartItemId
        } catch(err) {
            console.error(err)
        }
    }
)
