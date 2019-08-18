import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
          <button className="btn btn-danger align-self-end btn-sm btn-block"
          >
          <Link to={`persons/${id}`}>View Movies for this Person</Link>

          </button>

        </div>
      </div>
      );
    }
}

export default Cast;
