import React from 'react';

import './Input.css';

import { useFormContext } from 'react-hook-form';
import { forwardRef } from 'react';

const Input = ({ name, className = '', ...rest }, ref) => {
  const methods = useFormContext();
  const classes = 'shared__input ' + className;
  return <input className={classes} {...rest} />;
};
export default Input;
