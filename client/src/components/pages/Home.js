import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-light text-center">
        <h1 className="display-4  text-danger">MovieWiki</h1>

        <p className="display-6  text-success">
          A place where you can search for any movie ever produced and build your watchlist, provide ratings & reviews, suggest movies to friends, etc.
        </p>
        <hr />
        <p className="text-warning">
          App is still being worked on.
        </p>
      </div>
    );
  }
}

export default Home;
