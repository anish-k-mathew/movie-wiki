import React, { Component } from 'react';
import MovieCard from './../movie-card/movie-card.component';

const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

class MovieCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieCredits: [],
      personId: this.props.personId
    };
    this.setSearchMovies = this.setSearchMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  setSearchMovies(movieCredits) {
    this.setState({ movieCredits: movieCredits });
    if (movieCredits === null) {
      this.setState({ movieCredits: null });
    }
  }

  searchMovies = async personId => {
    const response = await moviedb.personMovieCredits({ id: personId });

    this.setState({ movieCredits: response.cast });
    console.log(response.cast);
  };
  componentDidMount() {
    const { personId } = this.state;
    this.setState({ personId });
    this.searchMovies(personId);
  }

  render() {
    const { movieCredits } = this.state;

    return (
      <div className='row m-5'>
        {movieCredits &&
          movieCredits.map(item => <MovieCard key={item.id} item={item} />)}
      </div>
    );
  }
}

export default MovieCredit;
