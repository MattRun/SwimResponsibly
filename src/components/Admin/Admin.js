import React, { useState } from 'react';
import AllProducts from '../Admin/AllProducts';
import AddProductForm from './AddFeature/AddProductForm';

function Admin() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddProduct = () => {
    setIsAddingProduct(true);
  };

  const handleCancelAddProduct = () => {
    setIsAddingProduct(false);
  };

  return (
    <div>
      {!isAddingProduct && (
        <button onClick={handleAddProduct}>Add Product</button>
      )}

      {isAddingProduct && (
        <>
          <AddProductForm onCancel={handleCancelAddProduct} />
        </>
      )}

      <AllProducts />
    </div>
  );
}

export default Admin;
