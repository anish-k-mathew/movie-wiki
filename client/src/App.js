import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import MovieList from './components/movie/movie-list/movie-list.component';
import MovieDetail from './components/movie/movie-detail/movie-detail.component.jsx';
import About from './pages/about/about.component';
import Watchlist from './components/movie/watch-list/watch-list.component';
import WatchHistory from './components/movie/watch-history/watch-history.component';
import CastList from './components/cast/cast-list/cast-list.component.jsx';
import MovieDiscover from './components/movie/movie-discover/movie-discover.component.jsx';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component.jsx';
import PersonDetail from './components/person/person-detail/person-detail.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/movies' component={MovieList} />
          <Route exact path='/movies/:movieId' component={MovieDetail} />
          <Route exact path='/discover' component={MovieDiscover} />

          <Route exact path='/homepage/:language' component={HomePage} />
          <Route exact path='/watch' component={Watchlist} />
          <Route exact path='/watchhistory' component={WatchHistory} />
          <Route exact path='/cast' component={CastList} />
          <Route exact path='/persons/:personId' component={PersonDetail} />
          <Route exact path='/about' component={About} />

          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
