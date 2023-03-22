import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function ProductSlider({ apiData, checkedIds, setCheckedIds}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      apiData.map((obj) => ({
        ...obj,
        isChecked: false,
      }))
    );
  }, [apiData]);

  useEffect(() => {
    setCheckedIds(products.filter((product) => product.isChecked).map((product) => product.id));
  }, [products, setCheckedIds]);

  const handleProductCheckBox = (id, isChecked) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, isChecked };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    rows: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

 

  return (
    <>
      {apiData.length >= 8 ? (
        <div className="products-slider">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <Product
                  {...product}
                  handleProductCheckBox={handleProductCheckBox}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="products">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              handleProductCheckBox={handleProductCheckBox}
              isDeleted={checkedIds.includes(product.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductSlider;
