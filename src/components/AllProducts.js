import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, fetchProducts } from "../reducers/AllProductsSlice";
import Product from "./Product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>List of All Products</h1>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
