import { useState } from 'react';

import './Header.css';

import SideHeader from './SideHeader';
import SearchSection from './SearchSection';

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

  const handleSidebarOnclick = () => {
    setIsSidebarOpen(prevValue => !prevValue);
    console.log(isSidebarOpen);
  };

  const handleSearchOnclick = () => {
    setIsSearchOpen(prevValue => !prevValue);
    console.log(isSearchOpen);
  };

  return (
    <header>
      <nav className='header'>
        <div>
          <img
            src='https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/main-logo.png'
            alt='Logo'
            className='header__logo'
          />
        </div>
        <div onClick={handleSidebarOnclick}>
          <HiOutlineMenu className='header__hamburger' />
        </div>
        <div className='header__desktop'>
          <ul>
            <li onClick={handleSearchOnclick}>
              <HiOutlineSearch />
              <a href='#'>Search</a>
            </li>
            <li>
              <HiOutlineUser />
              <a href='#'>Account</a>
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
