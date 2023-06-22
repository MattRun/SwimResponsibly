import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart, updateItemQuantity } from "../reducers/CartSlice";
import { Link } from "react-router-dom";



const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [JSON.stringify(cartItems)])

    const handleDelete = (itemId) => {
        dispatch(removeItemsFromCart(itemId))
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        dispatch(updateItemQuantity({ itemId, quantity: newQuantity}))
    }
  
    const calculateItemTotalPrice = (item) => {
        const totalPrice = (item.price / 100) * item.quantity
        return totalPrice.toFixed(2)
    }
    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price / 100) * item.quantity, 0);
        return totalPrice.toFixed(2)
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
                    <button>
        <Link to={`/Checkout`}>Checkout</Link>
      </button>
                </Fragment>
            )}
        </div>
    )
}

export default CartPage

