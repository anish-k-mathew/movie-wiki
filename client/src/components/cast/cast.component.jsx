import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Cast extends Component {

  render() {
    const { id, name, profile_path, match} = this.props.item;
    return (
      <div className="col-3">
        <div className="card" key={id}>
        <h3>{name}</h3>
     
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt="Card cap"
          />
          <Link to={`persons/${id}`}>More Details </Link>

        </div>
      </div>
    );
  }
}

export default Cast;
