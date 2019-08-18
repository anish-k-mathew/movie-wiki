import React, { Component } from "react";

const MovieDb = require("moviedb-promise");

const moviedb = new MovieDb("f7b5dc7f802e943f335a3f26722ddfc4");

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: "",
      movieId: props.match.params.movieId
    };
    this.getMovieDetail = this.getMovieDetail.bind(this);
  }

  getMovieDetail = async movieId => {
    const response = await moviedb.movieInfo({ id: movieId });
    this.setState({ movieDetail: response });
    console.log(response);
  };
  componentDidMount() {
    const { movieId } = this.state;
    this.setState({ movieId });
    this.getMovieDetail(movieId);
  }

  render() {
    const { movieDetail } = this.state;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail.backdrop_path
              }`}
              alt="Card cap"
            />

            <h5 className="card-title">{movieDetail.title}</h5>
            <p className="card-text">{movieDetail.tagline}</p>
            <p className="card-text">Overview: {movieDetail.overview}</p>
            <p className="card-text">
              Release Date: {movieDetail.release_date}
            </p>
            <p className="card-text">Budget: ${movieDetail.budget}</p>
            <p className="card-text">Revenue: ${movieDetail.revenue}</p>
            <p class="card-text">Released on {movieDetail.release_date}</p>
            <p>Runtime: {movieDetail.runtime} minutes</p>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail.poster_path
              }`}
              alt="Card cap"
            />
          </div>

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
        </div>
      </React.Fragment>
    );
  }
}

export default MovieDetail;
