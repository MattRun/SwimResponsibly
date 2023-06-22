import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProducts
} from "../../reducers/admin/AdminAllProductsSlice";
import Product from "./Product";
import { v4 as uuidv4 } from 'uuid';
import "./scss/AllProduct.scss"
const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  
      <div className="productGrid1">
        {products.map((product) => (
          <Product key={uuidv4()} product={product} />
        ))}
      </div>
   
  );
};

export default AllProducts;
