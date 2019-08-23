import React, { Component } from 'react';
import { connect } from 'react-redux';
import './movie-detail.styles.scss';
import NumberFormat from 'react-number-format';

const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

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
    const imageUrl = `https://image.tmdb.org/t/p/original${
      movieDetail.backdrop_path
    }`;

    return (
      <div
        className='card bg-dark text-white'
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img className='card-img' src={imageUrl} alt='Card mod' />
        <div className='card-img-overlay col-3'>
          <p className='h3 text-warning'>{movieDetail.title}</p>
          <p>{movieDetail.tagline}</p>
          <p>{movieDetail.overview}</p>
          <p>Release Date: {movieDetail.release_date}</p>

          <NumberFormat
            value={movieDetail.budget}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Budget $'}
          />
          <br />

          <NumberFormat
            value={movieDetail.revenue}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Revenue $'}
          />

          <p>Runtime: {movieDetail.runtime} minutes</p>
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
