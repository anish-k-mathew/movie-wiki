import React, { Component } from "react";
import CastSearch from "./../cast-search/cast-search.component";
import Cast from "./../cast/cast.component";

const MovieDb = require("moviedb-promise");

const keys = require("./../../config/keys");

const moviedb = new MovieDb(keys.movieDBApiKey);

class Castlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchTerm: ""
    };
    this.setSearchCast = this.setSearchCast.bind(this);
    this.searchCast = this.searchCast.bind(this);
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
    this.searchCast(searchTerm);
    event.preventDefault();
  }
  setSearchCast(result) {
    this.setState({ result: result });
    if (result === null) {
      this.setState({ result: null });
    }
  }

  searchCast = async searchTerm => {
    const response = await moviedb.searchPerson({ query: searchTerm });
    this.setState({ result: response.results });
  };
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    this.searchCast(searchTerm);
  }

  onHandleClick(event) {
    this.setState({ searchTerm: event.target.value });
    this.searchCast(event.target.value);
  }ar

  render() {
    const { searchTerm, result } = this.state;
    return (
      <React.Fragment>
        <CastSearch
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        <div className="card-deck">
          <div className="row">
            {result && result.map(item => <Cast key={item.id} item={item} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Castlist;