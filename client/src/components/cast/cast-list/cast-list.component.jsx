import React, { Component } from 'react';
import ComponentSearch from './../../common/component-search/component-search.component';
import CastCard from './../cast-card/cast-card.component';

const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

class CastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchTerm: ''
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

  onHandleClick(event) {
    this.setState({ searchTerm: event.target.value });
    this.searchCast(event.target.value);
  }
  ar;

  render() {
    const { searchTerm, result } = this.state;
    return (
      <div className='row m-5'>
        <ComponentSearch
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          placeholder='Search Movies by Cast'
        />
        <div className='row'>
          {result &&
            result
              .filter(
                item =>
                  item.known_for_department === 'Acting' &&
                  item.profile_path !== null
              )
              .map(filteredItem => (
                <CastCard key={filteredItem.id} filteredItem={filteredItem} />
              ))}
        </div>
      </div>
    );
  }
}

export default CastList;
