function Book({ updateData, data, errors }) {
  return (
    <div id="book">
      <p className="section-w">Please Add Weight!</p>
      <div className="box">
        <label htmlFor="weight">Weight (KG):</label>
        <div className="inp-err">
          <input
            type="text"
            id="weight"
            name="weight"
            value={data.weight}
            onChange={updateData}
          />
          {errors.weight && <p className="error">{errors.weight}</p>}
        </div>
      </div>
    </div>
  );
}

export default Book;
