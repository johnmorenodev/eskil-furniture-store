import React from 'react';

import './Button.css';

const Button = ({ className = '', id, type, children }) => {
  const classes = 'shared__button ' + className;
  return <button className={classes}>{children}</button>;
};

export default Button;
