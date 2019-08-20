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

  componentDidMount() {
    console.log(this.props);
    fetch(`/watchlist`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          watchlist: result
        });
      });
  }

  onRemoveFromList = id => {
    axios.delete(`/deleteList/${id}`).then(res => {
      console.log('deleted fool');
      this.componentDidMount();
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
              watchlist.map(item => (
                <div className='card-body' key={item.id}>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.description}</p>

                  <button
                    className='btn btn-danger'
                    onClick={() => this.onRemoveFromList(item.id)}
                  >
                    Remove from watchlist
                  </button>
                </div>
              ))}
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
