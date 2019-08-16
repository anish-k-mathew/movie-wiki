import React, { Component } from "react";

class MovieSearch extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;

    return (
      <div className="input-group bg-light">
        <form
          className="form-group col justify-content-center"
          onSubmit={onSubmit}
        >
          <input
            className="form-control my-4"
            type="text"
            placeholder="Enter Movie name here"
            aria-label="Search"
            value={value}
            onChange={onChange}
          />

          <button type="submit" className="btn btn-danger mb-3">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default MovieSearch;
