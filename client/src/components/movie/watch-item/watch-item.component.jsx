import React, { Component } from 'react';

class WatchItem extends Component {
  render() {
    const { id, name, profile_path } = this.props.item;
    return (
      <div>
        <div key={id}>
          <div>
            <h3>{name}</h3>
            <img
              className='card-img'
              src={`https://image.tmdb.org/t/p/500${profile_path}`}
              alt='Card cap'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchItem;
