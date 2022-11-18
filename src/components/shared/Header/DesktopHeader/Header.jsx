// REACT HOOKS
import { useState } from 'react';

//CSS
import './Header.css';

//REACT COMPONENTS
import SideHeader from '../SideHeader/SideHeader';
import SearchSection from '../Search/SearchSection';
import AccountDropDown from './AccountDropDown/AccountDropDown';

//THIRD PARTY
import { Link } from 'react-router-dom';
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const dropDownHandler = () => {
    console.log(isDropDownOpen);
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
              <a href='#'>Cart</a>
              <span className='header__desktop-cart-total'>$100</span>
            </li>
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {isSidebarOpen && <SideHeader onClick={handleSidebarOnclick} />}
        {isSearchOpen && <SearchSection onClick={handleSearchOnclick} />}
      </AnimatePresence>
    </header>
  );
}
