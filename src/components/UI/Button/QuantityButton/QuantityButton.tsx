import React, { MouseEvent } from 'react';

import './QuantityButton.css';

type QuantityButtonProps = {
  className: string;
  quantity: number;
  incrementHandler: (event: MouseEvent<HTMLElement>) => void;
  decrementHandler: (event: MouseEvent<HTMLElement>) => void;
};

const QuantityButton = ({
  className = '',
  quantity = 1,
  incrementHandler,
  decrementHandler,
}: QuantityButtonProps) => {
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
