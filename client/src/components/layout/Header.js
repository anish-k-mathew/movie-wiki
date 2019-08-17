import React, { Component } from "react";
class Header extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/home">
            MovieWiki
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link " href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Movie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cast">
                  Cast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/watch">
                Watch List
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/seen">
                Watched List
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
