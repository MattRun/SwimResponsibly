import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchSingleProduct,
  updateProduct,
  selectSingleProduct
} from "../../../reducers/admin/AdminUpdateProductSlice";
import './updateProduct.styles.scss'

const UpdateProductForm = () => {
  const {productId}  = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(selectSingleProduct);
  

  
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTitle(product.title || "");
    setArtist(product.artist || "");
    setYear(product.year || "");
    setDescription(product.description || "");
    setPrice(product.price || "");
    setImageUrl(product.imageUrl || "");
  }, [product]);
  useEffect(() => {
    console.log("Fetching single product...");
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: productId,
      title,
      artist,
      year,
      description,
      price,
      imageUrl,
    };
    try {
      await dispatch(updateProduct(updatedProduct));
      navigate("/admin");
      console.log("Updated Product:", updatedProduct);
    } catch (error) {
      console.log("Update failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  
  return (
    
    
    <div className="form-container">
      <h1>{product.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Enter Title:"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            placeholder="Enter Artist:"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            placeholder="Enter Year:"
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Enter Description:"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            placeholder="Enter Price:"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            placeholder="Enter Image:"
            type="link"
            id="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/>

          </div>
          </div>
          <div className="buttons-container">
          <button type="submit">Update Product</button>
          <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        </div>
          </form>
          </div>
      
        );
        };
        
        export default UpdateProductForm;