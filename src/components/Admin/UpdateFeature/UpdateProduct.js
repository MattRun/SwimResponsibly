import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateProductForm = ({ campus, onUpdate }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleCampus = useSelector(selectSingleCampus);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCampus = {
      id: campus.id,
      name,
      address,
      description,
    };

    try {
      await dispatch(updateCampus(updatedCampus));
      onUpdate(updatedCampus); // Update the campus in the current view
    } catch (error) {
      console.log("Update failed:", error);
    }

    setName("");
    setAddress("");
    setDescription("");
  };

  return (
    <>
      {singleCampus && (
        <form onSubmit={handleSubmit}>
          <h2>Update Campus</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="Enter Description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="button-box">
            <button type="submit">Update</button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdateProductForm;
