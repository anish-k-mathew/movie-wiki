import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrendingMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  trendingMovieURL =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=f7b5dc7f802e943f335a3f26722ddfc4';

  componentDidMount() {
    fetch(this.trendingMovieURL)
      .then(res => res.json())
      .then(result => {
        this.setState({ results: result.results });
      });
  }
  render() {
    return (
      <div className='row'>
        {this.state.results.map(item => (
          <div className='col-lg-2 p-1' key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt='Card cap'
                className='img-fluid rounded'
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default TrendingMovieList;
