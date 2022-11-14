import React from 'react';

import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { motion } from 'framer-motion';

import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 100 }) => {
  return (
    <div className='loading'>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      >
        <CgSpinnerTwoAlt size={size} />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
