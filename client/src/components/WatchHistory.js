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
    });
  };

  render() {
    const { watchhistory, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <React.Fragment>
          <div>
            <div className="card-deck">
              {watchhistory &&
                watchhistory.map(item => (
                  <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.onRemoveFromHistory(item.id)}
                    >
                      Remove from watchlist
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default WatchHistory;
