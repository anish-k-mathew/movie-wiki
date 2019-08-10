import React, { Component } from "react";

class MovieSearch extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;

    return (
      <div class="input-group bg-light">
        <form
          className="form-group col justify-content-center"
          onSubmit={onSubmit}
        >
          <input
            className="form-control my-4"
            type="text"
            placeholder="Enter Movie or Show name here"
            aria-label="Search"
            value={value}
            onChange={onChange}
          />
          <div className="form-row mb-5">
            <div className="form-group text-danger mr-auto ">
              <label for="exampleFormControlSelect2">Search For </label>
              <select className="form-control selectpicker">
                <option selected value="1">
                  Movie
                </option>
                <option value="2">Show</option>
                <option value="3">Cast</option>
              </select>
            </div>

            <div className="form-group text-danger mr-auto">
              <label for="exampleFormControlSelect2">Language</label>
              <select
                multiple
                className="form-control selectpicker"
                data-actions-box="true"
                id="exampleFormControlSelect2"
              >
                <option selected>English</option>
                <option selected>Hindi</option>
                <option selected>Malayalam</option>
                <option selected>Tamil</option>
              </select>
            </div>
            <div className="form-group text-danger mr-auto  ">
              <label for="exampleFormControlSelect2">Year</label>
              <select
                className="form-control selectpicker"
                multiple
                data-actions-box="true"
                id="exampleFormControlSelect2"
              >
                <option selected>All</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </select>
            </div>
            <div className="form-group text-danger  ">
              <label for="exampleFormControlSelect2">Genre</label>
              <select
                multiple
                className="form-control selectpicker"
                id="exampleFormControlSelect2"
              >
                <option selected>All</option>
                <option>Action</option>
                <option>Comedy</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-danger btn-block mb-3">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default MovieSearch;
