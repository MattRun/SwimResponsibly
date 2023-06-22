import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../reducers/admin/AdminAllProductsSlice";

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
      <h3>{product.title}</h3>
      <button onClick={() => ({})}>Update</button>
      <button type="click" onClick={() => handleDeleteProduct(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default Product;
