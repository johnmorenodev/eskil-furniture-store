import './Header.css';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

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
          <MenuOutlinedIcon className='header__hamburger' />
        </div>
        <div className='header__desktop'>
          <ul>
            <li>
              <SearchOutlinedIcon />
              <a href='#'>Search</a>
            </li>
            <li>
              <PersonOutlineOutlinedIcon />
              <a href='#'>Account</a>
            </li>
            <li>
              <FavoriteBorderOutlinedIcon />
              <a href='#'>Wishlist</a>
            </li>
            <li>
              <ShoppingBagOutlinedIcon />
              <a href='#'>Cart</a>
              <span className='header__desktop-cart-total'>$100</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
