import React, { Component } from "react";
import axios from "axios";

class WatchHistory extends Component {
  constructor() {
    super();
    this.state = {
      watchhistory: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/history")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          watchhistory: result
        });
      });
  }

  onRemoveFromHistory = id => {
    axios.delete(`/deleteHistory/${id}`).then(res => {
      console.log("deleted fool");
      this.componentDidMount()
    });
  };

  render() {
    const { watchhistory, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className="card-deck">
          <div className="card">
            {watchhistory &&
              watchhistory.map(item => (
                <div classname="card-body" key={item.id}>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-light"
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
export default WatchHistory;
