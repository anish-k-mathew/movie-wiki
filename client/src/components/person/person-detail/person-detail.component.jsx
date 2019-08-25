import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCredit from './../../movie/movie-credit/movie-credit.component';
import './person-detail.styles.scss';

const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb('f7b5dc7f802e943f335a3f26722ddfc4');

class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personDetail: '',
      personId: props.match.params.personId
    };
  }

  getPersonDetail = async personId => {
    const response = await moviedb.personInfo({ id: personId });
    this.setState({ personDetail: response });
    console.log(response);
  };
  componentDidMount() {
    const { personId } = this.state;
    this.setState({ personId });
    this.getPersonDetail(personId);
  }

  render() {
    const { personDetail } = this.state;
    console.log(personDetail);
    let imageUrl = `https://image.tmdb.org/t/p/original${
      personDetail.profile_path
    }`;

    return (
      <div className='card bg-dark'>
        <div className='card-img-top'>
          <img src={imageUrl} alt='Card mod' />
        </div>
        <div className='.d-sm-none .d-md-block'>
          <p className='h2 text-warning'>{personDetail.name}</p>
          <p className='d-none d-lg-block d-print-block text-white'>
            {personDetail.birthday}
          </p>
          <p className='d-none d-lg-block d-print-block text-white'>
            {personDetail.biography}
          </p>
        </div>
        <div className='movie-credit-section'>
          <p className='h3 d-none d-lg-block d-print-block text-warning'>
            Movies
          </p>
          <MovieCredit personId={this.state.personId} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(PersonDetail);
