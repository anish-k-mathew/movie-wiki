import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./movie-list/movie-list.component";
import Movie from "./movie/movie.component";
import Watchlist from "./Watchlist";
import Seenlist from "./Seenlist";
import Castlist from "./cast-list/cast-list.component";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MovieCredit from "./movie-credit/movie-credit.component";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:id" component={Movie} />
            <Route exact path="/watchlist" component={Watchlist} />
            <Route exact path="/seenlist" component={Seenlist} />
            <Route exact path="/cast" component={Castlist} />
            <Route exact path="/persons/:personId" component={MovieCredit} />


          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
