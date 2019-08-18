import React from "react";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <a className="navbar-brand" href="/homepage">
      MovieWiki
    </a>
    <button
    className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/movies">
            Movie Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cast">
            Cast Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/watch">
            Watchlist
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/seen">
            History
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
