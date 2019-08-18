import React, { Component } from "react";
import Movie from "./movie/movie.component";

class Seenlist extends Component {
  constructor() {
    super();
    this.state = {
      seenlist: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/seenlist")
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
        <React.Fragment>
          <div>
            <div className="card-deck">
              {seenlist &&
                seenlist.map(item => <Movie key={item.ext_content_id} item={item} />)}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Seenlist;
