import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../reducers/singleProductSlice";
import { selectSingleProduct } from "../reducers/singleProductSlice";
import { addItemToCart } from "../reducers/CartSlice";

const SingleProduct = () => {
  const { productId } = useParams();
  
  const dispatch = useDispatch();
  
  const singleProduct = useSelector((state) => {
    return state.singleProduct.product || {}
  });

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const existingItemIndex = cartItems.findIndex(item => item.id === singleProduct.id);
  
    if (existingItemIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // If the product doesn't exist, add it to the cart
      const updatedCartItems = [...cartItems, { ...singleProduct, quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  
    dispatch(addItemToCart(singleProduct));
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const handledErrorAllProducts = () => {
    if (!Array.isArray(allProducts)) {
      return [];
    }
    return allProducts;
  };

  return (
    <div id="">
      <div id="">
        <h1>
          {singleProduct.title} 
        </h1>
        { singleProduct.artist &&
          <span>artist: {singleProduct.artist}</span>
        }
        <span>price: {singleProduct.price}</span>
        <span>description: {singleProduct.description}</span>
        <img src='singleProduct.imageUrl' />
        <button type="button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;