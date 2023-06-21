import React from 'react';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../reducers/CartSlice';
import { useDispatch } from 'react-redux';
import './scss/Product.scss';
import './scss/AllProducts.scss';

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
    <div className="Product">
      <div className="productTitle">
        <h3>
          <Link to={`/shop/${product.id}`}>{product.title}</Link>
        </h3>
      </div>
      <div className="productVideo">
        <div className="allProductDisplay">
          <iframe 
            width="100%"
            height="auto"
            src={product.videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            muted // Add the 'muted' attribute to enable autoplay
          ></iframe>
        </div>
      </div>
      <button onClick={handleAddToCart}>Purchase/Add to Cart</button>
    </div>
  );
};

export default Product;
