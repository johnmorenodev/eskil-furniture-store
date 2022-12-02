import { useState } from 'react';

//REACT COMPONENTS
import Overlay from '../../../UI/Overlay/Overlay';
import AccountDropDown from '../DesktopHeader/AccountDropDown/AccountDropDown';

//CSS
import './SideHeader.css';

//THIRD PARTY
import {
  HiX,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SideHeader = ({ onClick, handleSidebarOnclick }) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const dropDownHandler = () => {
    setisDropDownOpen(prevValue => !prevValue);
  };

  return (
    <>
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

      <motion.nav
        initial={{ x: 320 }}
        animate={{ x: 0, transition: { ease: 'easeInOut', duration: 0.4 } }}
        exit={{ x: 320, transition: { duration: 0.2, ease: 'easeInOut' } }}
        className='sidebar'
      >
        <div className='sidebar__container'>
          <HiX className='sidebar__icon' size={20} onClick={onClick} />
          <div className='header__desktop'>
            <ul>
              <li>
                <HiOutlineSearch />
                <a href='#' onClick={handleSidebarOnclick}>
                  Search
                </a>
              </li>
              <li onClick={dropDownHandler}>
                <AccountDropDown
                  isDropDownOpen={isDropDownOpen}
                  handleSidebarOnclick={handleSidebarOnclick}
                />
              </li>
              <li>
                <HiOutlineHeart />
                <a href='#' onClick={handleSidebarOnclick}>
                  Wishlist
                </a>
              </li>
              <li>
                <HiOutlineShoppingBag />
                <Link to={'/my-account'} onClick={handleSidebarOnclick}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default SideHeader;
