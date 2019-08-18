import React, { Component } from "react";
import "./movie.style.css";

class Movie extends Component {
  state = {};

  onSeenMovie = item => {
    fetch("/movie", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentId: item.id,
        title: item.title,
        description: item.overview,
        email: "mathew.anishk@gmail.com",
        contentType: "Movie"
      })
    });
  };

  onAddToList = item => {
    fetch("/watch", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentId: item.id,
        title: item.title,
        description: item.overview,
        email: "mathew.anishk@gmail.com",
        contentType: "Movie"
      })
    });
  };

  render() {
    const { id, poster_path } = this.props.item;
    return (
      <div className="card" key={id}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>
          <p className="card-text">{this.props.item.overview}</p>
          <div className="d-flex flex-wrap">
          <button
              className="btn btn-warning"
              onClick={() => this.onAddToList(this.props.item)}
            >
              Add to Watchlist
            </button>

            <button
              className="btn btn-danger"
              onClick={() => this.onSeenMovie(this.props.item)}
            >
              Already Watched
            </button>
          </div>
            
          </div>
          <div>
            
          </div>
        </div>
    );
  }
}

export default Movie;
