import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart, updateItemQuantity } from "../reducers/CartSlice";
import axios from "axios";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const handleDelete = (itemId) => {
        dispatch(removeItemsFromCart(itemId))
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateItemQuantity({ itemId, quantity: newQuantity}))
    }
  
    const calculateItemTotalPrice = (item) => {
        return (item.price / 100) * item.quantity
    }
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + calculateItemTotalPrice(item), 0);
        
    };
    

   
    return (
        <div>
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <Fragment>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <p>Quantity: </p>
                                <span>
                                    <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span> {item.quantity} </span>
                                    <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </span>
                                <p>TotalPrice: ${calculateItemTotalPrice(item)}</p>
                                <button type="button" onClick={() => handleDelete(item.id)}>Remove Item</button>
                            </li>
                        ))}
                    </ul>
                    <p>Cart Total: ${calculateTotalPrice()}</p>
                    <button type="button">Checkout</button>
                </Fragment>
            )}
        </div>
    )
}

export default CartPage

