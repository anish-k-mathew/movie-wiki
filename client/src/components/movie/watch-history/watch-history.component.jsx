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
        <div className='row'>
          {watchhistory &&
            watchhistory.map(item => (
              <div className='col-lg-2 p-1 text-light' key={item.id}>
                <h5>{item.title}</h5>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => this.onRemoveFromHistory(item.id)}
                >
                  Remove from history
                </button>
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
