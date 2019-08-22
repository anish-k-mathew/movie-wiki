import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class WatchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchhistory: [],
      isLoaded: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentUser) {
      if (this.props.currentUser !== prevProps.currentUser) {
        fetch(`api/history/${this.props.currentUser.email}`)
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              watchhistory: result
            });
          });
      }
    }
  }

  onRemoveFromHistory = id => {
    axios.delete(`/api/history/${id}`).then(res => {
      this.componentDidUpdate(this.props.currentUser);
    });
  };

  render() {
    const { watchhistory } = this.state;
    if (this.props.currentUser === null) {
      return <div>Please sign in... </div>;
    } else {
      return (
        <div className='card-deck'>
          {watchhistory &&
            watchhistory.map(item => (
              <div className='card' key={item.id}>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <button
                    className='btn btn-light'
                    onClick={() => this.onRemoveFromHistory(item.id)}
                  >
                    Remove from watch history
                  </button>
                </div>
              </div>
            ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(WatchHistory);
