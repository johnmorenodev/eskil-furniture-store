import { useState, useEffect } from 'react';

import LoadingSpinner from '../shared/LoadingSpinner';

import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import './Featured.css';

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

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/featured');
      const data = await response.json();
      console.log(data);
      setFeaturedProducts(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='featured'>
      <p>Featured</p>
      <h3>Discover Products</h3>
      <div className='featured__card-container'>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          featuredProducts.map(prod => {
            return (
              <Link
                key={prod._id}
                to={`products/${prod._id}`}
                className='featured__add-to-cart'
              >
                <div className='featured__card'>
                  <motion.div
                    intial='rest'
                    whileHover='hover'
                    animate='rest'
                    className='featured__image-container'
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
                      className='featured__img'
                    />
                    <div className='featured__buttons'>
                      <div className='featured__buttons-container'>
                        <motion.button
                          variants={buttonMotion}
                          className='featured__button-first'
                        >
                          <HiOutlineEye className='featured__buttons-icon' />
                          Quick View
                        </motion.button>
                      </div>

                      <div className='featured__buttons-container'>
                        <motion.button variants={buttonMotion}>
                          <HiOutlineHeart className='featured__buttons-icon' />
                          <p>Add Wishlist</p>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  <div className='featured__details'>
                    <div className='featured__card-details'>
                      <p>{prod.name}</p>
                      <p className='featured__price'>${prod.price}</p>
                    </div>
                    <Link
                      to={`products/${prod._id}`}
                      className='featured__add-to-cart'
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Featured;
