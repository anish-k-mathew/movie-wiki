import React, { Component } from 'react';
import MovieCard from './../movie-card/movie-card.component';

const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb(process.env.REACT_APP_MOVIE_DB_API);

class MovieCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      searchTerm: props.match.params.personId
    };
    this.setSearchMovies = this.setSearchMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  setSearchMovies(cast) {
    this.setState({ cast: cast });
    if (cast === null) {
      this.setState({ cast: null });
    }
  }

  searchMovies = async searchTerm => {
    const response = await moviedb.personMovieCredits({ id: searchTerm });

    this.setState({ cast: response.cast });
    console.log(response.cast);
  };
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    this.searchMovies(searchTerm);
  }

  render() {
    const { cast } = this.state;

    return (
      <React.Fragment>
        <div>
          <div className='card-deck'>
            {cast && cast.map(item => <MovieCard key={item.id} item={item} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCredit;
