import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CastCard extends Component {
  render() {
    const { id, profile_path } = this.props.filteredItem;
    return (
      <div className='col-lg-2 p-3 text-warning' key={id}>
        <Link to={`persons/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            className='img-fluid rounded'
            alt='Card cap'
          />
        </Link>
      </div>
    );
  }
}

export default CastCard;
