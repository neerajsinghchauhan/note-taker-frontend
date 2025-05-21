const Filter = ({ handleFilterText }) => {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <select
            className="form-select form-select-lg"
            aria-label="Filter notes"
            onChange={(e) => handleFilterText(e.target.value)}
          >
            <option value="">ALL Notes</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
