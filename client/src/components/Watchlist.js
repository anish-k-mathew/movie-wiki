import React, { Component } from 'react';

class Watchlist extends Component {

  constructor() {
    super();
    this.state = {
      watchlist : [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('/watchlist')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          watchlist: result
        });
      });
  }

  render() {
    const { watchlist, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className="card-deck">
          {watchlist.map(item => (
            <div key={item.id}>
              <h5 className="card-title">{item.title}</h5>
              <h6>{item.description}</h6>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Watchlist;
