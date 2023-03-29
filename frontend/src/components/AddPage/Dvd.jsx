function Dvd({ updateData, data, errors }) {
  return (
    <div id="book">
      <p className="section-w">Please Add Size!</p>
      <div className="box">
        <label htmlFor="weight">Size (MB):</label>
        <div className="inp-err">
          <input
            type="text"
            id="size"
            name="size"
            value={data.size}
            onChange={updateData}
          />
          {errors.size && <p className="error">{errors.size}</p>}
        </div>
      </div>
    </div>
  );
}

export default Dvd;
