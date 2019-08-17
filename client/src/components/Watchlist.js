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
    fetch('/watchlist', {
      method: 'get',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
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
              <h5>{item.title}</h5>
              <h6>{item.description}</h6>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Watchlist;
