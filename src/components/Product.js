import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Product.scss';
import './scss/AllProducts.scss';

const Product = ({ product }) => {
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
      <button onClick={() => {}}>Purchase/Add to Cart</button>
    </div>
  );
};

export default Product;
