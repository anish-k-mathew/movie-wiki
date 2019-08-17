import React, { Component } from 'react';

class Seenlist extends Component {

  constructor() {
    super();
    this.state = {
      seenlist : [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('/seenlist', {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          seenlist: result
        });
      });
  }

  render() {
    const { seenlist, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <ul>
          {seenlist.map(item => (
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

export default Seenlist;
