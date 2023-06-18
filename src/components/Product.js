import React from 'react';

import { Link } from 'react-router-dom';

const Product = ({ product }) => {
 
  return (
    <div className='Product'>
      <h3>
        <Link to={`/shop/${product.id}`}>
        {product.title}
        </Link>
      </h3>
      <button onClick={()=>({})}>purchase/addToCart</button>
    
    </div>
  );
};

export default Product;
