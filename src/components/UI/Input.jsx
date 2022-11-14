import React from 'react';

import './Input.css';

const Input = ({ register, name, validation, className = '', ...rest }) => {
  const classes = 'shared__input ' + className;
  if (validation) {
    return <input {...register(name)} className={classes} {...rest} />;
  }
  return <input name={name} className={classes} {...rest} />;
};
export default Input;
