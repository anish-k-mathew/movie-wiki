import React, { Component } from 'react';
import { connect } from 'react-redux';
const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb(process.env.REACT_APP_MOVIE_DB_API_KEY);

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: '',
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
  onSeenMovie = movieDetail => {
    fetch('/api/movie', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contentId: movieDetail.id,
        title: movieDetail.title,
        description: movieDetail.overview,
        email: this.props.currentUser.email,
        contentType: 'Movie'
      })
    });
  };

  onAddToList = movieDetail => {
    fetch('/api/watch', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contentId: movieDetail.id,
        title: movieDetail.title,
        description: movieDetail.overview,
        email: this.props.currentUser.email,
        contentType: 'Movie'
      })
    });
  };
  render() {
    const { movieDetail } = this.state;

    return (
      <React.Fragment>
        <div className='card'>
          <div className='card-body'>
            <img
              className='card-img-top'
              src={`https://image.tmdb.org/t/p/original${
                movieDetail.backdrop_path
              }`}
              alt='Card cap'
            />

            <h5 className='card-title'>{movieDetail.title}</h5>
            <p className='card-text'>{movieDetail.tagline}</p>
            <p className='card-text'>Overview: {movieDetail.overview}</p>
            <p className='card-text'>
              Release Date: {movieDetail.release_date}
            </p>
            <p className='card-text'>Budget: ${movieDetail.budget}</p>
            <p className='card-text'>Revenue: ${movieDetail.revenue}</p>
            <p className='card-text'>Released on {movieDetail.release_date}</p>
            <p>Runtime: {movieDetail.runtime} minutes</p>
            <img
              className='card-img-bottom'
              src={`https://image.tmdb.org/t/p/original${
                movieDetail.poster_path
              }`}
              alt='Card cap'
            />
          </div>

          <button
            className='btn btn-light btn-sm btn-block'
            onClick={() => this.onAddToList(this.state.movieDetail)}
          >
            Add to Watchlist
          </button>

          <button
            className='btn btn-danger btn-sm btn-block'
            onClick={() => this.onSeenMovie(this.state.movieDetail)}
          >
            Watched it
          </button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(MovieDetail);
