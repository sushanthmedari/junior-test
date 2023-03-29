import React, { useState } from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import ProductSlider from './ProductSlider';
import '../components.scss';

function ProductList({ apiData, setApiData }) {

  const removeData = (deleteIds) => {
    const updatedData = apiData.filter((product) => !deleteIds.includes(product.id));
    setApiData(updatedData);
  };

  return (
    <>
      <div className="container">
        <nav className='menu'>
          <h1>Product List</h1>
          <div className="btns">
            <AddButton/>
            <DeleteButton removeData={removeData} />
          </div>
        </nav>
        <div className='products-slider'>
          {apiData.length > 0 ? 
            <ProductSlider apiData={apiData}/> 
            : "No Products available. Click the Add button to add some products."
          } 
        </div>
      </div>
    </>
  );
}

export default ProductList;