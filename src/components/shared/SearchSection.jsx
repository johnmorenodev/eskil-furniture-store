import React from 'react';
import Overlay from '../UI/Overlay';

import { HiOutlineSearch, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './SearchSection.css';

const SearchSection = ({ onClick }) => {
  return (
    <div className='search__wrapper'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: 'easeInOut', duration: 0.4 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
      >
        <Overlay onClick={onClick} />
      </motion.div>

      <motion.div
        initial={{ y: -450 }}
        animate={{ y: 0, transition: { ease: 'easeInOut', duration: 0.4 } }}
        exit={{ y: -450, transition: { ease: 'easeInOut', duration: 0.4 } }}
        className='search'
      >
        <HiX className='search__close-icon' onClick={onClick} size={30} />
        <div className='search__container'>
          <div className='search__input-container'>
            <input type='text' placeholder='Search' className='search__input' />
            <HiOutlineSearch size={35} className='search__icon' />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchSection;
