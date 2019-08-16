import React, { Component } from "react";
import Movie from "./../movie/movie.component";
const MovieDb = require("moviedb-promise");

const keys = require("./../../config/keys");

const moviedb = new MovieDb(keys.movieDBApiKey);


class MovieCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  searchMovies = async searchTerm => {
    const response = await moviedb.personMovieCredits({ id: 82732 });
    this.setState({ result: response.results });
  };

  render() {
    const { result } = this.state;
    this.searchMovies();
    return (
      <React.Fragment>
        
        <div className="card-deck">
          <div className="row">
            {result && result.map(item => <Movie key={item.id} item={item} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCredit;
