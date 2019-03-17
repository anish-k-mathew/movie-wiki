import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/containers/Movies";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
            <Route exact path="/movies" component={Movies} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
