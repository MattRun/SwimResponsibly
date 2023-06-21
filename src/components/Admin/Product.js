import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../reducers/admin/AdminAllProductsSlice";
import './scss/Product.styles.scss'

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProduct(productId));
      console.log("Product deleted successfully");
      // Additional actions or logic after successful deletion
    } catch (error) {
      console.log("Error deleting Product:", error);
      // Handle error, if needed
    }
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
            muted 
          />
        </div>
      </div>
      <button>
        <Link to={`/admin/${product.id}`}>Update</Link>
      </button>
      <button type="button" onClick={() => handleDeleteProduct(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default Product;
