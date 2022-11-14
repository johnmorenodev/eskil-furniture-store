//REACT COMPONENTS
import Overlay from '../../../UI/Overlay/Overlay';

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

const SideHeader = ({ onClick }) => {
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
        </div>
      </motion.nav>
    </>
  );
};

export default SideHeader;
