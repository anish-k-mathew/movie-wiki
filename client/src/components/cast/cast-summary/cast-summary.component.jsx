import React, { Component } from 'react';

class CastSummary extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className='row'>
        <div className='col-md-2 p-3 text-warning' key={item.id}>
          <div>{item.character}</div>
          <div>{item.name}</div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              className='img-fluid rounded'
              alt='Card cap'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CastSummary;
