import React, { Component } from "react";

class Movie extends Component {
  state = {};

  onSeenMovie = item => {
    fetch("localhost:5070/movie", {
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
    fetch("localhost:5070/watch", {
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
      <div className="col-3">
        <div className="card" key={id}>
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="Card cap"
          />
          <button
            className="btn btn-warning"
            onClick={() => this.onAddToList(this.props.item)}
          >
            Add to Watchlist
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.onSeenMovie(this.props.item)}
          >
            Watched
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.onSeenMovie(this.props.item)}
          >
            See More
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
