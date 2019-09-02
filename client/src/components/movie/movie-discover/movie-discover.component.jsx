import React from 'react';
import MovieCard from './../movie-card/movie-card.component';
import './movie-discover.styles.scss';
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
    const { result } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='movie-discover-form bg-dark'
        >
          <div className='p-2'>
            <h4 className='text-warning text-center'>Browse Movies</h4>
            <div>
              <label className='text-warning'>Year</label>
              <select
                name='year'
                value={this.state.year}
                onChange={this.handleChange}
                className='form-control'
              >
                <option value='' selected disabled hidden>
                  Choose here
                </option>
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
                <option value='2009'>2009</option>
                <option value='2008'>2008</option>
                <option value='2007'>2007</option>
                <option value='2006'>2006</option>
                <option value='2005'>2005</option>
                <option value='2004'>2004</option>
                <option value='2003'>2003</option>
                <option value='2002'>2002</option>
                <option value='2001'>2001</option>
                <option value='2000'>2000</option>
                <option value='1999'>1999</option>
                <option value='1998'>1998</option>
                <option value='1997'>1997</option>
                <option value='1996'>1996</option>
                <option value='1995'>1995</option>
                <option value='1994'>1994</option>
                <option value='1993'>1993</option>
                <option value='1992'>1992</option>
                <option value='1991'>1991</option>
                <option value='1990'>1990</option>
                <option value='1989'>1989</option>
                <option value='1988'>1988</option>
                <option value='1987'>1987</option>
                <option value='1986'>1986</option>
                <option value='1985'>1985</option>
                <option value='1984'>1984</option>
                <option value='1983'>1983</option>
              </select>
            </div>
            <label className='text-warning'>Language</label>
            <select
              name='language'
              value={this.state.language}
              onChange={this.handleChange}
              className='form-control'
            >
              <option value='' selected disabled hidden>
                Choose here
              </option>
              <option value='en'>English</option>
              <option value='hi'>Hindi</option>
              <option value='ml'>Malayalam</option>
              <option value='ta'>Tamil</option>
              <option value='te'>Telugu</option>
            </select>
          </div>
          <div class='d-flex justify-content-center'>
            <input
              type='submit'
              value='Find Movies'
              className='btn btn-danger btn-sm btn-block'
            />
          </div>
        </form>

        <div className='container'>
          <div className='row'>
            {result &&
              result.map(item => <MovieCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDiscover;
