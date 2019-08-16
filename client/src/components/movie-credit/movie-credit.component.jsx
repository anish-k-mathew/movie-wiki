import React, { Component } from "react";
import Movie from "./../movie/movie.component";

const MovieDb = require("moviedb-promise");

const keys = require("./../../config/keys");

const moviedb = new MovieDb(keys.movieDBApiKey);

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
        <div className="card-deck">
          <div className="row">
            {cast && cast.map(item => <Movie key={item.id} item={item} />)}
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCredit;