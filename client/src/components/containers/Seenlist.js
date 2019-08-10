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
    fetch('http://127.0.0.1:5070/seenlist')
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
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Seenlist;
