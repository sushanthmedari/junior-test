import "../components.scss";
import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import Validation from "./Validation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm({ apiData, setApiData }) {
  const [selectedOption, setSelectedOption] = useState("furniture");
  const [data, setData] = useState({});
  const [errors, setError] = useState("");
  const navigate = useNavigate();

  const updateData = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        product_type: selectedOption,
      };
    });
  };

  const checkSKU = (data) => {
    const skus = apiData.map((apiobj) => apiobj.sku);
    return skus.includes(data.sku);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = Validation(data, selectedOption, checkSKU(data));
    if (Object.values(er).length !== 0 || checkSKU(data)) {
      setError(er);
      return;
    } else {
      const requestData = {
        ...data,
        action: "addProducts",

      };
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };
      fetch("http://localhost:8080/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          navigate(-1);
          setApiData(data);
        });
    }
  };

  return (
    <div className="product-add">
      <form id="product_form" onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="sku">SKU:</label>
          <div className="inp-err">
            <input
              type="text"
              id="sku"
              name="sku"
              value={data.sku}
              onChange={updateData}
              placeholder="Capitalized letters & numbers"
            />
            {errors.sku && <p className="error">{errors.sku}</p>}
          </div>
        </div>

        <div className="box">
          <label htmlFor="name">Name:</label>
          <div className="inp-err">
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={updateData}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div className="box">
          <label htmlFor="price">Price ($):</label>
          <div className="inp-err">
            <input
              type="text"
              id="price"
              name="price"
              value={data.price}
              onChange={updateData}
            />

            {errors.price && <p className="error">{errors.price}</p>}
          </div>
        </div>
        <div className="type-switcher">
          <label htmlFor="productType">Type Switcher:</label>
          <select
            name="productType"
            onChange={(e) => setSelectedOption(e.target.value)}
            id="productType"
            form="productType"
          >
            <option value="furniture">Furniture</option>
            <option value="book">Book</option>
            <option value="dvd">DVD</option>
          </select>
        </div>
        <div className="selected">
          {selectedOption === "furniture" ? (
            <Furniture data={data} errors={errors} updateData={updateData} />
          ) : selectedOption === "book" ? (
            <Book data={data} errors={errors} updateData={updateData} />
          ) : (
            <Dvd data={data} errors={errors} updateData={updateData} />
          )}
        </div>
        <div className="btns f_btns">
          <button>Save</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
} 

export default ProductForm;
