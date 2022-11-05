import React from 'react';

import './Input.css';

const Input = ({
  type,
  placeholder,
  name,
  id,
  className = '',
  required = false,
}) => {
  const classes = 'shared__input ' + className;
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || ''}
      name={name || ''}
      id={id || ''}
      className={classes}
      required={required}
    />
  );
};

export default Input;
