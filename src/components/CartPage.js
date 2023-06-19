import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart, updateItemQuantity } from "../reducers/CartSlice";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const isLoggedIn = useSelector((state) => !!state.auth.me.id)

    //     if (!isLoggedIn) {
    //         localStorage.setItem('cartItems', JSON.stringify(cartItems))
    //     }
    // }, [cartItems])

    const handleDelete = (itemId) => {
        dispatch(removeItemsFromCart(itemId))
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateItemQuantity({ itemId, quantity: newQuantity}))
    }

    return (
        <div>
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
                <p>You're cart is empty</p>
            ) : (
                <Fragment>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <p>Quantity: {item.quantity}</p>
                                <button type="button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                <p>Price: {item.price}</p>
                                <button type="button" onClick={() => handleDelete(item.id)}>Remove Item</button>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )}
        </div>
    )
}

export default CartPage