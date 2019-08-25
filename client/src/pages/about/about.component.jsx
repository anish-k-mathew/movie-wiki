import React from 'react';
import './about.styles.scss';
const About = () => (
  <React.Fragment>
    <div className='about-section-heading'>
      <div>Anish Mathew</div>
      <ul>
        <li>email - mathew.anishk@gmail.com</li>
        <li>
          Portfolio Site -
          <a href='http://www.anishkmathew.com'> www.anishkmathew.com</a>
        </li>
      </ul>
    </div>
    <hr />
    <div className='about-section-heading-tech'>
      <div>Tech Stack</div>
      <ul>
        <li>UI - React.js</li>
        <li>Backend - Node.js</li>
        <li>DB - Postgres</li>
        <li>Authentication - Firebase</li>
        <li>Environment - Heroku</li>
        <li>API Support - TheMovieDB</li>
      </ul>
    </div>
  </React.Fragment>
);

export default About;
