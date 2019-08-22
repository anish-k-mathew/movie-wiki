import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class Watchlist extends Component {
  constructor() {
    super();
    this.state = {
      watchlist: [],
      isLoaded: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser) {
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
  }

  onRemoveFromList = id => {
    axios.delete(`api/list/${id}`).then(res => {
      this.componentDidUpdate(this.props.currentUser);
    });
  };
  render() {
    const { watchlist } = this.state;
    if (this.props.currentUser === null) {
      return <div>Please sign in... </div>;
    } else {
      return (
        <div className='card-deck'>
          {watchlist &&
            watchlist.map(item => (
              <div className='card' key={item.id}>
                <div className='card-body'>
                  <p className='card-title'>{item.title}</p>
                  <button
                    className='btn btn-light'
                    onClick={() => this.onRemoveFromList(item.id)}
                  >
                    Remove from watch list
                  </button>
                </div>
              </div>
            ))}
        </div>
      );
    }
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Watchlist);
