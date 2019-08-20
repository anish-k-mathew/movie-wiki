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

  componentDidUpdate() {
    fetch(`/api/history/${this.props.currentUser.email}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          watchhistory: result
        });
      });
  }

  onRemoveFromHistory = id => {
    axios.delete(`/api/history/${id}`).then(res => {
      this.componentDidUpdate();
    });
  };

  render() {
    const { watchhistory, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className='card-deck'>
          <div className='card'>
            {watchhistory &&
              watchhistory.map(item => (
                <div className='card-body' key={item.id}>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.description}</p>
                  <button
                    className='btn btn-light'
                    onClick={() => this.onRemoveFromHistory(item.id)}
                  >
                    Remove from watch history
                  </button>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(WatchHistory);
