import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import MovieList from "./movie/movie-list/movie-list.component";
import Watchlist from "./Watchlist";
import WatchHistory from "./WatchHistory";
import CastList from "./cast/cast-list/cast-list.component.jsx";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MovieCredit from "./movie/movie-credit/movie-credit.component.jsx";

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MovieList} />
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
