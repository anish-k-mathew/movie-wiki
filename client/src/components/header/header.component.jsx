import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <nav className='navbar navbar-expand-lg navbar-dark'>
    <a className='navbar-brand text-danger ' href='/homepage'>
      MovieWiki
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='/homepage'>
            In Theaters
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/movies'>
            Movie Search
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/cast'>
            Cast Search
          </a>
        </li>

        {currentUser ? (
          <li className='nav-item'>
            <a className='nav-link' href='/watch'>
              Watch List
            </a>
          </li>
        ) : null}
        {currentUser ? (
          <li className='nav-item'>
            <a className='nav-link' href='/watchhistory'>
              Watch History
            </a>
          </li>
        ) : null}

        {currentUser ? (
          <li className='nav-item'>
            <div className='nav-link' onClick={() => auth.signOut()}>
              Sign Out
            </div>
          </li>
        ) : (
          <a className='nav-link' href='/signin'>
            Sign in
          </a>
        )}
      </ul>
    </div>
  </nav>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
