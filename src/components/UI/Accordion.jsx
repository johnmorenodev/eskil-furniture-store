import { useState } from 'react';

import './Accordion.css';

import { BiPlus, BiMinus } from 'react-icons/bi';

const Accordion = ({ text, children, onClickHander, isOpen }) => {
  return (
    <div className='accordion'>
      <div className='accordion__title' onClick={onClickHander}>
        <h2>{text}</h2>
        {isOpen ? <BiMinus /> : <BiPlus />}
      </div>
      {children}
    </div>
  );
};

export default Accordion;
