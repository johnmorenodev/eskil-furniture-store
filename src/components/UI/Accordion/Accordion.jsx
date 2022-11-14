//REACT HOOKS
import { useState } from 'react';

//CSS
import './Accordion.css';

//THIRD PARTY
import { BiPlus, BiMinus } from 'react-icons/bi';

import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHander = () => {
    setIsOpen(prevValue => !prevValue);
  };
  return (
    <div className='accordion'>
      <div className='accordion__title' onClick={onClickHander}>
        <h2>{text}</h2>
        {isOpen ? <BiMinus /> : <BiPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { height: 'auto', overflow: 'none' },
              collapsed: { height: 0, overflow: 'hidden' },
            }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
