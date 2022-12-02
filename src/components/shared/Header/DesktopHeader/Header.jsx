// REACT HOOKS
import { useState, useContext } from 'react';

//CSS
import './Header.css';

//REACT COMPONENTS
import SideHeader from '../SideHeader/SideHeader';
import SearchSection from '../Search/SearchSection';
import AccountDropDown from './AccountDropDown/AccountDropDown';
import { AuthContext } from '../../../../context/authContext';

//THIRD PARTY
import { Link } from 'react-router-dom';
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const dropDownHandler = () => {
    setisDropDownOpen(prevValue => !prevValue);
  };

  const handleSidebarOnclick = () => {
    setIsSidebarOpen(prevValue => !prevValue);
  };

  const handleSearchOnclick = () => {
    setIsSearchOpen(prevValue => !prevValue);
  };

  return (
    <header>
      <nav className='header'>
        <Link to='/'>
          <img
            src='https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/main-logo.png'
            alt='Logo'
            className='header__logo'
          />
        </Link>
        <div onClick={handleSidebarOnclick}>
          <HiOutlineMenu className='header__hamburger' />
        </div>
        <div className='header__desktop'>
          <ul>
            <li onClick={handleSearchOnclick}>
              <HiOutlineSearch />
              <a href='#'>Search</a>
            </li>
            <li onClick={dropDownHandler}>
              <AccountDropDown isDropDownOpen={isDropDownOpen} />
            </li>
            <li>
              <HiOutlineHeart />
              <a href='#'>Wishlist</a>
            </li>
            <li>
              <HiOutlineShoppingBag />
              <Link to='/my-account'>Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {isSidebarOpen && (
          <SideHeader
            onClick={handleSidebarOnclick}
            handleSidebarOnclick={handleSidebarOnclick}
          />
        )}
        {isSearchOpen && <SearchSection onClick={handleSearchOnclick} />}
      </AnimatePresence>
    </header>
  );
}
