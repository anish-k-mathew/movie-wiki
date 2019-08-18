import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Movies from "./movie-list/movie-list.component";
import Movie from "./movie/movie.component";
import Watchlist from "./Watchlist";
import Seenlist from "./Seenlist";
import Castlist from "./cast-list/cast-list.component";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MovieCredit from "./movie-credit/movie-credit.component";

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:id" component={Movie} />
        <Route exact path="/watch" component={Watchlist} />
        <Route exact path="/seen" component={Seenlist} />
        <Route exact path="/cast" component={Castlist} />
        <Route exact path="/persons/:personId" component={MovieCredit} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
