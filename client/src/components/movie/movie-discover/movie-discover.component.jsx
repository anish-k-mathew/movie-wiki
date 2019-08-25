import React from 'react';
import MovieCard from './../movie-card/movie-card.component';

const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

class MovieDiscover extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      year: '',
      language: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('in handleChange');

    const name = e.target.name;

    this.setState({ [name]: e.target.value });
    e.preventDefault();
  }

  handleSubmit(e) {
    console.log('in handleSubmit');

    this.componentDidMount();
    e.preventDefault();
  }

  searchMovies = async searchTerm => {
    console.log('before search');
    const response = await moviedb.discoverMovie({
      sort_by: 'popularity.desc',
      primary_release_year: this.state.year,
      with_original_language: this.state.language
    });
    this.setState({ result: response.results });
  };

  componentDidMount() {
    this.searchMovies();
  }

  render() {
    const { searchTerm, result } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='text-white'>Year</label>
          <select
            name='year'
            value={this.state.year}
            onChange={this.handleChange}
          >
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
            <option value='2015'>2015</option>
            <option value='2014'>2014</option>
            <option value='2013'>2013</option>
            <option value='2012'>2012</option>
            <option value='2011'>2011</option>
            <option value='2010'>2010</option>
          </select>
          <label className='text-white'>Language</label>
          <select
            name='language'
            value={this.state.language}
            onChange={this.handleChange}
          >
            <option value='en'>English</option>
            <option value='hi'>Hindi</option>
            <option value='ml'>Malayalam</option>
            <option value='tm'>Tamil</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
        <div className='row'>
          {result &&
            result.map(item => <MovieCard key={item.id} item={item} />)}
        </div>
      </div>
    );
  }
}

export default MovieDiscover;
