import { useContext } from 'react';

//CSS
import './CardWithBorder.css';

import { AuthContext } from '../../../context/authContext';

import { fetchAddProductToCart } from '../../../utils/api';

//THIRD PARTY
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';

const buttonMotion = {
  rest: {
    y: 35,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
  hover: {
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
};

const CardWithBorder = ({ prod }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const addToCartHandler = () => {
    if (!user) {
      return navigate('/my-account/log-in');
    }
    fetchAddProductToCart({
      quantity: 1,
      token: user.token,
      productId: prod._id,
    });
  };
  return (
    <div className='card__card'>
      <Link to={`/products/${prod._id}`}>
        <motion.div
          intial='rest'
          whileHover='hover'
          animate='rest'
          className='card__image-container'
        >
          <motion.img
            initial={{
              outline: '0px solid rgba(204, 204, 204, 0)',
            }}
            whileHover={{
              outline: '1px solid rgba(204, 204, 204, 1)',
              transition: {
                duration: 0.4,
                ease: 'easeInOut',
              },
            }}
            animate={{
              outline: '0px solid rgba(204, 204, 204, 0)',
              transition: {
                duration: 0.4,
                ease: 'easeInOut',
              },
            }}
            src={prod.imgUrl}
            alt={prod.name}
            className='card__img'
          />
          <div className='card__buttons'>
            <div className='card__buttons-container'>
              <motion.button
                variants={buttonMotion}
                className='card__button-first'
              >
                <HiOutlineEye className='card__buttons-icon' />
                Quick View
              </motion.button>
            </div>

            <div className='card__buttons-container'>
              <motion.button variants={buttonMotion}>
                <HiOutlineHeart className='card__buttons-icon' />
                <p>Add Wishlist</p>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
      <div className='card__details'>
        <div className='card__card-details'>
          <p className='card__product-name'>{prod.name}</p>
          <p className='card__price'>${prod.price}</p>
        </div>
        <button className='card__add-to-cart' onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardWithBorder;
