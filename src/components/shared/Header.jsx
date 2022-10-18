import './Header.css';

import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi';

export default function Header() {
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
        <div>
          <HiOutlineMenu className='header__hamburger' />
        </div>
        <div className='header__desktop'>
          <ul>
            <li>
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
    </header>
  );
}
