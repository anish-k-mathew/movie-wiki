import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CastCard extends Component {
  render() {
    const { id, name, profile_path } = this.props.item;
    return (
      <div>
        <div key={id}>
          <div className='col-lg-2 p-2 text-warning'>
            {name}

            <Link to={`persons/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                className='img-fluid rounded'
                alt='Card cap'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CastCard;
