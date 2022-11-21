import React from 'react';

import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Page does not exist.</p>
      <Link to={'/'}>Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
