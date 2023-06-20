import React from 'react';

import { Link } from 'react-router-dom';

const Product = ({ product }) => {

  return (
    <div className='Product'>
      <h3>
        <Link to={`/shop/${product.id}`}>
        {product.title}
        {/* {product.videoUrl} */}
        </Link>
      
        <div>
        <iframe
          width="240"
          height="360"
          src={product.videoUrl}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted // Add the 'muted' attribute to enable autoplay
        ></iframe>
        
      </div>
      </h3>
      <button onClick={()=>({})}>purchase/addToCart</button>
    
    </div>
  );
};

export default Product;
