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
      <div key={id}>
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt='Card cap'
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(MovieCard);
