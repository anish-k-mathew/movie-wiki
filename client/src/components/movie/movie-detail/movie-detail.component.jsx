import React, { Component } from 'react';
import { connect } from 'react-redux';
import './movie-detail.styles.scss';
const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: '',
      movieId: props.match.params.movieId,
      reviews: ''
    };
    this.getMovieDetail = this.getMovieDetail.bind(this);
  }

  getMovieDetail = async movieId => {
    const response = await moviedb.movieInfo({ id: movieId });
    this.setState({ movieDetail: response });
    console.log(response);

    const reviewResponse = await moviedb.movieReviews({ id: movieId });
    this.setState({ reviews: reviewResponse });
    console.log(reviewResponse);
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
    const imageUrl = `https://image.tmdb.org/t/p/original${
      movieDetail.backdrop_path
    }`;

    console.log(imageUrl);
    return (
      <div className='card bg-dark text-white'>
        <img class='card-img' src={imageUrl} alt='Card mod' />
        <div class='card-img-overlay col-3'>
          <p className='h3'>{movieDetail.title}</p>
          <p className='h6'>{movieDetail.tagline}</p>
          <p className='h6'>Overview: {movieDetail.overview}</p>
          <p className='h6'>Release Date: {movieDetail.release_date}</p>
          <p className='h6'>Budget: ${movieDetail.budget}</p>
          <p className='h6'>Revenue: ${movieDetail.revenue}</p>
          <p className='h6'>Released on {movieDetail.release_date}</p>
          <p className='h6'>Runtime: {movieDetail.runtime} minutes</p>
          <button
            className='btn btn-light btn-sm'
            onClick={() => this.onAddToList(this.state.movieDetail)}
          >
            Add to Watchlist
          </button>

          <button
            className='btn btn-danger btn-sm'
            onClick={() => this.onSeenMovie(this.state.movieDetail)}
          >
            Watched it
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(MovieDetail);
