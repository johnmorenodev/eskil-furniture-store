import { motion } from 'framer-motion';

import './Featured.css';

const DUMMY_FEATURED = [
  {
    id: 0,
    name: 'Poliframe tuffed accnet chair 29.1″W, jet black',
    price: 259.99,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-1-img-1.jpg',
  },
  {
    id: 1,
    name: 'Sauder Boulevard Cafe Lounge Chair, Camel finish',
    price: 168.99,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-2-img-1.jpg',
  },
  {
    id: 2,
    name: 'Ella Chair With Armrests, Solid Birch and Leather Cushion',
    price: 358.89,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-6-img-1.jpg',
  },
  {
    id: 3,
    name: 'Singapore Dark Rattan Handmade Armchair',
    price: 690.89,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-28-img-1.jpg',
  },
  {
    id: 4,
    name: 'Stockholm Minimal Chair, Oak Wood with Fine finish',
    price: 237.89,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-7-img-1.jpg',
  },
  {
    id: 5,
    name: 'Rattan Spider work Armchair, matte lacque & steel legs',
    price: 490.89,
    url: 'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-29-img-1.jpg',
  },
];

const buttonMotion = {
  rest: {
    y: 35,
    transition: {
      ease: 'easeIn',
      delay: 0.2,
    },
  },
  hover: {
    y: 0,
    transition: {
      ease: 'easeIn',
      delay: 0.2,
    },
  },
};

const Featured = () => {
  return (
    <div className='featured'>
      <p>Featured</p>
      <h3>Discover Products</h3>
      <div className='featured__card-container'>
        {DUMMY_FEATURED.map(prod => {
          return (
            <div key={prod.id} className='featured__card'>
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
                      delay: 0.2,
                      duration: 0.2,
                      ease: 'easeInOut',
                    },
                  }}
                  animate={{
                    outline: '0px solid rgba(204, 204, 204, 0)',
                    transition: {
                      delay: 0.2,
                      duration: 0.2,
                      ease: 'easeInOut',
                    },
                  }}
                  src={prod.url}
                  alt={prod.name}
                  className='featured__img'
                />
                <div className='featured__buttons'>
                  <motion.button
                    variants={buttonMotion}
                    className='featured__button-first'
                  >
                    Quick View
                  </motion.button>
                  <motion.button variants={buttonMotion}>
                    Add Wishlist
                  </motion.button>
                </div>
              </motion.div>

              <div className='featured__details'>
                <div className='featured__card-details'>
                  <p>{prod.name}</p>
                  <p className='featured__price'>${prod.price}</p>
                </div>
                <a href='#' className='featured__add-to-cart'>
                  Add to Cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
