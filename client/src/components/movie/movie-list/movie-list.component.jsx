import React, { Component } from 'react';
import ComponentSearch from './../../common/component-search/component-search.component';
import MovieCard from './../movie-card/movie-card.component';

const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('process.env.REACT_APP_MOVIE_DB_API_KEY');

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchTerm: ''
    };
    this.setSearchMovies = this.setSearchMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    this.searchMovies(searchTerm);
    event.preventDefault();
  }
  setSearchMovies(result) {
    this.setState({ result: result });
    if (result === null) {
      this.setState({ result: null });
    }
  }

  searchMovies = async searchTerm => {
    const response = await moviedb.searchMovie({ query: searchTerm });
    this.setState({ result: response.results });
  };

  onHandleClick(event) {
    this.setState({ searchTerm: event.target.value });
    this.searchMovies(event.target.value);
  }

  render() {
    const { searchTerm, result } = this.state;
    return (
      <React.Fragment>
        <ComponentSearch
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          placeholder='Search Movies by Movie Name'
        />
        <div className='card-deck'>
          {result &&
            result.map(item => <MovieCard key={item.id} item={item} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;
