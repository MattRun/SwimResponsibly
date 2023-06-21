import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

  return (
    <div className="AllProducts1">
      <h1 className="header">Gallery</h1>
      <hr className="separator" />
      <div className="quote">
        <p>
          We have assembled a collective of over a hundred creators to empower
          emerging artists in sharing their digital art with the world.
        </p>
      </div>
      <div className="productGrid1">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
