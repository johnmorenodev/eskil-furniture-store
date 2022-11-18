import { useState } from 'react';

import './QuantityButton.css';

const QuantityButton = ({
  className = '',
  quantity = 1,
  incrementHandler,
  decrementHandler,
}) => {
  const classNames = className;

  return (
    <div className={classNames + ' quantity__button'}>
      <button className='button__decrement' onClick={decrementHandler}>
        –
      </button>
      <p>{quantity}</p>
      <button className='button__increment' onClick={incrementHandler}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
