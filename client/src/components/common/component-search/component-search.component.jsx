import React from "react";

const ComponentSearch = ({ value, onChange, onSubmit, placeholder }) => (

  <div className="input-group">
  <form
    className="form-group col justify-content-center"
    onSubmit={onSubmit}
  >
    <input
      type="text"
      className="form-control my-3"
      placeholder={placeholder}
      aria-label="Search"
      value={value}
      onChange={onChange}
    />

    <button type="submit" className="btn btn-dark mb-4 text-center align-content-stretch">
      Search
    </button>
  </form>
</div>

)


export default ComponentSearch;
