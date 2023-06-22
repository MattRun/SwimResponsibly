import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../reducers/CartSlice';

const Product = ({ product }) => {
 const dispatch = useDispatch()

 const handleAddToCart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    // If the product exists, update its quantity
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  } else {
    // If the product doesn't exist, add it to the cart
    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  dispatch(addItemToCart(product));
};

  return (
    <div className='Product'>
      <h3>
        <Link to={`/shop/${product.id}`}>
        {product.title}
        </Link>
      </h3>
      <button onClick={handleAddToCart}>purchase/addToCart</button>
    
    </div> 
  );
};

export default Product;
