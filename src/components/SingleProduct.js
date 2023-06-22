import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../reducers/singleProductSlice";
import "./scss/SingleProducts.scss";
import { addItemToCart } from "../reducers/CartSlice";

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct.product || {});

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(singleProduct));

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...cartItems, singleProduct];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const formattedPrice = (singleProduct.price / 100).toFixed(2);

  return (
    <div className="singleProductContainer">
      <h1>{singleProduct.title}</h1>
      <div className="singleProductContent">
        <div className="singleProductDescription">
          <span>{singleProduct.description}</span>
        </div>
        <div className="singleProductVideo">
          <div className="singleProductDisplay">
            {singleProduct.videoUrl && (
              <iframe
                width="100%"
                height="100%"
                src={singleProduct.videoUrl}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                muted
              ></iframe>
            )}
          </div>
        </div>
        <div className="singleProductDetails">
          <span>Price: ${formattedPrice}</span>
          <button type="button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
