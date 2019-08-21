import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WatchItem extends Component {
  render() {
    const { id, name, profile_path } = this.props.item;
    return (
      <div>
        <div key={id}>
          <div className='card-body'>
            <h3 className='card-text'>{name}</h3>
            <img
              className='card-img'
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt='Card cap'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchItem;
