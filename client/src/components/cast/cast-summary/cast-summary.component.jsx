import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CastSummary extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className='col-md-1 p-3 text-warning' key={item.id}>
        <div>{item.name}</div>
        <div>{item.job}</div>

        <div>
          <Link to={`/persons/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt='Card cap'
              className='img-fluid rounded'
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default CastSummary;
