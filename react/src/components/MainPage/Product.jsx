import '../components.scss';
import React from 'react';

function Product(props) {


  function formatMoney(number) {
    return `${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} $`;
  }

  const handleCheckChange = () => {
    if (props.handleProductCheckBox) {
      props.handleProductCheckBox(props.id, !props.isChecked);
    }
  }

  return (
    <div className="single-product">
      <input type="checkbox" className="delete-checkbox" name={`${props?.id}`} value={props?.id} checked={props.isChecked} onChange={handleCheckChange} />
      <div className="product-info">
        <p>{props?.sku}</p>
        <p>{props?.name}</p>
        <p>{formatMoney(+props?.price)} </p>
        <p>{props?.product_type === 'furniture' ? `Dimension:${props?.height}*${props?.width}*${props?.lenght}` : (
          props?.product_type === 'dvd' ? `Size:${props?.size}MB` : `Weight:${props?.weight}KG`
        )}</p>
      </div>
    </div>
  );
}

export default Product;