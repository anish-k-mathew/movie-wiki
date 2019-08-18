import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Cast extends Component {

  render() {
    const { id, name, profile_path} = this.props.item;
    return (
      <div>
        <div key={id}>
        <h3>{name}</h3>
     
          <img
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
