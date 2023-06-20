import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, fetchProducts } from "../reducers/AllProductsSlice";
import Product from "./Product";
import "./scss/AllProducts.scss"
import "./scss/Product.scss"

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(allProducts); // Logging the products outside the JSX code

  return (
    <div className="AllProducts">
      <h1>Gallery</h1>
      <h2>We have assembled a collective of over a hundred creators to empower emerging artists in sharing their digital art with the world.</h2>
      <div className="productGrid">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
