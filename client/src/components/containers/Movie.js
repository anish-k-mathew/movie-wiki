import React, { Component } from "react";

class Movie extends Component {
  state = {};

  render() {
    const { id, title, overview, poster_path, release_date } = this.props.item;
    console.log(this.props.item);
    return (
      <div class="col-3">
        <div className="card" key={id}>
          <img
            className="card-img-top img-fluid"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{overview}</p>
            <p className="card-text">
              <small className="text-muted">{release_date}</small>
            </p>
            <button className="btn btn-danger text-center mr-3" href="/movies">
              Seen this movie
            </button>
            <button className="btn btn-danger text-center" href="/movies">
              Add to watchlist
            </button>
            <button className="btn btn-danger text-center" href="/movies">
              Details
            </button>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
