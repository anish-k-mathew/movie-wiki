import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './movie-card.style.scss';

class MovieCard extends Component {
  onSeenMovie = item => {
    fetch('/api/movie', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contentId: item.id,
        title: item.title,
        description: item.overview,
        email: this.props.currentUser.email,
        contentType: 'Movie'
      })
    });
  };

  onAddToList = item => {
    fetch('/api/watch', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contentId: item.id,
        title: item.title,
        description: item.overview,
        email: this.props.currentUser.email,
        contentType: 'Movie'
      })
    });
  };

  onMovieDetail = item => {
    fetch('/api/watch', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contentId: item.id,
        title: item.title,
        description: item.overview,
        email: this.props.currentUser.email,
        contentType: 'Movie'
      })
    });
  };

  render() {
    const { id, poster_path } = this.props.item;
    return (
      <div className='card' key={id}>
        <img
          className='card-img-top'
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt='Card cap'
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{this.props.item.title}</h5>
          <p className='card-text'>{this.props.item.overview}</p>
          <p className='card-text'>
            <small className='text-muted'>
              Released on {this.props.item.release_date}
            </small>
          </p>

          <button
            className='btn btn-light btn-sm btn-block'
            onClick={() => this.onAddToList(this.props.item)}
          >
            Add to Watchlist
          </button>

          <button
            className='btn btn-danger btn-sm btn-block'
            onClick={() => this.onSeenMovie(this.props.item)}
          >
            Watched it
          </button>

          <button className='btn btn-danger btn-sm btn-block'>
            <Link to={`/movies/${id}`}>View More</Link>
          </button>
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(MovieCard);
