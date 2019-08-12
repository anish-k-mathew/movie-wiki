import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./movie-list/movie-list.component";
import Movie from "./movie/movie.component";
import Watchlist from "./Watchlist";
import Seenlist from "./Seenlist";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

class App extends Component {
  state = {
    response: null
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:id" component={Movie} />
            <Route exact path="/watchlist" component={Watchlist} />
            <Route exact path="/seenlist" component={Seenlist} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
