import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../reducers/admin/AdminAllProductsSlice";
import { v4 as uuidv4 } from 'uuid';
import "./addProduct.styles.scss"


const AddProductForm = ({ onCancel }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
  
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Perform validation
      if (!title || !artist || !year) {
        alert("All fields are required");
        return;
      }
  
      try {
        const productId = uuidv4(); // Generate a unique UUID as the product ID
        const response = await dispatch(
          addProduct({
            id: productId, // Assign the unique UUID as the product ID
            title,
            artist,
            year,
            description,
            price,
            imageUrl,
          })
        );
  
        // Reset form fields and error message
        setTitle("");
        setArtist("");
        setYear("");
        setDescription("");
        setPrice("");
        setImageUrl("");
        setError("");
      } catch (error) {
        // Handle error
        console.log("Error:", error);
        setError("An error occurred. Please try again later.");
      }
    };

  return (
    <div className="form-container">
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
        <div className="input-container">
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
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        </div>
        <div className="buttons-container">
        <button type="submit">Add Product</button>
        <button type="button" onClick={onCancel}>
            Cancel
          </button></div>
        
      </form>
    </div>
  );
};

export default AddProductForm;
