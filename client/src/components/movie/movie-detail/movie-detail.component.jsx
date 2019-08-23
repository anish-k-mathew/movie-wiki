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
    console.log(movieDetail);
    let imageUrl = `https://image.tmdb.org/t/p/original${
      movieDetail.backdrop_path
    }`;

    console.log('backdrop is sssss');
    console.log(movieDetail.backdrop_path);
    if (!movieDetail.backdrop_path) {
      imageUrl = `https://image.tmdb.org/t/p/original${
        movieDetail.poster_path
      }`;
    }
    let year = '';
    if (movieDetail.release_date) {
      year = movieDetail.release_date.substr(0, 4);
    }

    return (
      <div className='card bg-dark'>
        <img className='card-img img-fluid' src={imageUrl} alt='Card mod' />
        <div className='card-img-overlay  col-md-5'>
          <div className='card-sd .d-sm-none .d-md-block'>
            <p className='h3 text-warning'>
              {movieDetail.title} - {year}
            </p>
            <p>{movieDetail.tagline}</p>
            <p className='d-none d-lg-block d-print-block'>
              {movieDetail.overview}
            </p>
            <p>Release Date: {movieDetail.release_date}</p>

            <NumberFormat
              value={movieDetail.budget}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Budget: $'}
            />
            <br />

            <NumberFormat
              value={movieDetail.revenue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Revenue: $'}
            />
            <p>Runtime: {movieDetail.runtime} minutes</p>
          </div>

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
