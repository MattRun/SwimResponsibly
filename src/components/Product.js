import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../reducers/CartSlice';

const Product = ({ product }) => {
 const dispatch = useDispatch()

 const handleAddToCart = () => {
  dispatch(addItemToCart(product))
 }

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
