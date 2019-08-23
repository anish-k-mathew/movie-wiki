import React from 'react';
import TrendingMovieList from './../../components/movie/trending-movies/trending-movies.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div>
    <TrendingMovieList defaultLang={'en'} />
  </div>
);

export default HomePage;
