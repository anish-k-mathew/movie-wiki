import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './trending-movies.styles.scss';
import { withRouter } from 'react-router';

class TrendingMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(this.props);
    if (!match.params.language) {
      match.params.language = this.props.defaultLang;
    }
    let basePath =
      'https://api.themoviedb.org/3/discover/movie?api_key=f7b5dc7f802e943f335a3f26722ddfc4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&release_date.lte=2019-08-20&with_original_language=';
    console.log(match.params);

    fetch(`${basePath}${match.params.language}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ results: result.results });
      });
  }
  render() {
    return (
      <div className='row m-5'>
        {this.state.results.map(item => (
          <div className='col-lg-2 p-3' key={item.id}>
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
export default withRouter(TrendingMovieList);
