import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import MovieList from "./components/movie/movie-list/movie-list.component";
import MovieDetail from "./components/movie/movie-detail/movie-detail.component.jsx";

import Watchlist from "./components/Watchlist";
import WatchHistory from "./components/WatchHistory";
import CastList from "./components/cast/cast-list/cast-list.component.jsx";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MovieCredit from "./components/movie/movie-credit/movie-credit.component.jsx";


const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MovieList} />
        <Route exact path="/movies/:movieId" component={MovieDetail} />

        <Route exact path="/watch" component={Watchlist} />
        <Route exact path="/watchhistory" component={WatchHistory} />
        <Route exact path="/cast" component={CastList} />
        <Route exact path="/persons/:personId" component={MovieCredit} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
