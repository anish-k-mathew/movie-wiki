import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import WatchItem from '../watch-item/watch-item.component';
class Watchlist extends Component {
  constructor() {
    super();
    this.state = {
      watchlist: [],
      isLoaded: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      fetch(`api/list/${this.props.currentUser.email}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            watchlist: result
          });
        });
    }
  }

  onRemoveFromList = id => {
    axios.delete(`api/list/${id}`).then(res => {
      this.componentDidUpdate(this.props.currentUser);
    });
  };

  render() {
    const { watchlist, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className='card-deck'>
          <div className='card'>
            {watchlist &&
              watchlist.map(item => <WatchItem key={item.id} item={item} />)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Watchlist);
