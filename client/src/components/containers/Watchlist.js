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
    fetch('http://127.0.0.1:5070/watchlist')
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
        <ul>
          {watchlist.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Watchlist;
