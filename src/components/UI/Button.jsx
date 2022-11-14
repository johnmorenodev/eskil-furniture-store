import React from 'react';

import './Button.css';

const Button = ({ className = '', id, type, children, onClick }) => {
  const classes = 'shared__button ' + className;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
