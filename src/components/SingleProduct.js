import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../reducers/singleProductSlice";
import { selectSingleProduct } from "../reducers/singleProductSlice";
import "./scss/SingleProducts.scss";

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct.product || {});

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className="SingleProduct">
      <div className="singleProductContainer">
        <h1>{singleProduct.title}</h1>
        {singleProduct.artist && <span>Artist: {singleProduct.artist}</span>}
        <span>Price: {singleProduct.price}</span>
        <span>Description: {singleProduct.description}</span>
        {singleProduct.videoUrl && (
          <div className="singleProductVideo">
            <div className="singleProductDisplay">
              <iframe
                width="100%"
                height="auto"
                src={singleProduct.videoUrl}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                muted
              ></iframe>
            </div>
          </div>
        )}
        <button type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
