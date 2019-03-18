import React, { Component } from "react";

import MovieSearch from "./MovieSearch";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: ""
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

  searchMovies(searchTerm) {
    fetch("/searchMovie/" + searchTerm)
      .then(res => res.json())
      .then(result => {
        this.setSearchMovies(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    this.searchMovies(searchTerm);
  }

  onHandleClick(event) {
    this.setState({ searchTerm: event.target.value });
    this.searchMovies(event.target.value);
  }

  render() {
    const { searchTerm, result } = this.state;
    return (
      <React.Fragment>
        <MovieSearch
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        <div className="card-deck">
          <div className="row">
            {result && result.map(item => <Movie key={item.id} item={item} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
