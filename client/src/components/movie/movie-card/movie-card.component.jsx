import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./movie-card.style.scss";

class MovieCard extends Component {
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

  onMovieDetail = item => {
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
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.item.title}</h5>
          <p className="card-text">{this.props.item.overview}</p>
          <p class="card-text">
            <small class="text-muted">
              Released on {this.props.item.release_date}
            </small>
          </p>

          <button
            className="btn btn-light btn-sm btn-block"
            onClick={() => this.onAddToList(this.props.item)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn btn-danger btn-sm btn-block"
            onClick={() => this.onSeenMovie(this.props.item)}
          >
            Watched it
          </button>

          <button className="btn btn-danger btn-sm btn-block">
            <Link to={`/movies/${id}`}>View More</Link>
          </button>
        </div>
        <div />
      </div>
    );
  }
}

export default MovieCard;
