import ProductForm from "./ProductForm";

import "../components.scss";
function ProductAdd({ apiData, setApiData }) {
  return (
    <div className="container">
      <nav className="menu">
        <h1>Product Add</h1>
        <div className="btns"></div>
      </nav>
      <ProductForm apiData={apiData} setApiData={setApiData} />
    </div>
  );
}

export default ProductAdd;
