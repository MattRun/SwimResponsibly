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

  console.log(allProducts); // Logging the products outside the JSX code

  return (
    <div>
      <h1>List of All Products</h1>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} videoUrl={product.videoUrl}/>
        // <Route path="/product/:productId/:videoUrl" component={ProductDetail} />
        // videoUrl={product.videoUrl}
      ))}
      {/* <div>
        <iframe
          width="240"
          height="360"
          src={Product.videoUrl}
          title="YouTube Video"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default AllProducts;
