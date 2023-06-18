import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../reducers/singleProductSlice";
import { selectSingleProduct } from "../reducers/singleProductSlice";




const SingleProduct = () => {
    const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => {
    console.log('state.singleProduct', state.singleProduct.product)
    return state.singleProduct.product || {}
  });
  console.log('singleProduct', singleProduct)
    console.log('artist', singleProduct.artist)

//   const { title, artist, description, price } = singleProduct;
  

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const handledErrorAllProducts = () => {
    if (!Array.isArray(allProducts)) {
      return [];
    }
    return allProducts;
  };

//   const getProductName = ( productId ) => {
//     const product = handledErrorAllProducts().find(
//       (name) => product.name === name
//     );
//     return product ? product.name : "There is no product by that name";
//   };

  return (
    <div id="">
      <div id="">
        <h1>
          {singleProduct.title} 
        </h1>
        { singleProduct.artist &&
          <span>artist: {singleProduct.artist}</span>
        }
        <span>price: {singleProduct.price}</span>
        <span>description: {singleProduct.description}</span>
        <img src='singleProduct.imageUrl' />
        <div>
          :{" "}
          {/* <Link to={`/shop/${singleProduct.name}`}>
            {getProductName(singleProduct.name)}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;