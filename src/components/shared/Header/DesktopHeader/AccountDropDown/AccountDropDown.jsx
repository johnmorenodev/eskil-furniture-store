import { useContext, useState } from 'react';

import './AccountDropDown.css';

import { Link } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { AuthContext } from '../../../../../context/authContext';

const AccountDropDown = ({ isDropDownOpen }) => {
  const { user, dispatch } = useContext(AuthContext);

  const logOutHandler = () => {
    dispatch({ type: 'LOG_OUT' });
  };

  return (
    <div className='dropdown'>
      <div className='dropdown__account'>
        <HiOutlineUser />
        <p>Account</p>
      </div>
      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            className='dropdown__list'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { height: 'auto', overflow: 'none' },
              collapsed: { height: 0, overflow: 'hidden' },
            }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            {user && <Link to={'/my-account'}>My Account</Link>}
            {user && <Link onClick={logOutHandler}>Log Out</Link>}
            {!user && <Link to={'/my-account/log-in'}>Log In</Link>}
            {!user && (
              <Link to={'/my-account/create-account'}>Create Account</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccountDropDown;
