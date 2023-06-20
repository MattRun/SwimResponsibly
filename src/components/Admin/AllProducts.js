import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProducts
} from "../../reducers/admin/AdminAllProductsSlice";
import Product from "./Product";
import AddProductForm from "./AddFeature/AddProductForm";
import { v4 as uuidv4 } from 'uuid';

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <AddProductForm />
      <div>
        {products.map((product) => (
          <Product key={uuidv4()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
