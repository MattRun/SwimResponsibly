import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/singleArtSlice";





const SingleProduct = () => {
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);
  const { title, artist, description, price } = singleProduct;
  const { productId } = useParams();
  

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const handledErrorAllProducts = () => {
    if (!Array.isArray(allProducts)) {
      return [];
    }
    return allProducts;
  };

  const getProductName = ( productId ) => {
    const product = handledErrorAllProducts().find(
      (name) => product.name === name
    );
    return product ? product.name : "There is no product by that name";
  };

  return (
    <div id="">
      <div id="">
        <h1>
          {title} 
        </h1>
        <span>artisit {artist}</span>
        <span>price: {price}</span>
        <span>description: {description}</span>
        <img src={imageUrl} />
        <div>
          :{" "}
          <Link to={`/AllProducts/${single.name}`}>
            {getProductName(singleProduct.name)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;