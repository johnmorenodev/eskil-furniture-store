import React from 'react';

import './Container.css';

const Container = ({ children }) => {
  return <div className='products__container'>{children}</div>;
};

export default Container;
